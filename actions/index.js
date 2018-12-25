import * as productInCart from "./productInCart";


export const updateProductsInCart = (product) => ({payload: product, type: productInCart.ADD});