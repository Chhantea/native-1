import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity,Image,Button,StyleSheet,Platform} from 'react-native';
import TotalSection from "./TotalSection";
import CartList from "./CartList";

export default class Index extends Component{
    static navigationOptions = ({navigation})=> ({
        title: "Cart",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                <Image
                    source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
                    style={{ width: 50, height: 50}}
                />
            </TouchableOpacity>
        ),
    });
    render() {
        return (
            <View style={styles.MainContainer}>
                <ScrollView>
                        <TotalSection/>
                    <View style={styles.mt5}>
                        <CartList/>
                        <CartList/>
                        <CartList/>
                        <CartList/>
                    </View>
                </ScrollView>
                <View style={{marginBottom:60}}/>
                    <View style={styles.bottomView}>
                        <Button
                            title={"Proceed to Buy"}
                        />
                    </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    MainContainer:
        {
            flex: 1,
            paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
        },
    bottomView:{

        width: '100%',
        // height: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        paddingStart:5,
        paddingEnd:5
    },
    mt5:{
      marginTop: 15
    }

});