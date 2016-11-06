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
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import HomeDetail from './HomeDetail';
//获取屏幕宽度和高度
let Dimensions = require('Dimensions');
let winHeight = Dimensions.get('window').height;
let winWidth = Dimensions.get('window').width;

let TopView = require('./HomeTopView');
let HomeHotView = require('./HomeHotView');
let HotTopData = require('../LocalData/HotTop.json');
let HotMiddleData = require('../LocalData/HotMiddle.json');
let Home_D4 = require('../LocalData/Home_D4.json');

let CenterDetail = require('./CenterDetail');

let HomeCenter = require('./HomeCenter');

let Like = require('./Like');

var Home = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*首页导航栏*/}
                {this.renderNavBar()}
                {/*内容部分*/}
                <ScrollView style={{backgroundColor: '#F5FCFF', flex: 1}}>
                    <TopView />
                    {/*hot部分*/}
                    {this.renderHot()}
                    {this.renderHot2()}
                    {/*商城部分*/}
                    <HomeCenter clickCellFat={(url , title)=>this.showCenterDetail(url , title)}/>
                    {/*猜你喜欢系列*/}
                    <Like />

                </ScrollView>

            </View>
        );
    },
    renderNavBar(){
        return (
            <View style={styles.homeTop}>
                <TouchableOpacity>
                    <View style={styles.cityNav}>
                        <Text style={styles.topLeftText}>nine</Text>
                        <Image style={styles.cityDown} source={{uri: 'icon_homepage_down_arrow'}}></Image>
                    </View>
                </TouchableOpacity>
                <TextInput
                    placeholder="输入商家, 品类, 商圈"
                    style={styles.inputStyle}
                    underlineColorAndroid='rgba(255,96,0,1.0)'
                    placeholderTextColor='white'
                ></TextInput>
                <View style={styles.navImg}>
                    <Image style={[styles.navImgList]} source={{uri: 'icon_homepage_message'}}/>
                    <Image style={styles.navImgList} source={{uri: 'icon_homepage_scan'}}/>
                </View>
            </View>
        );
    },

    renderHot(){
        let itemArr = [];
        for (let i = 0; i < HotTopData.dataRight.length; ++i) {
            itemArr.push(<HomeHotView key={i} color={HotTopData.dataRight[i].titleColor}
                                      top={HotTopData.dataRight[i].title}
                                      bottom={HotTopData.dataRight[i].subTitle}
                                      img={HotTopData.dataRight[i].rightImage}/>);
        }
        return (<View style={styles.hotView}>
            <View style={styles.hotLeft}>
                <Image style={styles.hotTopImg} source={{uri: HotTopData.dataLeft[0].img1}}/>
                <Image style={styles.hotBottomImg} source={{uri: HotTopData.dataLeft[0].img2}}/>
                <Text style={{color: '#ccc', fontSize: 20,}}>{HotTopData.dataLeft[0].title}</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{color: 'blue', fontSize: 15,}}>{HotTopData.dataLeft[0].price}</Text>
                    <Text style={{
                        color: 'red',
                        backgroundColor: 'yellow',
                        fontSize: 15,
                        marginLeft: 5
                    }}>{HotTopData.dataLeft[0].sale}</Text>
                </View>
            </View>
            <View>{itemArr}</View>
        </View>);
    },

    renderHot2(){
        let itemArr = [];
        for (let i = 0; i < Home_D4.data.length ; ++i) {
            itemArr.push(<HomeHotView key={i} tplurl={Home_D4.data[i].tplurl} color={Home_D4.data[i].typeface_color}
                                      callBackClickCell={(data)=>this.jump(data)}
                                      top={Home_D4.data[i].title}
                                      bottom={Home_D4.data[i].deputytitle}
                                      img={this.dealWithImg(Home_D4.data[i].imageurl)}/>);
        }
        return (
            <TouchableOpacity>
                <View style={styles.hotView2}>
                    <View style={styles.hotTop2}>
                        <View style={styles.hotViewListLeft}>
                            <Text style={{fontSize: 30, color: 'orange'}}>{HotMiddleData.title}</Text>
                            <Text style={{fontSize: 18, color: '#ccc'}}>{HotMiddleData.subTitle}</Text>
                        </View>
                        <View style={styles.hotViewListRight}>
                            <Image style={{marginRight: 50, width: winHeight * 0.2, height: winHeight * 0.2 * 0.35,}}
                                   source={{uri: HotMiddleData.image}}/>
                        </View>

                    </View>
                    <View style={{flexDirection:'row' , flexWrap :'wrap'}}>
                        {itemArr}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    dealWithImg(img){
        if (img.search('w.h') == -1) {
            return img;
        } else {
            return img.replace('w.h' , '120.90');
        }
    },

    jump(data){
        this.props.navigator.push({
            component: HomeDetail,
            title: '详情',
            passProps : {url : data}
        });
    },

    showCenterDetail(url , title){
        this.props.navigator.push({
            component: CenterDetail,
            title: title,
            passProps : {url : this.detailUrl(url) , title : title}
        });
    },

    detailUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    }




});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
    homeTop: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: winHeight * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    topLeftText: {
        fontSize: 30,
        color: 'white'
    },
    inputStyle: {
        width: winWidth * 0.7,
        height: winHeight * 0.04,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 18,
        paddingLeft: 15,
        color: 'white',
        fontSize: 20,
    },
    navImg: {
        flexDirection: 'row',
    },
    cityDown: {
        width: winHeight * 0.02,
        height: winHeight * 0.02,
        marginLeft: 10,
        marginTop: 10
    },
    cityNav: {
        flexDirection: 'row',
    },
    navImgList: {
        width: winHeight * 0.03,
        height: winHeight * 0.03,
        marginLeft: 10
    },
    divisionList: {
        width: winWidth,
        height: winHeight * 0.01,
        backgroundColor: '#ccc',
    },
    hotView: {
        marginTop: 20,
        flexDirection: 'row',
    },
    hotLeft: {
        width: winWidth / 2,
        height: winHeight * 0.2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    hotTopImg: {
        height: winHeight * 0.2 * 0.35,
        width: (winWidth / 2) * 0.7,
    },
    hotBottomImg: {
        width: (winWidth / 2) * 0.35,
        height: winHeight * 0.2 * 0.35,
    },
    hotView2: {
        height: winHeight * 0.3,
        backgroundColor: 'white',
        marginTop: 20,
    },
    hotViewListLeft: {
        width: winWidth * 0.5,
        marginLeft: 50,
        justifyContent: 'center',
        // alignItems : 'center',
        // marginLeft : 50,
    },
    hotViewListRight: {
        width: winWidth * 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // marginRight : 10,
    },
    hotTop2: {
        width: winWidth,
        height: winHeight * 0.1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
    }
});

module.exports = Home;

