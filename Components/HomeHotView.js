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
    Image,
    TouchableOpacity
} from 'react-native';
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var HomeHotView = React.createClass({
    render(){
        return (
                <View style={styles.container}>
                    <View style={styles.list}>
                        <Text style={{color: this.props.color, fontSize: 25}}>{this.props.top}</Text>
                        <Text style={{fontSize: 20}}>{this.props.bottom}</Text>
                    </View>
                    <View style={styles.list}>
                        <Image style={styles.imgList} source={{uri: this.props.img}}/>
                    </View>
                </View>
        );
    },

    clickCell(data){
        this.props.callBackClickCell(data);
    },
});

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 1,
        height: height * 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    list: {
        width: width / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgList: {
        width: (width / 2 - 1 ) * 0.35,
        height: height * 0.2 * 0.35,
        resizeMode: 'contain',
    },
});

module.exports = HomeHotView;

