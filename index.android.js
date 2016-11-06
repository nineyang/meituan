/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Lunch from './Components/Lunch';


var Shop = React.createClass({
    render(){
        return(
            <Navigator
                initialRoute={{name : '主页' , component : Lunch}}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromLeft;
                }}
                renderScene={(route , navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
            />
        );
    },
});

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Shop', () => Shop);
