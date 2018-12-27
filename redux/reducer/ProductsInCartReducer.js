import * as productInCartAction from "../actions/productInCart";
var productsInCart =[];
export default function (state = productsInCart, action) {
    switch (action.type) {
        case productInCartAction.ADD:
            console.log("new product", action.payload);
            return [...state, action.payload];
        default:
            console.log("not adding");
            return state;
    }
}