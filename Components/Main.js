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
import Home from './Home';
import User from './User';
import Merchant from './Merchant';
import More from './More';

//获取屏幕宽度和高度
let Dimensions = require('Dimensions');
let winHeight = Dimensions.get('window').height;
let winWidth = Dimensions.get('window').width;

//设置icon高度
let iconHeight = winHeight * 0.04;

var Main = React.createClass({
    getDefaultProps(){
        return{
            navigatorHeight : winHeight * 0.08,

        }
    },

    getInitialState(){
        return{
            selectedTab : 'home',
        };
    },

    render(){
        return(
            <TabNavigator
                sceneStyle={{ paddingBottom: this.props.navigatorHeight }}
                tabBarStyle={{height : this.props.navigatorHeight , overflow : 'hidden'}}
            >
                {this.renderNavigator('home' , '主页' , 'icon_tabbar_homepage' , 'icon_tabbar_homepage_selected' , '商家' , Home)}

                {this.renderNavigator('merchant' , '商家' , 'icon_tabbar_merchant_normal' , 'icon_tabbar_merchant_selected' , '商家' , Merchant)}

                {this.renderNavigator('mine' , '我的' , 'icon_tabbar_mine' , 'icon_tabbar_mine_selected' , '我的' , User)}

                {this.renderNavigator('misc' , '其他' , 'icon_tabbar_misc' , 'icon_tabbar_misc_selected' , '其他' , More , 3)}
            </TabNavigator>
        );
    },

    renderNavigator(selected , title , img , selectedImg , componentName , component , bgText = 0){

        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selected}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.titleStyle}
                renderIcon={() => <Image source={{uri : img}} style={styles.imgList}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedImg}} style={styles.imgList}/>}
                badgeText = {bgText}
                onPress={() => this.setState({ selectedTab: selected })}>
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        );
    },
});

const styles = StyleSheet.create({
    selectedTitleStyle : {
        fontSize : 20,
        color : 'orange',
    },
    titleStyle : {
        fontSize: 20,
    },

    imgList : {
        width : iconHeight,
        height : iconHeight
    }
});

module.exports = Main;

