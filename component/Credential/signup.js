import React from 'react'
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet
} from 'react-native'

const Blue="#4285F4";
const Grey="#9e9e9e";
export default class SignUp extends React.Component {
    state = {
        username: '', password: '', email: '', phone_number: ''
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
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={"Password"}
                            selectionColor={Blue}
                            underlineColorAndroid={Grey}
                            secureTextEntry={true}
                        />
                    </View>
                    <Button
                        onPress={() => this.props.nav.goBack()}
                        title="Dismiss"
                    />
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