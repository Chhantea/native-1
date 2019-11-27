import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'

export default class TotalSection extends Component{

    render() {
        return (
            <View>
                <Card title="Order Summary">
                    <View style={styles.contRow}>
                        <View style={styles.flexd4}>
                            <Text>Items (13) </Text>
                        </View>
                        <View style={styles.flexd4fr}>
                            <Text>{'\u20A8'} 1230</Text>
                        </View>
                    </View>
                    <View style={styles.contRow}>
                        <View style={styles.flexd4}>
                            <Text>Shipping and Handling </Text>
                        </View>
                        <View style={styles.flexd4fr}>
                            <Text>{'\u20A8'} 0</Text>
                        </View>
                    </View>
                    <View style={styles.contRow}>
                        <View style={styles.flexd4}>
                            <Text style={{color:'red'}}>Total Price </Text>
                        </View>
                        <View style={styles.flexd4fr}>
                            <Text style={{color:'red'}}>{'\u20A8'} 1230</Text>
                        </View>
                    </View>
                </Card>
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
    }


});