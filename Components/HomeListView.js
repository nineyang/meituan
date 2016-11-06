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
    ListView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
var HomeListView = React.createClass({
    getDefaultProps(){
        return {
            dataArr: [],
        };
    },
    getInitialState(){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.props.dataArr),
        }
    },

    render(){
        return (
            <ListView
                contentContainerStyle={styles.listStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                scrollEnabled={false}
            />
        );
    },
    renderRow(rowData){
        return (
            <View style={styles.listView}>
                <Image source={{uri: rowData.image}} style={{width: height * 0.08, height: height * 0.08}}/>
                <Text style={{fontSize: 20}}>{rowData.title}</Text>
            </View>
        );
    },
});

const styles = StyleSheet.create({
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height * 0.25,
    },
    listView: {
        width: width / 5,
        borderColor: 'blue',
        height: height * 0.11,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = HomeListView;

