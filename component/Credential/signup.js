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
                    <Text>Log in to your account</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={"Email or phone"}
                            selectionColor={Blue}
                            underlineColorAndroid={Grey}
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
        justifyContent: 'center',
        marginTop: 80,
        padding: 20
    }

})