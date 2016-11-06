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
    TouchableOpacity,
    WebView,
    Image
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var CenterDetail = React.createClass({
    getInitialState(){
        return {
            detailurl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594',
        }
    },
    render(){
        return (
            <View >
                <View style={styles.navBar}>
                    <TouchableOpacity onPress={this.closeCurr}>
                        <Image source={{uri: 'icon_camera_back_normal'}}
                               style={{height: height * 0.04, width: width * 0.1, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                        <Text style={styles.navTitle}>{this.props.title}</Text>
                    <Image source={{uri: 'icon_mine_setting'}}
                           style={{height: height * 0.04, width: width * 0.1, resizeMode: 'contain'}}/>
                </View>
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailurl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },
    closeCurr(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: height * 0.06,
        width : width ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    navTitle: {
        fontSize: 30,
        color : 'white',

    },

});

module.exports = CenterDetail;

