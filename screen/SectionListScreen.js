import React from "react";
import {View, SectionList, Text} from "react-native";
import CustomHeaderSectionList from "../customview/CustomHeaderSectionList"
import {connect} from "react-redux";
import * as actions from "../redux/actions";
import CustomListItem from "../customview/CustomListItem";

class SectionListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionList: exampleSectionList
        }
        this.reservedList = new Map();
    }

    render() {
        console.log(this.state.sectionList[0]);
        return (
            <View style={{flex: 1}}>
                <SectionList
                    sections={this.state.sectionList}

                    renderSectionHeader={({section}) =>
                        <CustomHeaderSectionList name={section.title} onClick={() => {
                            this.onClickHeader(section.index)
                        }}
                        />

                    }
                    renderItem={({item}) => (
                        <CustomListItem
                            name={item.name}
                            count={item.count}
                            price={item.price}
                            inStock={item.inStock}
                        />)}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }


    onClickHeader = (index) => {
        var cloneState = this.state.sectionList;
        var selectedSection = this.state.sectionList[index];
        if (selectedSection.data.length > 0) {
            this.reservedList.set(selectedSection.title, selectedSection.data);
            cloneState[index] =
                {
                    index: index,
                    title: selectedSection.title,
                    data: []
                };
            this.setState({
                sectionList: cloneState
            })
        } else {
            cloneState[index] =
                {
                    index: index,
                    title: selectedSection.title,
                    data: this.reservedList.get(selectedSection.title)
                };
            this.setState({
                sectionList: cloneState
            })
        }
    }
}


export default connect(null, actions)(SectionListScreen);
const exampleSectionList = [
    {
        index: 0, title: "Món gà", data: [
            {
                name: "Gà giòn giòn 1",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Gà giòn cay 2",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 17
            },
            {
                name: "Xúc xích su mô 3",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chân gà giòn cay 4",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chả giò gà",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            }
        ]
    }, {
        index: 1, title: "Bánh mì", data: [{
            name: "Gà giòn giòn 5",
            count: "1 miếng",
            price: "30,000đ",
            inStock: 10
        },
            {
                name: "Gà giòn cay 6",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 17
            },
            {
                name: "Xúc xích su mô 7",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chân gà giòn cay 8",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chả giò gà 9",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            }]
    }, {
        index: 2, title: "Ăn vặt", data: [{
            name: "Gà giòn giòn xxx",
            count: "1 miếng",
            price: "30,000đ",
            inStock: 10
        },
            {
                name: "Gà giòn cay 10",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 17
            },
            {
                name: "Xúc xích su mô 11",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chân gà giòn cay 12",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chả giò gà 13",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            }]
    }, {
        index: 3, title: "Đồ uống", data: [{
            name: "Gà giòn giòn xx",
            count: "1 miếng",
            price: "30,000đ",
            inStock: 10
        },
            {
                name: "Gà giòn cay 14",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 17
            },
            {
                name: "Xúc xích su mô 15",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chân gà giòn cay 16",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            },
            {
                name: "Chả giò gà 17",
                count: "1 miếng",
                price: "30,000đ",
                inStock: 10
            }]
    }
];