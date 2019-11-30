import React from 'react'
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import Url from '../../config/api_url'
import deviceStorage from '../../helper/storage';

const Blue="#4285F4";
const Grey="#9e9e9e";
export default class SignUp extends React.Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
    };

    _onHandleSubmit=(e)=>{
        e.preventDefault();
        var json_data= {
            userid:this.state.email,
            pwd:this.state.password
        };
        axios.post(Url+"/api/login",json_data, {withCredentials: true}).then(res=>{
            console.log(res);
            console.log("asdsadsad===>",res.headers['set-cookie']);
            deviceStorage.setCookie("session", res.headers['set-cookie']);
        }).catch(err=>{
            console.log(err.response);
        });
    };

   async _check(){
     var v = await deviceStorage.getCookie("session");

     console.log("this is front--------->", v);
    }


   handleOnChange=(event)=>{
       // console.log(event.nativeEvent.text)
   //    this is like e.target.value in native
   };

   checkLogout(){
       axios.get(Url+"/api/logout").then(res=>{
           console.log("logout",res);
       })
   };

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <View style={styles.contentCenter}>
                    <Text>Log in to your account</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={"Email or phone"}
                            selectionColor={Blue}
                            underlineColorAndroid={Grey}
                            value={this.state.email}
                            name={'email'}
                            onChangeText={(email)=>this.setState({email})}
                            onChange={this.handleOnChange}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={"Password"}
                            selectionColor={Blue}
                            underlineColorAndroid={Grey}
                            secureTextEntry={true}
                            value={this.state.password}
                            name={'password'}
                            onChangeText={(password)=>this.setState({password})}
                        />
                    </View>
                    <Button
                        onPress={this._onHandleSubmit}
                        title="submit"
                    />
                    <View style={{marginTop:10}}>
                        <Button
                            onPress={this._check}
                            title="check"

                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Button
                            onPress={this.checkLogout}
                            title="logout"

                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height:40,
       paddingLeft: 6
    },
    container: {
        // flex:1,
        justifyContent: 'center',
        marginTop: 80,
        padding: 20
    },
    contentCenter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    }

})