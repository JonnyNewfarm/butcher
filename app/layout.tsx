import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProductCartProvider from "@/provider/ProductCartProvider";
import { Toaster } from "react-hot-toast";
import { getLoggedInUser } from "@/actions/getLoggedInUser";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "test",
  content:
    "connect-src 'self' js.stripe.com code.jquery.com cdn.jsdelivr.net maps.googleapis.com  'unsafe-eval'; ",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#FFFFFF",
            },
          }}
        />
        <ProductCartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ProductCartProvider>
      </body>
    </html>
  );
}
