import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,TouchableOpacity,Image} from 'react-native';
import Header from '.././shareComponent/header';

export default class Another extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    static navigationOptions = ({navigation})=> ({
        // header: <Header/>,
        // headerStyle: {
        //     backgroundColor: "transparent"
        // }
        //    navigation <--- same as this.props
        title: "Another",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                <Image
                    source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
                    style={{ width: 50, height: 50}}
                />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                <Image
                    source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
                    style={{ width: 50, height: 50}}
                />
            </TouchableOpacity>
        ),
    });
	render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
		return(
		<View style={styles.container}>
	      <Text
	        style={styles.welcome}
	        onPress={() => this.props.navigation.navigate('Home')}
	      >
	        Scarlet Screen
	      </Text>
            <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.push('Another')}
            />
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go modal"
                onPress={() => this.props.navigation.navigate('MyModal')}
            />

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
         </View>
			)
	}
}

const styles = StyleSheet.create({
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
});