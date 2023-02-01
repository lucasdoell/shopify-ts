import { useState, useContext } from "react";
import { formatter } from "@/utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "@/context/shopContext";
import type { ProductQueryResult, ProductVariant } from "@/types/shopify";

type SelectedOption = {
  name?: string;
  value?: string;
};

type ProductOption = {
  name?: string;
  values?: string[];
  id?: string;
};

export default function ProductForm({
  product,
}: {
  product: ProductQueryResult;
}) {
  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map(
    (variant: ProductVariant) => {
      const allOptions: SelectedOption = {};

      variant.node.selectedOptions.map((item: SelectedOption) => {
        allOptions[item.name as keyof SelectedOption] = item.value;
      });

      return {
        id: variant.node.id,
        title: product.title,
        handle: product.handle,
        image: variant.node.image?.url,
        options: allOptions,
        variantTitle: variant.node.title,
        variantPrice: variant.node.price.amount,
        variantQuantity: 1,
      };
    }
  );

  const defaultValues: ProductOption = {};
  product.options.map((item: ProductOption) => {
    (defaultValues as any)[item.name!] = item.values![0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name: string, value: string) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="flex w-full flex-col rounded-2xl p-4 shadow-lg md:w-1/3">
      <h2 className="text-2xl font-bold dark:text-white">{product.title}</h2>
      <span className="pb-3 dark:text-white">
        {formatter.format(selectedVariant.variantPrice as any)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions as any}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="mt-3 rounded-lg bg-black px-2 py-3 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
