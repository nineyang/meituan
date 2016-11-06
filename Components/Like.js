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
    TouchableOpacity,
    ListView
} from 'react-native';

let HomeMenuView = require('./HomeMenuView');

let Dimensions = require('Dimensions');

let LocalData = require('../LocalData/like.json');

let {width, height} = Dimensions.get('window');

var Like = React.createClass({
    getDefaultProps(){
        return {
            api_url: 'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594',
        };
    },
    getInitialState(){

        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2)=> {
                    r1 !== r2
                }
            }),
        };
    },
    render(){
        return (
            <View style={{
                marginTop: 20,
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#ccc',
                alignItems: 'center'
            }}>
                <HomeMenuView icon="cnxh" leftTitle="猜你喜欢" rightTitle=">"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    componentDidMount(){
        fetch(this.props.api_url)
            .then((response)=>response.json())
            .then((dataJson)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataJson.data),
                });
            })
            .catch((error)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(LocalData.data),
                });
            })
    },

    renderRow(rowdata){
        return (

            <View style={styles.likeList}>
                <Image style={styles.imgList} source={{uri: this.dealWithImg(rowdata.imageUrl)}}/>
                <View style={styles.rightList}>
                    <View style={styles.topText}>
                        <Text style={styles.topLeftText}>{rowdata.title}</Text>
                        <Text style={styles.topRightText}>{rowdata.topRightInfo}</Text>
                    </View>
                    <Text style={styles.middleText}>{rowdata.subTitle}</Text>
                    <View style={styles.bottomText}>
                        <Text style={styles.bottomLeftText}>{rowdata.subMessage}</Text>
                        <Text style={styles.topRightText}>{rowdata.bottomRightInfo}</Text>
                    </View>
                </View>
            </View>
        );
    },

    dealWithImg(img){
        if (img.search('w.h') == -1) {
            return img;
        } else {
            return img.replace('w.h', '120*90');
        }
    }


});

const styles = StyleSheet.create({
    likeList: {
        width: width * 0.98,
        height: height * 0.22,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgList: {
        width: width * 0.35,
        height: height * 0.2,
        resizeMode: 'contain',
    },
    topText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.62
    },
    topLeftText: {
        fontSize: 25,
        color: 'black'
    },
    topRightText: {
        fontSize: 20,
    },
    rightList: {
        justifyContent: 'center'
    },
    middleText: {
        fontSize: 20,
        marginTop: 20
    },
    bottomText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.62,
        marginTop: 20,
    },
    bottomLeftText: {
        color: 'orange',
        fontSize: 25
    },
});

module.exports = Like;

