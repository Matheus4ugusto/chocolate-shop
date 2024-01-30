export const moneyFormat = (price: number | undefined) => {
    if (price === undefined || price === null) {
        return "N/A"; // or any default value
    }
    return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};