import type { Metadata } from "next";
import { Kaisei_Tokumin, Mulish } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProductCartProvider from "@/provider/ProductCartProvider";
import { Toaster } from "react-hot-toast";
import { getLoggedInUser } from "@/actions/getLoggedInUser";

const poppins = Mulish({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "shades",
  content:
    "connect-src 'self' js.stripe.com code.jquery.com cdn.jsdelivr.net maps.googleapis.com  'unsafe-eval'; ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getLoggedInUser();

  return (
    <html
      style={{ scrollbarWidth: "thin" }}
      lang="en"
      className=" bg-custom-color"
    >
      <body className={poppins.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(41 37 36)",
              color: "#EEE2DC",
            },
          }}
        />
        <ProductCartProvider>
          <div className="flex relative flex-col min-h-screen">
            <NavBar currentUser={currentUser} />

            <main className="flex-grow overflow-clip">{children}</main>
            <Footer />
          </div>
        </ProductCartProvider>
      </body>
    </html>
  );
}
