export const moneyFormat = (preco: number) =>
  preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
