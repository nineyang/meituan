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
    ListView,
    ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let localData = require('../LocalData/HomeMenu.json');
let HomeListView = require('./HomeListView');

var TopView = React.createClass({
    getInitialState(){
        return {
            curr_data: [],
            curr_page: 0,
        };
    },
    render(){
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                    style={{backgroundColor : 'white'}}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.pointer}>
                    {this.renderPointer()}
                </View>
            </View>
        );
    },

    renderScrollItem(){
        let itemArr = [];
        for (let i = 0; i < localData.data.length; ++i) {
            itemArr.push(<HomeListView style={styles.listStyle} key={i} dataArr={localData.data[i]}/>);
        }
        return itemArr;
    },

    renderRow(rowData){
        return (
            <View>
                <Image source={{uri: rowData.image}} style={{width: 40, height: 40}}/>
                <Text>{rowData.title}</Text>
            </View>
        );
    },

    //小原点
    renderPointer(){
        let itemArr = [];
        let curr_color;
        for (let i = 0; i < 2; ++i) {
            curr_color = (i == this.state.curr_page) ? 'orange' : 'gray';
            itemArr.push(<Text key={i} style={{fontSize: 50, color: curr_color}}>&bull;</Text>);
        }
        return itemArr;
    },

    onScrollAnimationEnd(e){
        let curr_page = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            curr_page: curr_page
        });
    }
});

const styles = StyleSheet.create({
    pointer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 5,
        width: width,
        height: height * 0.02
    },
    listStyle: {
        borderWidth : 1,
        borderColor : 'red',
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
});

module.exports = TopView;

