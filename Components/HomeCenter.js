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
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

let ShopCenterData = require('../LocalData/Home_D5.json');

let HomeMenuView = require('./HomeMenuView');

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var HomeCenter = React.createClass({
    render(){
        return (
            <View style={{marginTop : 20 , backgroundColor:'white' , borderTopWidth : 1 , borderBottomWidth : 1 , borderColor : '#ccc'}}>
                <HomeMenuView icon="gw" leftTitle="购物中心" rightTitle="全部4条>"/>
                <ScrollView style={styles.scrollStyle} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.renderCity()}
                </ScrollView>
            </View>
        );
    },

    renderCity(){
        let itemArr = [];
        for (let i = 0; i < ShopCenterData.data.length; ++i) {
            itemArr.push(<View style={styles.listView} key={i}><TouchableOpacity onPress={()=>this.clickCell(ShopCenterData.data[i].detailurl , ShopCenterData.data[i].name)}><Image style={styles.imgList}
                                                                                        source={{uri: ShopCenterData.data[i].img}}/></TouchableOpacity><Text style={styles.textShow}>{ShopCenterData.data[i].showtext.text}</Text><Text
                style={styles.textList}>{ShopCenterData.data[i].name}</Text></View>);
        }
        return itemArr;
    },

    clickCell(url , title){
        this.props.clickCellFat(url , title);
    },

});

const styles = StyleSheet.create({
    listView: {
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgList: {
        width: width / 3.3,
        height: height * 0.10,
    },
    textList: {
        fontSize: 20,
        marginTop: 5,
        height : 30,
    },
    textShow:{
        fontSize : 20,
        backgroundColor : 'yellow',
        position : 'absolute',
        bottom : 40,
        opacity : 0.8,
    },
    scrollStyle: {}
});

module.exports = HomeCenter;

