import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import React from "react";
import {connect} from "react-redux";
import * as actions from "../redux/actions";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        flex:  1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    header:{
        color: "#808080",
        flex: 9,
        fontSize: 15
    },
    arrow: {
        width: 20,
        height: 20,
        flex: 1,
    }
});
export default class CustomHeaderSectionList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: "",
            isCollapsed: false
        }
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,

        })
    }

    render(){
        // console.log(this.props);
        return <View style={{flex: 1, width: Dimensions.get("window").width
        }}>
            <TouchableOpacity onPress={()=>{
                this.setState({
                    isCollapsed: !this.state.isCollapsed
                });
                this.props.onClick()
            }}  style={styles.container} >
                <Text style={styles.header}>{this.state.name}</Text>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}} >
                    <Image style= {styles.arrow}
                           source={this.state.isCollapsed
                               ? require("../drawable/img/arrow_right.png")
                               : require("../drawable/img/arrow_up.png")}
                    />
                </View>
            </TouchableOpacity>
        </View>
    }
};

// export default connect(null, null)(CustomHeaderSectionList);
