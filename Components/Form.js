import React, {Component} from 'react';
import {View, StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native';
import {connect} from 'react-redux';
import getTemp from '../Api/GetTemp';
import {fetchStart, fetchSuccess, fetchError} from '../redux/actionCreatetor';
class Form extends Component{
    constructor(props){
        super(props)
        this.state= {
            cityName :''
        };
    }

    getTempByCityname(){
        const {cityName} = this.props;
        this.props.fetchStart();
        getTemp(cityName)
        .then(temp => this.props.fetchSuccess(cityName, temp))
        .catch(() => this.props.fetchError());  
    }

    getWeatherMessenger(){
        const {err, isLoading, temp, cityName} = this.props;
        if (isLoading) return '...Loading';
        if (err) return 'Please try again!';
        if (!cityName) return 'Please fill name city';
        return `${cityName}'s temperature is ${temp} oC`;
    }
    render(){
        return(
            <View style={style.container}>
            <TextInput
            style= {style.textInput}
            value={this.state.cityName}
            onChangeText={text => this.setState({cityName: text})}
            placeholder='Fill name city'
            returnKeyType='go'
            />
            <View>
            <TouchableOpacity style={style.button}
                onPress={this.getTempByCityname.bind(this)}
            >
                <Text>SEARCH</Text>
            </TouchableOpacity>
            <Text style={style.text}> {this.getWeatherMessenger()}</Text>
            </View>
            </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
        marginTop:60
    },
    textInput:{
        height:50,
        width: 300,
        backgroundColor:'white',
        borderRadius:25,
    },
    button:{
        backgroundColor:'#F7712D',
        borderRadius:25,
        padding:8,
        margin:8
    },
    text:{
        fontSize:20
    }
});

function mapStateToProps(state){
    return {
        cityName: state.cityName, 
        temp: state.temp, 
        isLoading: state.isLoading, 
        err:state.err}
}

export default connect(mapStateToProps, {fetchError,fetchStart,fetchSuccess})(Form);