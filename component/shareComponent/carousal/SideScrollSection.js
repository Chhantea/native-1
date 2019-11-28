import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView}from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users =
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    };

export default class SideScrollSection extends Component{

    render() {
        return (
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.main}>
            <View style={{flex:1,flexGrow:1}}>
                <Card
                 containerStyle={{marginLeft:'auto',marginTop:0,padding:5,height:250}}
                >
                                <View  style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: "https://brain-images-ssl.cdn.dixons.com/3/4/10194243/u_10194243.jpg" }}
                                    />
                                </View>
                        <View style={styles.subSection}>
                            <Text style={{fontSize:10}}>Predator Triton 900 17.3” Intel® Core™ i7 RTX 2080 2 in 1 Gaming Laptop - 1 TB SSD</Text>
                        </View>
                        <Button title="Details"
                        onPress={()=>this.props.nav.navigate('searchResult')}
                        />
                </Card>
            </View>
                <View>
                    <Card
                        containerStyle={{marginLeft:'auto',marginTop:0,padding:5,height:250}}
                    >
                        <View  style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132" }}
                            />
                        </View>
                        <View style={styles.subSection}>
                            <Text style={{fontSize:10}}>iPhone 11 Pro Max 512GB Gold</Text>
                        </View>
                        <Button title="Details"/>
                    </Card>
                </View>

                <View>
                    <Card
                        containerStyle={{marginLeft:'auto',marginTop:0,padding:5,height:250}}
                    >
                        <View  style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: "https://www.little-phoenix.com/218-large_default/barrette-memoire-4go-ram-ddr3-samsung-m471b5273dh0-ch9-so-dimm-pc3-10600-1333mhz-2rx8.jpg" }}
                            />
                        </View>
                        <View style={styles.subSection}>
                            <Text style={{fontSize:10}}>RAM Memory 4GB DDR3 Samsung ...</Text>
                        </View>
                        <Button title="Details"/>
                    </Card>
                </View>

                <View>
                    <Card
                        containerStyle={{marginLeft:'auto',marginTop:0,padding:5,height:250}}
                    >
                        <View  style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: "https://www.quietpc.com/images/products/asus-z390-f-3d-large.jpg" }}
                            />
                        </View>
                        <View style={styles.subSection}>
                            <Text style={{fontSize:10}}>ROG STRIX Z390-F GAMING LGA1151 ATX Motherboard</Text>
                        </View>
                        <Button title="Details"/>
                    </Card>
                </View>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    main: {
      padding:10,
        paddingLeft:'auto',
        paddingRight:'auto'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    image:{
      width:150,
        height:150
    },
    user:{

    },
    subSection:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexGrow: 1,
        // flex: 1,
        width: 150,
    }
});