import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
const CustomGridItem = ({name, imgLink, onClick}) => (
  <View style={[styles.container, styles.containerPadding]}>
      <TouchableOpacity onPress={onClick}  style={styles.container} >
          <Text style={styles.nameText}>{name}</Text>
          <Image style={styles.image}
                 source={{uri: imgLink}}/>
      </TouchableOpacity>
  </View>
);

export default CustomGridItem;
