import Image from "next/legacy/image";
import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export default function ProductPageContent({ product }: any) {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center space-y-8 md:flex-row 
      md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 lg:max-w-6xl w-11/12 mx-auto"
      >
        <div className="w-full max-w-md border bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg md:w-1/2">
          <div className="relative h-96 w-full">
            <Image
              src={product.images.edges[0].node.url}
              alt="Product image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="mx-auto w-11/12 max-w-3xl space-y-8 pt-16 dark:text-white md:space-x-4 lg:space-x-8">
        {product.description}
      </p>
      <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
