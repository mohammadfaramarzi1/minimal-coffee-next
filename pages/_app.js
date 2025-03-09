import Navbar from "@/components/modules/Navbar/Navbar";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
