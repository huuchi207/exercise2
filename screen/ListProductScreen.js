import React from "react";
import {View, Button, FlatList} from "react-native";
import * as Constants from "../Constants";
import CustomProductItem from "../customview/CustomProductItem";
import IconBadge from "./ListProductCategoryScreen";
import {connect} from 'react-redux';
import * as actions from '../actions';
class ListProductScreen extends React.Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;
        return {
            title: params ?
                (params.isProductInCartList ? "Products In Cart" : params.category.name) : '',
        };
    };

    constructor(props) {
        super(props);
        if (Constants.FAKE) {
            if (this.props.navigation.state.params.isProductInCartList) {
                this.state = {
                    listProduct: this.props.productsInCart
                }
            } else {
                this.state = {
                    listProduct: [
                        {
                            name: "Item 1",
                            imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                            price: "200,000 VND",
                            description: "Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."
                        },
                        {
                            name: "Item 1",
                            imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                            price: "210,000 VND",
                            description: "Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."
                        },
                        {
                            name: "Item 1",
                            imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                            price: "220,000 VND",
                            description: "Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."
                        },
                        {
                            name: "Item 1",
                            imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                            price: "230,000 VND",
                            description: "Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."
                        }, {
                            name: "Item 1",
                            imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                            price: "240,000 VND",
                            description: "Specifies font weight. The values 'normal' and 'bold' are supported for most fonts. Not all fonts have a variant for each of the numeric values, in that case the closest one is chosen."
                        }
                    ]
                }

            }

        } else {
            if (this.props.navigation.state.params.isProductInCartList) {
                this.state = {
                    listProduct: this.props.productsInCart
                }
            } else {
                this.state = {
                    currentCategory: this.props.navigation.state.params.category,
                    listProduct: []
                }
            }
        }
    }

    render() {
        return <View>
            <FlatList
                data={this.state.listProduct}
                renderItem={({item, index}) => (
                    <CustomProductItem name={item.name}
                                       imgLink={item.imgLink}
                                       price={item.price}
                                       onClick={() => {
                                           this.onClick(index);
                                       }}/>
                )}
                numColumns={1}
            /></View>;
    }

    onClick = (index) => {
        this.props.navigation.push("ProductDetail", {
            productDetail: this.state.listProduct[index],
            // onUpdateProductInCart: this.onUpdateProductInCart
        })
    }

    componentDidMount() {
        if (!this.props.navigation.state.params.isProductInCartList){
            return fetch(Constants.API_BASE_URL+"/category_list/"+this.state.currentCategory.id+"/product_isist")
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({listProduct: responseJson});
                })
                .catch((error) =>{
                    console.error(error);
                });
        }

    }
}
const mapStateToProps = state =>({
    productsInCart: state.productsInCart
});

export default connect(mapStateToProps, actions)(ListProductScreen);
