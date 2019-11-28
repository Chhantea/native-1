import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Url from '../../config/api_url';

export default class SearchHeader extends Component{
    constructor(){
        super();
        this.state={
            search: '',
            focus: '',
            suggestion:[]
        }
    }
    updateSearch = search => {
        var len = search.length;
        var previous = this.state.search;
        if(len>0){
          if(search != previous){
              this._onHandleGetSuggestion(search,len)
          }
        }
        this.setState({ search });
    };
    _onPressButton(){
        console.log("this is press")
    }
    _onHandleClearAll=(e)=>{
        e.preventDefault();
      this.setState({search:'',suggestion:[]});
    };
    _onHandleGetSuggestion(value,len) {
        var query = {
            "prefix": value,
            "category": 'All'
        };
        if (len > 1) {
            if (value[len - 2] == " ") {
                query.fuzzy = false;
            } else {
                query.fuzzy = true;
            }
        } else if (len == 1) {
            query.fuzzy = false;
        } else {
            query.fuzzy = true;
        }
        axios.post(Url+"/suggest",query).then(res=>{
            this.setState({suggestion:res.data.suggest})
        }).catch(err=>{
            console.log("errrr=====>",err.response)
        })
    }
    _onHandleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit');
        this.props.nav.navigate('searchResult', {
            query:this.state.search
        });
    };
    _handleonPressSelect=(value)=>(e)=>{
        console.log('adsfsfsdfds---->',value);
        this.setState({search:value});
        this.props.nav.navigate('searchResult', {
            query:value
        });
    };
   renderListSuggestion=()=>{
        var data = this.state.suggestion;
        var arr =[]
        for(var i=0;i<data.length;i++){
            arr.push( <TouchableOpacity key={i} onPress={this._handleonPressSelect(data[i])}>
                <View style={{backgroundColor:'white',padding:10,flexDirection:'row'}}>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:5}}>
                        <Text>{data[i]}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text>T</Text>
                    </View>
                </View>
                <View style={style.nativeHr}/>
            </TouchableOpacity>)
        }
        return arr;
   };
    render(){
        return(
            <View>
            <View style={style.container}>
                <View style={(style.contRow2)}>
                    <View style={style.renderBack}>
                        <TouchableOpacity onPress={() => this.props.nav.goBack()} >
                            <Ionicons style={style.searchIcon} name="md-arrow-back" size={20} color="grey" />
                        </TouchableOpacity>
                    </View>
                    <View style={style.searchSection}>
                        <TextInput
                            style={style.input}
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            placeholder={'search product , name Brand and more...'}
                            autoFocus = {true}
                            onSubmitEditing={this._onHandleSubmit}
                        />
                        {this.state.search?(
                            <TouchableOpacity onPress={this._onHandleClearAll}>
                                <Ionicons name="md-close-circle" size={30} color="grey" />
                            </TouchableOpacity>
                        ):(
                            <TouchableOpacity onPress={this._onPressButton} >
                                <Ionicons style={style.searchIcon} name="md-search" size={30} color="grey" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
                {this.state.suggestion.length>0?(
                    <View style={style.container2}>
                        {this.renderListSuggestion()}
                    </View>
                ):null}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        // marginTop: 25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        paddingTop:15,
        marginBottom:1

    },
    container2: {
        // marginTop: 25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom:1

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
        flex: 5,
        paddingTop: 1,
        paddingRight: 1,
        paddingBottom: 1,
        paddingLeft: 0,
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
    },
    renderBack:{
        paddingEnd:10,
        marginTop:5
    },
    nativeHr:{
        borderBottomColor: '#0000001a',
        borderBottomWidth: 1,
        // padding:5
    },
});