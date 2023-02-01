import { getAllProducts, getProduct } from "@/lib/shopify";
import ProductPageContent from "@/components/ProductPageContent";
import type { ProductEdge } from "@/types/shopify";

export default function ProductPage({ product }: any) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item: ProductEdge) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
