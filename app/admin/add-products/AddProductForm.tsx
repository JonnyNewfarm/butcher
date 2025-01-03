"use client";

import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CheckBox from "@/app/components/inputs/CheckBox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { categories } from "@/utils/categories";
import { colors } from "@/utils/colors";
import { gender } from "@/utils/genders";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import SelectedColor from "@/app/components/inputs/SelectedColor";
import { brands } from "@/utils/brands";

// Image type, when Uploaded
export type ImageType = {
  image: File | null;
  color: string;
};

export type UploadedImageType = {
  image: string;
};

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setIamges] = useState<ImageType[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
      gender: "",
    },
  });

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  // if Product is created, set image to null
  useEffect(() => {
    if (isProductCreated) {
      reset();
      setIamges(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);

  // SubmitHandler from react-hook-form
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product Data", data);

    // Upload images to firebase
    setIsLoading(true);
    let upLoadedImages: UploadedImageType[] = [];

    if (!data.category) {
      setIsLoading(false);
      return toast.error("Category is not selected");
    }

    if (!data.gender) {
      return toast.error("Gender not selected");
    }

    if (!data.images || data.images.length == 0) {
      setIsLoading(false);
      return toast.error("No selected images!");
    }

    const handleImageUploads = async () => {
      toast("Creating product, please wait ... ");
      try {
        for (const item of data.images) {
          if (item.image) {
            const fileName = new Date().getTime() + "-" + item.image.name;
            const storage = getStorage(firebaseApp);

            const storageRef = ref(storage, `products/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.image);

            await new Promise<void>((resolve, reject) => {
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case "paused":
                      console.log("Upload is paused");
                      break;
                    case "running":
                      console.log("Upload is running");
                      break;
                  }
                },
                (error) => {
                  console.log("Error uploading image", error);
                  reject(error);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                      upLoadedImages.push({
                        ...item,
                        image: downloadURL,
                      });
                      console.log("File available at", downloadURL);
                      resolve();
                    })
                    .catch((error) => {
                      console.log("Error getting the download URL", error);
                      reject(error);
                    });
                }
              );
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };

    await handleImageUploads();
    const productData = { ...data, images: upLoadedImages };

    axios
      .post("/api/product", productData)
      .then(() => {
        toast.success("Product created");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong when saving product to db");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const brand = watch("brand");
  const setCustomBrandValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const genders = watch("gender");
  const setCustomV = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addImageToState = useCallback((value: ImageType) => {
    setIamges((prev) => {
      // If dont have previous value, just return the value
      if (!prev) {
        return [value];
      }

      // else return previous value plus add new value
      return [...prev, value];
    });
  }, []);

  const removeImageFromState = useCallback((value: ImageType) => {
    setIamges((prev) => {
      if (prev) {
        const filteredImages = prev.filter((item) => item.color != value.color);
      }

      return prev;
    });
  }, []);

  // Role permission: Admin
  return (
    <>
      <Heading title="Add a Product" center />
      {/* Input Name of product */}
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {/* Input Price of product */}
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        type="number"
        errors={errors}
        required
      />
      {/* Input Brand of product */}

      {/* TextArea Description of product */}
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {/* small customeCheckBox of product */}
      <CheckBox
        id="inStock"
        register={register}
        label="This Product is in stock"
      />
      {/* Select a Category form */}
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold ">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
          {categories.map((item) => {
            if (item.label == "All") {
              return null;
            }
            // show the category item
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category == item.label}
                  label={item.label}
                  key={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full font-medium">
        <div className="mb-2 font-semibold ">Select a Brand</div>
        <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
          {brands.map((item) => {
            if (item.label == "All") {
              return null;
            }
            // show the category item
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(brand) => setCustomBrandValue("brand", brand)}
                  selected={brand == item.label}
                  label={item.label}
                  key={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full font-medium">
        <div className="mb-2 font-semibold ">Select gender</div>
        <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
          {gender.map((item) => {
            if (item.label == "All") {
              return null;
            }
            // show the category item
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(gender) => setCustomV("gender", gender)}
                  selected={genders == item.label}
                  label={item.label}
                  key={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold">
            Select the available product colors and upload their images.
          </div>
          <div>
            You must upload an image for each of the color selected otherwise
            your color selection will be ignored
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <>
                {/* Select color - drag image of item */}
                <SelectedColor
                  key={index}
                  item={item}
                  addImageToState={addImageToState}
                  removeImageFromState={removeImageFromState}
                  isProductCreated={isProductCreated}
                />
              </>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        label={isLoading ? "Loading..." : "Add Product"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProductForm;
