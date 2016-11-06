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

let SettingView = require('./SettingView');


let Recommend = require('./Recommend');

let PayData = require('../LocalData/Pay.json');

var User = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <View style={styles.topLeft}>
                        <Image style={styles.imgList} source={{uri: 'http://avatar.csdn.net/1/9/6/1_hello_nine.jpg'}}/>
                        <Text style={styles.userName}>hello nine</Text>
                        <Image style={styles.vipStyle} source={{uri: 'avatar_vip'}}/>
                    </View>

                    <Image style={styles.backStyle} source={{uri: 'icon_cell_rightarrow'}}/>
                </View>
                {/*评价和收藏*/}
                <View style={{flexDirection: 'row' }}>
                    <Recommend top="100" bottom="优惠券" hasBorder="true"/>
                    <Recommend top="100" bottom="评价" hasBorder="true"/>
                    <Recommend top="100" bottom="收藏"/>
                </View>
                {/*设置*/}
                <SettingView leftImage="collect" leftText="我的订单" rightText="查看全部订单"/>
                {/*待付款相关*/}
                <View style={styles.payView}>
                    {this.renderPay()}
                </View>

                <View style={styles.separate}>
                    <SettingView leftImage="draft" leftText="我的钱包" rightText="账户余额:¥88888"/>
                    <SettingView leftImage="like" leftText="抵用券" rightText="10"/>
                </View>
                <View style={styles.separate}>
                    <SettingView leftImage="card" leftText="积分商城" rightText="美团充值卡送不停"/>
                </View>
                <View style={styles.separate}>
                    <SettingView leftImage="new_friend" leftText="今日推荐" rightImage="me_new"/>
                </View>
                <View style={styles.separate}>
                    <SettingView leftImage="pay" leftText="我要合作" rightText="轻松开店,招财进宝"/>
                </View>

            </View>
        );
    },

    renderPay(){
        let itemArr = [];
        for (let i = 0; i < PayData.length; ++i) {
            itemArr.push(<View key={i} style={styles.payStyle}><Image source={{uri: PayData[i].iconName}}
                                                              style={styles.payImageStyle}/><Text
                style={styles.payTitleStyle}>{PayData[i].title}</Text></View>);
        }
        return itemArr;
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    navBar: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: height * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgList: {
        width: width * 0.2,
        height: height * 0.08,
        resizeMode: 'contain',
        borderRadius: width * 0.4,
    },
    userName: {
        color: 'white',
        fontSize: 30,
    },
    vipStyle: {
        width: width * 0.05,
        height: height * 0.04,
        resizeMode: 'contain'
    },
    backStyle: {
        width: width * 0.03,
        height: height * 0.02,
        resizeMode: 'contain'
    },

    separate: {
        marginTop: 20
    },
    payStyle: {
        width: width / 4,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
    },
    payImageStyle: {
        width: width * 0.06,
        height: height * 0.03,
        resizeMode: 'contain'
    },
    payTitleStyle: {
        fontSize: 25,
        color: '#ccc',
    },
    payView : {
        flexDirection: 'row' ,
        height : height * 0.07,
        backgroundColor : 'white',
        borderColor : '#ccc',
        borderTopWidth : 1,
    }

});

module.exports = User;

