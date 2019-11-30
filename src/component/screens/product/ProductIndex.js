import React,{Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import Header2 from "../../shareComponent/headder2";
import axios from 'axios';
import Url from '../../../config/api_url';
import Slider from "./slider/Slider";


export default class ProductIndex extends Component{
    static navigationOptions =({navigation})=> ({
        header: <Header2
            nav={navigation}/>,
        headerStyle: {
            backgroundColor: "transparent"
        }
    });
    constructor(props){
        super(props);
        this.state={
            images:[],
            item_data:[],
            load:true
        }
    }
    componentDidMount(){
        var itemid = this.props.navigation.getParam('itemId');
        axios.get(Url+"/api/item/"+itemid).then(res=>{
            console.log(res.data);
            this.setState({images:res.data.images,item_data:res.data,load:false})
        }).catch(error=>{
            console.log(error.response);
        })

    }
    _renderFixedPrice=()=>{
      if(this.state.item_data.format1=="Fixed" && this.state.item_data.variation == false){
          return(
              <View style={styles.priceContent}>
                  <Text>Price <Text style={{fontSize:25,color:'red'}}>{this.state.item_data.price1}</Text></Text>
                  <Text>Quantity</Text>
              </View>
          )
      }
    };
    render() {
        // console.log("checkparams====>",itemid)
        if(this.state.load){
            return(<View style={styles.loading}>
                <Text>Loading....</Text>
            </View>)
        }else{
            return (
                <View style={styles.mainContainer}>
                <ScrollView >
                    <View>
                        <Slider
                            images={this.state.images}
                        />
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{fontWeight:'bold'}}>{this.state.item_data.title}</Text>
                        <Text style={{fontSize:9}}>by {this.state.item_data.seller.username}</Text>
                        <Text>Ratings here</Text>
                    </View>
                    <View style={styles.nativeHr}/>
                    {this._renderFixedPrice()}
                </ScrollView>
                    <View style={{marginBottom:55}}/>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.addCartButton}>
                            <Text style={{color:'white'}}>
                            Add to cart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buyNowButton}>
                            <Text style={{color:'white'}}>
                                Buy now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    nativeHr:{
        borderBottomColor: '#0000001a',
        borderBottomWidth: 1,
    },
    loading:{
       flex:1,
       justifyContent:'center',
        alignItems:'center'
    },
   priceContent:{
       padding:10,
   },
    MainContainer:
        {
            flex: 1,
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
        },
    bottomView:{
        width: '100%',
        position: 'absolute',
        bottom: 2,
        paddingStart:5,
        paddingEnd:5,
        flexDirection:'row'
    },
    mt5:{
        marginTop: 15
    },
    addCartButton:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        padding:15
    },
    buyNowButton:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        padding:15
    }


});