import * as productInCartAction from "../actions/productInCart";
const productsInCart =[];
export default function (state = productsInCart, action) {
    switch (action.type) {
        case productInCartAction.ADD:
            console.log("new product", action.payload);
            return [...productsInCart, action.payload];
        default:
            return state;
    }
}