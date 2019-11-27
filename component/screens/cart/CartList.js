import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';

export default class CartList extends Component{

    render() {
        return (
            <View style={{padding:10}}>
                <View style={styles.contRow}>
                    <View>
                        <Image
                            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR-5M5W9Cr4z9dQqhw0t0hBHu5uE_XlIIUVpBRJ2A-UCrEZo9Tw&s'}}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <View style={styles.subSection}>
                            <Text>
                                Razer Kraken Kitty Edition Black Gaming Headset
                            </Text>
                            <View style={styles.contRow}>
                                <Text style={{color:'red'}}>
                                   Rs 100
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contRow}>
                    <View style={styles.qtyContent}>
                        <Text>Qty: 2</Text>
                    </View>
                    <View style={styles.qtyContent}>
                        <Button
                        title={"Delete"}
                        />
                    </View>
                    <View style={styles.qtyContent}>
                        <Button
                        title={"Add to wish list"}
                        />
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#0000001a',
                        borderBottomWidth: 1,
                        padding:5
                    }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    contRow:{
        flexDirection: 'row',
    },
    flexd4:{
        flex:4
    },
    flexd4fr:{
        flex:1,
        justifyContent:'flex-end'
    },
    image:{
        width:100,
        height:100
    },
    subSection:{
        flexGrow: 1,
        width: 240,
    },
    qtyContent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


});