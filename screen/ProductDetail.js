import React from "react";
import {View, Text, Button, Dimensions, Image, StyleSheet} from "react-native";
import * as Constants from "../Constants";
import {connect} from "react-redux";
import * as actions from '../actions';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.productDetail  = this.props.navigation.getParam('productDetail');
    }

    render() {

        return <View style={styles.container}>
            <Image style={styles.image} source={{uri: this.productDetail.imgLink}}/>
            <View style={styles.info}>
                <Text style={styles.label}>Tên sản phẩm: </Text>
                <Text style={styles.detail}>{this.productDetail.name}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.label}>Giá: </Text>
                <Text style={styles.detail}>{this.productDetail.price}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.label}>Mô tả: </Text>
                <Text style={styles.detail}>{this.productDetail.description}</Text>
            </View>
            <Button title="Add to Cart" onPress={this.addToCart}/>
        </View>
    }
    addToCart = () => {
        this.props.updateProductsInCart(this.productDetail);
        this.props.navigation.goBack();
    }
}
const styles= StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    image: {
        width: Dimensions.get("window").width-10,
        height: Dimensions.get("window").height*2/5,
        marginBottom: 20
    },
    info: {
        width: Dimensions.get("window").width,
        flexDirection: "row",
        marginBottom: 10
    },
    label: {
        flex: 0.5,
        // fontStyle: "bold"
    },
    detail: {
        flex: 0.5
    }

});

const mapStateToProps = state =>({
    productsInCart: state.productsInCart
});

export default connect(mapStateToProps, actions)(ProductDetail);

