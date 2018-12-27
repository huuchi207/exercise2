/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import ListProductCategoryScreen from "./screen/ListProductCategoryScreen";
import ListProductScreen from "./screen/ListProductScreen";
import ProductDetail from "./screen/ProductDetail";
import SectionListScreen from "./screen/SectionListScreen";
import store from './redux/store';
import {Provider} from 'react-redux';

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store = {store}>
                    <MainView/>
            </Provider>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        ListProductCategoryScreen,
        ListProductScreen,
        ProductDetail,
        SectionListScreen
    },
    {
        initialRouteName: "SectionListScreen",
        defaultNavigationOptions: {

        }
    }
    )
;

const MainView = createAppContainer(AppNavigator);