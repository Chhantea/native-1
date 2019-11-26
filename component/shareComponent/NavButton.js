import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class NavButton extends Component{
    constructor(){
        super();
    }
    renderButton(){
        let data = this.props.button;
        var arr = [];
        for(var i = 0; i < data.length; i++ ){
            if(data[i]=="cart"){
                arr.push(
                    <View style={{flex:1}}  key={i}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                       <Image
                            source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
                             style={{ width: 30, height: 30}}
                        />
                    </TouchableOpacity>
                    </View>
                )
            }else if(data[i]=="search"){
                arr.push(
                    <View style={{flex:1}}  key={i}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Ionicons  name="md-apps" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
        return arr;
    };
    render(){
        return (
            <View style={style.container}>
                {this.renderButton()}
            </View>
        )
    }
}
const style= StyleSheet.create({
   container: {
       flex: 1 ,
       flexDirection: 'row'
   }
});

export default NavButton

//
// <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
//     <Image
//         source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
//         style={{ width: 50, height: 50}}
//     />
// </TouchableOpacity>