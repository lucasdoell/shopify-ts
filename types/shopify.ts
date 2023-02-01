export type ProductQueryResult = {
  collections: {
    edges: {
      node: {
        products: {
          edges: ProductEdge[];
        };
      };
    }[];
  };
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  }[];
  options: {
    name: string;
    values: string[];
    id: string;
  }[];
  variants: {
    edges: ProductVariant[];
  };
};

export type ProductVariant = {
  node: {
    selectedOptions: {
      name: string;
      value: string;
    }[];
    image: {
      url: string;
      altText: string | null;
    };
    title: string;
    id: string;
    price: {
      amount: string;
    };
  };
};

export type SelectedOptions = {
  name: string;
  value: string;
}[];

export type ProductOptions = {
  name: string;
  values: string[];
  selectedOptions: SelectedOptions;
  setOptions: any;
};

export type ProductEdge = {
  node: {
    priceRange: {
      minVariantPrice: {
        amount: string;
      };
    };
    handle: string;
    title: string;
    id: string;
    images: {
      edges: {
        node: {
          url: string;
          altText: string | null;
        };
      }[];
    };
  };
};

export type ProductNode = {
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  handle: string;
  title: string;
  id: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
};

export type CartItem = {
  id: string;
  variantQuantity: number;
};

export type AllProductsResult = {
  products: {
    edges: ProductEdge[];
  };
}[];
