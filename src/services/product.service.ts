import {api} from "@/services/api";

export const getProductById = async (id: number) => {
    const {data} = await api.get("products/" + id)
    return data;
};

export const getProducts = async () => {
    const {data} = await api.get(`products`);
    return data;
};