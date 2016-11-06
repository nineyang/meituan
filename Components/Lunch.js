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
    Image,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Main from './Main';

var Lunch = React.createClass({


    render(){
        return(
            <Image source={{uri:'launchimage'}} style={styles.lunch}/>
        );
    },

    componentDidMount(){
        setTimeout(()=>{
           this.props.navigator.replace({
                component : Main
           })
        } , 1000);
    },
});

const styles = StyleSheet.create({
    lunch : {
        flex : 1,
    },
});

module.exports = Lunch;

