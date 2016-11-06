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
    View
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var Recommend = React.createClass({
    getInitialState(){
        return {
            myStyle: {}
        };
    },
    render(){
        return (
            <View style={styles.homeView}>
                <View style={[styles.innerView, this.state.myStyle]}>
                    <Text style={styles.textStyle}>{this.props.top}</Text>
                    <Text style={styles.textStyle}>{this.props.bottom}</Text>
                </View>
            </View>
        );
    },
    componentDidMount(){
        if (this.props.hasBorder) {
            this.setState({
                myStyle: {borderColor: 'white', borderRightWidth: 1}
            })
        }
    }
});

const styles = StyleSheet.create({
    homeView: {
        width: width / 3,
        height: height * 0.06,
        backgroundColor:'rgb(251,201,192)',
        justifyContent: 'center'
    },
    innerView: {
        height : height * 0.06 - 6,
        alignItems : 'center',
        justifyContent : 'center',

    },
    textStyle:{
        color : 'white',
        fontSize : 20,
    }
});

module.exports = Recommend;

