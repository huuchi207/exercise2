import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex:  1, margin: 5
    },
    leftPane:{
      flexDirection: "column",
      flex: 9
    },
    buttonAdd: {
        width: 20, height: 20
    },
    mainInfoView:{
      flexDirection: "row",
      flex: 8,
        alignItems: "center"
    },
    image: {width: 50, height: 50, flex: 1},
    subMainView:{
      flex: 6,
      flexDirection: "column",
        marginLeft: 5

    },
    nameText: {
        fontWeight: "bold",
        fontSize: 15
    },
    countText:{
        fontWeight: "bold",
        fontSize: 15
    },
    priceText:{
        fontSize: 13
    },
    inStockView: {
        flex: 2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 55,
        flexDirection: "row",
        alignItems: "center",
    },
})
const CustomListItem = ({name, count, price, inStock}) => (
    <View>
        <TouchableOpacity style={styles.container} >
            <View style={styles.leftPane}>
                <View style={styles.mainInfoView}>
                    <Image style={styles.image}
                           source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                    <View style={styles.subMainView}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.countText}>{count}</Text>
                        <Text style={styles.priceText}>{price}</Text>
                    </View>
                </View>
                <View style={styles.inStockView}>
                    <Image style={{width: 20, height: 20, marginRight: 5}}
                           source={require("../drawable/img/ic_cart.png")}/>
                    <Text>{inStock}</Text>
                </View>
            </View>
            <TouchableOpacity style={{flex: 0.7}}>
                <Image style={styles.buttonAdd}
                       source={require("../drawable/img/add.png")}/>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
);

export default CustomListItem;
