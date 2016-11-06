/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');


var HomeMenuView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.imgList} source={{uri: this.props.icon}}/>
                <Text style={styles.leftStyle}>{this.props.leftTitle}</Text>
                <Text style={styles.rightStyle}>{this.props.rightTitle}</Text>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.05,
        flexDirection: 'row',
        alignItems : 'center',
    },
    imgList: {
        width: width * 0.08,
        height: height * 0.05,
        resizeMode: 'contain',
        position : 'absolute',
        left : width * 0.02
    },
    leftStyle: {
        fontSize : 20,
        position : 'absolute',
        left : width * 0.12,
        top : height * 0.015
    },
    rightStyle:{
        fontSize : 20,
        position : 'absolute',
        right : width * 0.02,
        top : height * 0.015
    }
});

module.exports = HomeMenuView;

