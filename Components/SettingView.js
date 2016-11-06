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
    Switch
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

var SettingView = React.createClass({
    getInitialState(){
        return {
            myStyle: {},
            isOn: false,
        };
    },
    render(){
        return (
            <View style={[styles.listStyle, this.state.myStyle]}>
                <View style={styles.leftView}>
                    {this.renderImage()}
                    <Text style={styles.textStyle}>{this.props.leftText}</Text>
                </View>

                <View style={styles.rightView}>
                    {this.renderRight()}
                    {this.renderSwitch()}

                </View>

            </View>
        );
    },

    componentDidMount(){
        if (this.props.top) {
            this.setState({
                myStyle: {borderColor: '#ccc', borderTopWidth: 1}
            });
        }
    },

    renderImage(){
        if (this.props.leftImage) {
            return (<Image style={styles.leftImage} source={{uri: this.props.leftImage}}/>);
        }
    },

    renderRight(){
        if (this.props.rightText) {
            return (
                <Text style={styles.innerTextStyle}>{this.props.rightText}</Text>
            );
        }else if(this.props.rightImage){
            return (
                <Image source={{uri : this.props.rightImage}} style={styles.rightImage}/>
            );
        }
    },

    renderSwitch(){
        if (this.props.isSwitch) {
            return (<Switch value={this.state.isOn} onValueChange={()=> {
                this.setState({
                    isOn: !this.state.isOn
                })
            }} style={{marginRight: 8}}/>)
        } else {
            return (<Image style={styles.imgList} source={{uri: 'icon_cell_rightarrow'}}/>);
        }
    }
});

const styles = StyleSheet.create({
    leftView: {
        flexDirection: 'row',
        height : height * 0.07,
        alignItems : 'center',
        marginLeft : 10,
    },
    listStyle: {
        width: width,
        height: height * 0.07,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
    },
    innerTextStyle: {
        fontSize: 22,
        color: '#ccc',
    },
    imgList: {
        width: width * 0.08,
        height: height * 0.02,
        resizeMode: 'contain'
    },
    rightView: {
        height: height * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftImage: {
        width: width * 0.08,
        height: height * 0.04,
        resizeMode: 'contain'
    },
    rightImage : {
        width: width * 0.06,
        height: height * 0.02,
        resizeMode: 'contain'
    }
});

module.exports = SettingView;

