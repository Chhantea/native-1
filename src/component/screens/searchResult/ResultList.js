import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
import Url from '../../../config/api_url';

export default class ResultList extends Component{
    renderViewFormat1(){
        var minPrice = this.props.passData.minprice;
        var format = this.props.passData.format1;
        if(format=="Fixed"){
            if(typeof minPrice =="undefined"){
                return ( <View >
                    <Text  style={styles.priceText}>
                        {this.props.passData.price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                </View>)
            }else {
                return (<View >
                    <Text  style={styles.priceText}>
                    {this.props.passData.minprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - {this.props.passData.maxprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                </View>)
            }
        }
        if(format=="Negotiation"){
            return(<Text style={styles.priceText}>Negotiable</Text>)
        }
        if(format=="Auction"){
            return (
                <View>
                    <Text style={styles.priceText}>
                        {this.props.passData.price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                    <Text >0 Bid(s)</Text>
                </View>
           )
        }
    };
    renderViewFormat2(){
        var minPrice = this.props.passData.minprice;
        var format = this.props.passData.format2;
        if(format=="Fixed"){
            if(typeof minPrice =="undefined"){
                return (
                    <View >
                        <Text style={styles.priceText}>{this.props.passData.price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                    </View>)
            }else {
                return (
                    <View >
                        <Text style={styles.priceText}>
                         {this.props.passData.minprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - {this.props.passData.maxprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                </View>)
            }
        }
        if(format=="Negotiation"){
            return(<View>
                  <Text>or</Text>
                  <Text style={styles.priceText} >Negotiable</Text>
                </View>)
        }
        if(format=="Auction"){
            return (
                     <View>
                            <Text style={styles.priceText}>
                             {this.props.passData.price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                             </Text>
                         <Text >0 Bid(s)</Text>
                     </View>
           )
        }
    };
    render() {
        return (
            <TouchableOpacity onPress={()=>{
                this.props.nav.navigate('productScreen', {
                    itemId: this.props.passData.itemid,
                });
            }}>
            <View style={styles.contRow}>
                <View style={{padding:5}}>
                    <Image
                        style={styles.image}
                        resizeMode = 'contain'
                        source={{uri:Url+'/'+this.props.passData.image}}
                        // PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                    <View style={styles.itemTitle}>
                        <Text>{this.props.passData.title}</Text>
                        <Text style={{fontSize:9}}>by {this.props.passData.seller}</Text>
                        <View>
                            <Text style={{fontSize:12}}>* * * * * 123</Text>
                        </View>
                        {this.renderViewFormat1()}
                        {this.renderViewFormat2()}
                    </View>
            </View>
                <View style={styles.nativeHr}/>
            </TouchableOpacity>
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
        marginTop:10
    },
    fd4:{
        flex:4
    },
    image:{
        width:120,
        height:120
    },
    itemTitle:{
        flex:4,
        flexGrow: 1,
        padding:5
    },
    priceText:{
        fontSize:14,
        color:'red'
    }
});