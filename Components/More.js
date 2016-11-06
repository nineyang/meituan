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

let SettingView = require('./SettingView');
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var More = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <View style={styles.middle}>

                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.title}>更多</Text>
                    </View>
                    <View style={styles.right}>
                        <Image style={styles.imgList} source={{uri: 'icon_mine_setting'}}/>
                    </View>


                </View>

                <View style={{marginTop : 20}}>
                    <SettingView leftText="扫一扫" />
                </View>

                <View style={{marginTop : 20}}>
                    <SettingView leftText="省流量模式" isSwitch="true" />
                    <SettingView leftText="消息提醒" top="true"/>
                    <SettingView leftText="邀请朋友" top="true"/>
                    <SettingView leftText="清空缓存" top="true" rightText="8.88M" />
                </View>

                <View style={{marginTop : 20}}>
                    <SettingView leftText="意见反馈" />
                    <SettingView leftText="问卷调查" top="true"/>
                    <SettingView leftText="支付帮忙" top="true"/>
                    <SettingView leftText="网络诊断" top="true"/>
                    <SettingView leftText="关于我们" top="true"/>
                    <SettingView leftText="我要应聘" top="true"/>
                </View>

                <View style={{marginTop : 20}}>
                    <SettingView leftText="精品应用" />
                </View>

            </View>
        );
    },
});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F5FCFF',
    },
    navBar: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: height * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
    },
    middle: {
        width: width * 0.33,
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        color: 'white',
    },

    imgList: {
        height: height * 0.04,
        width: width * 0.1,
        resizeMode: 'contain',

    },
    right: {
        width : width * 0.33,
        flexDirection : 'row',
        alignItems : 'center',
        height : height * 0.06,
        justifyContent: 'flex-end'
    }

});

module.exports = More;

