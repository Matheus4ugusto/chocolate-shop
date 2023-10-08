import { useCounter } from "@/contexts/ProductCounterContext";
import * as S from "./counter.style";

const Counter: React.FC = () => {
  const { increase, amount, decrease, setAmount } = useCounter();
  return (
    <S.Div>
      {amount > 1 ? (
        <S.Button onClick={decrease}>-1</S.Button>
      ) : (
        <S.Button onClick={decrease} disabled>
          -1
        </S.Button>
      )}
      <S.Input type="text" value={amount.toString()} />
      <S.Button onClick={increase}>+1</S.Button>
    </S.Div>
  );
};

export default Counter;
