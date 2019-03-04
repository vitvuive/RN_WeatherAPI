import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Form from './Form';
export default class Main extends Component{
    render(){
        return(
            <View style={style.container}>
            <Form/>
            
            </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#BEF3F9',
        justifyContent:'center',
        alignItems: 'center',
    },
    
    
});