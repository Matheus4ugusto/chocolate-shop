import { iProductCounterContext } from "@/types/context";
import { ReactNode, createContext, useContext, useState } from "react";

const ProductCounterContext = createContext<iProductCounterContext>(
  {} as iProductCounterContext
);

const ProductCounterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [amount, setAmount] = useState(0);

  const increase = () => {
    setAmount(amount + 1);
  };

  const decrease = () => {
    setAmount(amount - 1);
  };

  return (
    <ProductCounterContext.Provider value={{ amount, increase, decrease, setAmount }}>
      {children}
    </ProductCounterContext.Provider>
  );
};

export default ProductCounterContextProvider;

export const useCounter = () => useContext(ProductCounterContext);
