import React from "react";
import {View, FlatList, StyleSheet, Text, TouchableOpacity, PanResponder, Dimensions} from "react-native";

export default class TabViewUsingScrollView extends React.Component{
    constructor(props){
        super(props);
        var listPage=[];
        for (var i = 0; i<20; i++){
            listPage.push(i);
        }
        this.state={
            currentPage: 0,
            listPage
        }

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder : (evt, gestureState)=>true,
            onPanResponderMove: (evt, gestureState)=> {

            },
            onPanResponderRelease : (e, {vx,dx})=>{
                if (Math.abs(dx) >= 0.2 * Dimensions.get("window").width) {
                    if (dx<0){//swipe to right
                        if (this.state.currentPage< this.state.listPage.length-1){
                            this.setState(prevState => {
                                return {currentPage :prevState.currentPage+1}
                            })
                            setTimeout(() => {
                               this.scrollToXValueOfCurrentPageIndicator();
                            }, 50)
                        }
                    } else {
                        if (this.state.currentPage>0){
                            this.setState(prevState => {
                                return {currentPage :prevState.currentPage-1}
                            })
                            setTimeout(() => {
                                this.scrollToXValueOfCurrentPageIndicator();
                            }, 50)
                        }
                    }
                }
            }
        });
    }
    componentDidMount() {
        setTimeout(() => {
            console.log("this.state.currentPage", this.state.currentPage);
            // this.flatList.scrollToIndex({index: this.state.currentPage, animated: true})
            //TODO: think about formula
            this.flatList.scrollToOffset({offset: (11+1-0.5)*60})

        }, 50)
    }
    scrollToXValueOfCurrentPageIndicator = () =>{
        var currentPageOrder = this.state.currentPage+1;
        var numberOfVisiblePageIndicator = Dimensions.get("window").width/ 60;
        if (currentPageOrder<= numberOfVisiblePageIndicator){
            this.flatList.scrollToOffset({offset: 0})
        } else {
            var distanceXValueBetweenCenterAndCurrentPageIndicator= (currentPageOrder-0.5)/numberOfVisiblePageIndicator*60-
                Dimensions.get("window").width/2;
            if (distanceXValueBetweenCenterAndCurrentPageIndicator> 0){
                this.flatList.scrollToOffset({offset: (currentPageOrder-0.5)*60 + Dimensions.get("window").width/2})
            } else {
                this.flatList.scrollToOffset({offset: (currentPageOrder-0.5)*60 - Dimensions.get("window").width/2})
            }
        }
    }

    render(){
        return <View style={styles.container}>
                <FlatList
                    style={styles.customTabView}
                    horizontal={true}
                    data={this.state.listPage}
                    renderItem={({item, index})=>(
                        <TouchableOpacity
                            onPress={()=>{this.onSelectTab(index)}}
                            style={[{width:60, height: 40, alignItems: "center", justifyContent: "center",
                                borderWidth: 0.5,
                                borderColor: '#d6d7da'},
                            this.state.currentPage===index && {borderColor: '#0892da'}]}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index)=> index.toString()}
                    showsHorizontalScrollIndicator={false}
                    extraData={this.state.currentPage}
                    ref={ref => this.flatList = ref}
                    onScrollToIndexFailed={()=>{}}
                />
                <View {...this._panResponder.panHandlers} style={styles.content} >
                    <Text>Page {this.state.currentPage}</Text>
                </View>
            </View>
    }

    onSelectTab=(index)=>{
            console.log("selected index", index);
            if (this.state.currentPage===index){
                return;
            }
            this.setState({
                currentPage: index
            });

    }
}
const styles= StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: "column"
    },
    customTabView:{
        flex: 1
    },
    content:{
        flex: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.01)"
    }
});