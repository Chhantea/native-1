import React,{Component} from 'react';
import {View,ScrollView,Dimensions,Image,StyleSheet} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import Url from '../../../../config/api_url'


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 300;

export default class Slider extends Component{


    renderImage(){
        var images = this.props.images;
        var arr=[];
        for(var i=0;i<images.length;i++){
            arr.push(
                <View key={"item_image_"+i} style={styles.imgContainer}>
                    <Image style={styles.image} resizeMode = 'contain' source={{ uri: Url+"/"+images[i].value }} />
                </View>
            )
        }
        return arr;
    }
    render() {
        return (
                <Carousel
                    index={0}
                    pageSize={BannerWidth}
                    autoplay={false}
                    loop={false}
                >
                    {this.renderImage()}
                </Carousel>
        );
    }

}
const styles = StyleSheet.create({
    image:{
        width: BannerWidth * 0.5,
        height:BannerHeight
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});


