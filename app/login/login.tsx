"use client";
import { useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { safeUser } from "@/types";

interface LoginProps {
  currentUser: safeUser | null;
}

const LoginForm = ({ currentUser }: LoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, []);

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged in");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting..</p>;
  }
  return (
    <>
      <h1 className="font-semibold">Log in</h1>
      <Button
        outline
        label="Sign in with google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="bg-slate-300 w-full h-px"></hr>
      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <Button
        label={isLoading ? "Loading.." : "Sign in"}
        onClick={handleSubmit(onsubmit)}
      />

      <p className="text-sm">
        Need an account?
        <Link className="pl-2 underline" href={"/register"}>
          Log in
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
