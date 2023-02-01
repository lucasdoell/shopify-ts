import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ShopProvider from "@/context/shopContext";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}
