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
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var Merchant = React.createClass({
    getInitialState(){
        return {
            detailUrl: 'http://i.meituan.com/topic/mingdian?ci=1&f=iphone&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&token=p19ukJltGhla4y5Jryb1jgCdKjsAAAAAsgAAADHFD3UYGxaY2FlFPQXQj2wCyCrhhn7VVB-KpG_U3-clHlvsLM8JRrnZK35y8UU3DQ&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___a20141120nanning__m1__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_bargainmiddle_30311731&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7&lat=23.12005&lng=113.3076',
            checkedStyle: {backgroundColor: 'rgb(24,221,221)'},
            rightChecked: 'off',
            leftChecked: 'on',
        }
    },

    render() {

        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },

    // 导航条
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <Image source={{uri: 'icon_shop_local'}} style={styles.navImageStyle}/>
                <View style={styles.middle}>
                    <View style={styles.innerView}>
                        <TouchableOpacity onPress={()=>{this.changeColor('left')}}>
                            <View style={[styles.aroundText , this.state.leftChecked == 'on' ? this.state.checkedStyle : {}]}>
                                <Text style={styles.textStyle}>全部商家</Text>
                            </View >
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.changeColor('right')}}>
                            <View style={[styles.aroundText , this.state.rightChecked == 'on' ? this.state.checkedStyle : {}]}>
                                <Text style={styles.textStyle}>优惠商家</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <Image source={{uri: 'icon_shop_search'}} style={styles.navImageStyle}/>
            </View>
        )
    },

    changeColor(direction){
        switch (direction) {
            case 'left':
                this.setState({
                    leftChecked: 'on',
                    rightChecked: 'off',
                });
                break;
            case 'right':
                this.setState({
                    leftChecked: 'off',
                    rightChecked: 'on',
                });
                break;
            default :
                break;
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    middle: {
        height: height * 0.06,
        width: width * 0.84,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerView: {
        width: width * 0.4,
        height: height * 0.04,
        borderWidth: 1,
        borderColor: 'rgb(24,221,221)',
        borderRadius: 10,
        flexDirection: 'row',

    },
    aroundText: {
        height: height * 0.04,
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',

    },
    leftStyle: {

        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },

    rightStyle: {

        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },

    navImageStyle: {
        height: height * 0.03,
        width: width * 0.08,
        resizeMode: 'contain',
    },

    navOutViewStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: height * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

module.exports = Merchant;

