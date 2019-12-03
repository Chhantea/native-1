import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import Url from '../../../../config/api_url';

export default class FilterScreen extends Component{
    static navigationOptions = ({navigation})=> ({
        title: "Filter"
    });
    componentDidMount(){
        var query= this.props.navigation.getParam('query');
        var filterQuery = {
            cat: 'all',
            input:query,
            lists:[],
            searchCat:'all'
        }
        axios.put(Url+"/api/filters",filterQuery).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            <View>
                <Text> This is view</Text>
            </View>
        );
    }

}
