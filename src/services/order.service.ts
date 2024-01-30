import {api} from "@/services/api";

export interface CreateOrderData {
    products: {
        id: number;
        quantity: number;
    }[];
}

export const createOrder = async (values: CreateOrderData) => {
    const {data} = await api.post("orders", values);
    return data;
}

export const checkout = async (orderId: number) => {
    const {data} = await api.post(`/orders/${orderId}/checkout`);
    return data;
};