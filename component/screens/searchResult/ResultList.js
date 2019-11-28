import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class ResultList extends Component{

    _onHandleTouch=(e)=>{
        e.preventDefault();
      alert("this is test touch")
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onHandleTouch}>
            <View style={styles.contRow}>
                <View>
                    <Image
                        style={styles.image}
                        source={{uri:'https://i.ebayimg.com/images/g/j7wAAOSwOGFc0e~W/s-l640.jpg'}}
                    />
                </View>
                    <View style={styles.itemTitle}>
                        <Text>HP 14-Inch Laptop Computer, 4GB RAM, 500GB Hard Drive, 14-cm0020nr - Black</Text>
                        <Text style={{fontSize:9}}>by Elon</Text>
                        <View>
                            <Text style={{fontSize:12}}>* * * * * 123</Text>
                        </View>
                        <Text style={styles.priceText}> 12345</Text>
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