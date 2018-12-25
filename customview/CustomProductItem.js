import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        flex:  1
    },
    containerPadding: {
        padding: 20
    },
    nameText: {
        marginBottom: 10
    },
    image: {width: 50, height: 50}
})
const CustomProductItem = ({name, imgLink, price, onClick}) => (
  <View style={[styles.containerPadding]}>
      <TouchableOpacity onPress={onClick}  style={styles.container} >
          <Image style={styles.image}
                 source={{uri: imgLink}}/>
          <View style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20
          }}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.nameText}>{price}</Text>
          </View>

      </TouchableOpacity>
  </View>
);

export default CustomProductItem;
