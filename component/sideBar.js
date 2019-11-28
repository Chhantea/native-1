import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import UserAvatar from './shareComponent/Users/UserAvatar';

export default class SideBar extends Component{
    _onpressButton(){
       console.log("this is press")
    }
    render() {
        console.log("active?",this.props.activeItemKey);
        return (
            <View style={styles.mainContainer}>
                    <ScrollView>
                        <UserAvatar/>
                        <View
                            style={{
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1,
                                marginTop: 5
                            }}
                        />
                        <TouchableOpacity
                            style = {styles.container}
                            onPress = {() => this.props.navigation.navigate('Home')}>
                            <View style={styles.div1}>
                            <Ionicons  name="ios-home" size={30} color="grey" />
                            </View>
                            <View style={styles.divCenter}>
                            <Text style = {styles.text}>
                                Home
                            </Text>
                            </View>
                            <View style={styles.div1}>
                                {/*<Badge value="5" status="success" />*/}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.container}
                            onPress = {() => this.props.navigation.navigate('Cart')}>
                            <View style={styles.div1}>
                                <Ionicons  name="ios-cart" size={30} color="grey" />
                            </View>
                            <View style={styles.divCenter}>
                                <Text style = {styles.text}>
                                    Cart
                                </Text>
                            </View>
                            <View style={styles.div1}>
                                <Badge value="5" status="error" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.container}
                            onPress = {() => this.props.navigation.navigate('search')}>
                            <View style={styles.div1}>
                                <Ionicons  name="md-apps" size={30} color="grey" />
                            </View>
                            <View style={styles.divCenter}>
                                <Text style = {styles.text}>
                                    Filter
                                </Text>
                            </View>
                            <View style={styles.div1}>
                                <Badge value="5" status="success" />
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1,
                                marginTop: 5
                            }}
                        />
                    </ScrollView>
                    </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        // alignItems: 'center',
        flexDirection: 'row',
        // justifyContent:
    },
    text: {
        // flex: 1,
        paddingLeft: 10,
        color: 'grey',
        fontSize: 18
    },
    mainContainer: {
        marginTop:25,
    },
    icon: {
        // flex:1,
    },
    div1: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    divCenter:{
        flex: 2,
        paddingLeft: 10
    }
});