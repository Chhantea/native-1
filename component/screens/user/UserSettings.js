import  React,{Component} from 'react';
import {View,Text,ActivityIndicator,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Header2 from "../../shareComponent/headder2";
import { Ionicons } from '@expo/vector-icons';

export default class UserSettings extends Component{
    static navigationOptions =({navigation})=> ({
        header: <Header2
            nav={navigation}/>,
        headerStyle: {
            backgroundColor: "transparent"
        }
    });
    render() {
        return (
            <ScrollView>
                <View style={styles.mainContent}>
                    <View >
                        <Text style={{fontSize: 15,fontWeight:'bold'}}>Your Account</Text>
                    </View>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-lock" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Login & Security</Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-locate" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Address & Details</Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-basket" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Order(s)</Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-cash" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Selling</Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-help-buoy" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Contact Support </Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.myCard}>
                        <View style={styles.divRow}>
                            <View >
                                <Ionicons  name="md-mail" size={30} color="grey" />
                            </View>
                            <View style={styles.midContent}>
                                <Text>Message</Text>
                            </View>
                            <View>
                                <Ionicons  name="md-arrow-dropright" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles=StyleSheet.create({
   divRow:{
       flex:1,
       flexDirection:'row',
   },
    mainContent:{
       padding:10
    },
    myCard:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        padding:10
    },
    midContent:{
       flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});