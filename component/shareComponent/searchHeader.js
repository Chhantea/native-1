import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';

export default class SearchHeader extends Component{
    constructor(){
        super();
        this.state={
            search: '',
            focus: ''
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };
    _onPressButton(){
        console.log("this is press")
    }
    render(){
        const { search } = this.state;
        return(
            <View style={style.container}>
                <View style={(style.contRow2)}>
                    <View style={style.searchSection}>
                        {/*<Picker*/}
                            {/*selectedValue={this.state.language}*/}
                            {/*style={{height: 30, width: 70,color:'black',borderRightColor: 'black',borderStyle:'solid'}}*/}
                            {/*onValueChange={(itemValue, itemIndex) =>*/}
                                {/*this.setState({language: itemValue})*/}
                            {/*}>*/}
                            {/*<Picker.Item label="Java" value="java" />*/}
                            {/*<Picker.Item label="JavaScript" value="js" />*/}
                        {/*</Picker>*/}
                        <TextInput
                            style=
                                {style.input}
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            placeholder={'search....'}
                            autoFocus = {true}
                        />
                        <TouchableOpacity onPress={this._onPressButton} style={style.sideTouchable}>
                            <Ionicons style={style.searchIcon} name="md-search" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    container: {
        // marginTop: 25,
        backgroundColor: '#212121',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    contRow:{
        flexDirection: 'row',
        // padding: 10,
        // height: 70,
    },
    contRow2:{
        flexDirection: 'row',
        padding: 10,
        // height: 70,
    },
    title: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    rightIcon: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    },
    leftSearch: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },searchIcon: {
        padding: 2
    },
    input: {
        flex: 1,
        paddingTop: 1,
        paddingRight: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // borderWidth: 1,
        // borderStyle: 'solid',
        borderRadius: 5,
    },
    sideTouchable: {
        borderLeftColor:'black',
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        backgroundColor: 'orange',paddingLeft: 5,paddingRight: 5
    }
});