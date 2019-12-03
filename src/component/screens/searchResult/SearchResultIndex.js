import React,{Component} from 'react';
import {View,Image,Text,ScrollView,StyleSheet,TouchableOpacity,Button} from 'react-native';
import Header2 from "../../shareComponent/headder2";
import ResultList from "./ResultList";
import axios from 'axios';
import Url from '../../../config/api_url';

export default class SearchResultIndex extends Component{
    static navigationOptions =({navigation})=> ({
        header: <Header2
            nav={navigation}/>,
        headerStyle: {
            backgroundColor: "transparent"
        }
    });
    constructor(){
        super();
        this.state={
            all_data: [],
            all_total:'',
            onLoad:true
        }
    }
    componentDidMount(){
        var query = this.props.navigation.getParam('query');
        axios.get(Url+'/api/search?searchCatPicker=all&pageSize=5&searchBox='+query).then(res=>{
            var data = JSON.parse(res.data);
            this.setState({all_data:data,all_total:data.total,onLoad:false});
        }).catch(error=>{
            console.log("error response===>",error.response);
        })
    }
    _renderResultList=()=>{
        var lists = this.state.all_data.lists;
        var arr =[];
        for(var i=0;i<lists.length;i++){
            arr.push(<ResultList
                nav={this.props.navigation}
                key={"searchResultList-"+i}
                passData={lists[i]}
            />)
        }
        return arr;
    };
    render() {
            return (
                <ScrollView>
                    <View style={styles.upperContent}>
                        <Text>All Category</Text>
                    </View>
                    <View style={styles.nativeHr}/>
                    <View style={styles.upperContent2}>
                        <View style={styles.contRow}>
                            <View style={styles.fd4}>
                                <Text>{this.state.all_total} Item(s) from "{this.props.navigation.getParam('query')}"</Text>
                            </View>
                            <View>
                                <Button
                                    title={"Filter"}
                                    onPress={()=> this.props.navigation.navigate('searchFilter',{
                                        query: this.props.navigation.getParam('query')
                                    })}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.nativeHr}/>
                    {this.state.onLoad? (
                        <View style={styles.loadingContainer}>
                        <Text>Loading....</Text>
                        </View>
                    ):this._renderResultList()}
                </ScrollView>
            );
    }

}

const styles = StyleSheet.create({
     upperContent:{
         padding:10
     },
    nativeHr:{
        borderBottomColor: '#0000001a',
        borderBottomWidth: 1,
        // padding:5
    },
    upperContent2:{
        padding:10,
        backgroundColor: '#00000008'
    },
    contRow:{
        flexDirection: 'row',
    },
    fd4:{
         flex:4
    },
    loadingContainer:{
         flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});