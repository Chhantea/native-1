import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native';
// import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons';
// import NavButton from '../shareComponent/NavButton';
import SearchHeader from '../shareComponent/searchHeader';


export default class Search extends Component{
    static navigationOptions =({navigation})=> ({
        headerTitle: <View style={style.searchContainer}>
            <SearchHeader/>
        </View>,

    });
    render(){
        return(
            <View>


                <ScrollView contentContainerStyle={{flexGrow: 1}}
                            keyboardShouldPersistTaps='handled'
                >
                <Text>This is search</Text>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    searchContainer: {
        // // marginTop: 25,
        // backgroundColor: '#212121',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        //
        // elevation: 11,
        flexDirection: 'column',
        flex:5
    },
});