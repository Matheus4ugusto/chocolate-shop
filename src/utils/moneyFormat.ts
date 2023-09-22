export const moneyFormat = (price: number) =>
  price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
