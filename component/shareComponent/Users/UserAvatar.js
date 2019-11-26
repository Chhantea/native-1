import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

class UserAvatar extends  Component{
    render(){
        return(
            <View style={style.mainContainer}>
                <View style={style.avatar}>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2014/04/03/11/47/person-312160_960_720.png',
                    }}
                    size="xlarge"
                />
                </View>
                <View style={style.textArea}>
                    <Text style={{color:'grey'}}>Guest User</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
   mainContainer:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10,
       // flexDirection: 'row'

   },
   avatar: {
     flex:1
   },
    textArea: {
       flex:1
    }
});

export default UserAvatar