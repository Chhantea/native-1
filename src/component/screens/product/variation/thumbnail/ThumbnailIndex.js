import React,{Component} from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Image} from 'react-native';
import Url from '../../../../../config/api_url';

export default class ThumbnailIndex extends Component{
    _onHandlePress=(value)=>(e)=>{
        e.preventDefault();
        this.props.handleOnChange(value);
    }
    _renderThumbnail(){
     var variant = this.props.variation;
     var arr=[];
     for (var i =0;i<variant.length;i++){
         arr.push(<TouchableOpacity
             key={"variant_"+i}
             style={this.props.variationSelect._id ==variant[i]._id? styles.listContainerActive:styles.listContainer}
            onPress={this._onHandlePress(variant[i])}
         >
                <Image
                style={{width:25, height:25}}
                resizeMode = 'cover'
                source={{ uri: Url+"/"+ variant[i].thumbnail}}
                />
         </TouchableOpacity>)
      }
      return arr;
    }
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView
                horizontal={true}
            >
                {this._renderThumbnail()}
            </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
   listContainer:{
       flex:1,
       // backgroundColor:'red',
       marginEnd:10,
       borderColor: 'black',
       borderRadius: 4,
       borderWidth: 0.5,
       width:30, height:30,
       justifyContent:'center',
       alignItems:'center'
       // resizeMode: 'stretch'
   },
    listContainerActive:{
        flex:1,
        // backgroundColor:'red',
        marginEnd:10,
        borderColor: 'red',
        borderRadius: 4,
        borderWidth: 2,
        width:30, height:30,
        justifyContent:'center',
        alignItems:'center'
        // resizeMode: 'stretch'
    }
});