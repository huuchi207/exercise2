import React from "react";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import GridView from 'react-native-super-grid';
import * as Constants from "../Constants";
import CustomGridItem from "../customview/CustomGridItem";
import IconBadge from 'react-native-icon-badge';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListProductCategoryScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "Product Category",
            headerRight: (
                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                    <TouchableOpacity onPress={() => {
                        navigation.push("ListProductScreen", {
                            isProductInCartList : true,
                            productsInCart : navigation.getParam("productsInCart"),
                        });
                    }}>
                        <IconBadge
                            MainElement={
                                <View style={{backgroundColor:'#489EFE',
                                    width:50,
                                    height:50,
                                    margin:6
                                }}/>
                            }
                            BadgeElement={
                                <Text style={{color:'#FFFFFF'}}>{
                                    navigation.getParam("numberOfProductsInCart")
                                }</Text>
                            }
                            IconBadgeStyle={
                                {width:30,
                                    height:30,
                                    backgroundColor: '#FF00EE'}
                            }
                        />
                    </TouchableOpacity>
                </View>
            ),
        };
    };
    componentDidMount() {

    }

    constructor(props) {
        super(props);

    }

    render() {
        this.props.navigation.numberOfProductsInCart = this.props.productsInCart!== undefined ? this.props.productsInCart.length : 0;
        console.log("this.props.productsInCart", this.props.productsInCart);
        if (Constants.FAKE) {
            this.state = {
                listCategory: [
                    {
                        name: "Ao nam",
                        imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                    },
                    {
                        name: "Ao nu",
                        imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                    }, {
                        name: "Ao tre em",
                        imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                    },
                    {
                        name: "Ao nguoi gia",
                        imgLink: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                    }
                ]
            }
        } else {
            this.state = {
                listCategory: []
            }
        }
        return <View>
            <FlatList
                data={this.state.listCategory}
                renderItem={({item, index}) => (
                    <CustomGridItem name={item.name}
                                    imgLink={item.imgLink}
                                    onClick={() => {
                                        this.onClick(index);
                                    }}/>
                )}
                numColumns={2}
            /></View>;
    }

    onClick = (index) => {
        this.props.navigation.push("ListProductScreen", {
            category: this.state.listCategory[index],
            isProductInCartList : false
        })
    }
    onUpdateProductsInCart= productsInCart =>{
                this.setState({productsInCart});
                this.props.navigation.setParams(
                    { productsInCart})

        console.log("product cate products In cart",  this.state.productsInCart);

    }


}
const mapStateToProps = state =>({
    productsInCart: state.productsInCart
});

export default connect(mapStateToProps, actions)(ListProductCategoryScreen);
