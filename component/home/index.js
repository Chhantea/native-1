import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,ScrollView,Picker,TouchableOpacity,Image} from 'react-native';
import  Header from '.././shareComponent/header';

export default class HomeIndex extends Component {
  constructor(props){
      super(props);
      this.state={}
  }
    static navigationOptions =({navigation})=> ({
        header: <Header
        nav={navigation}/>,
        headerStyle: {
            backgroundColor: "transparent"
        }
        //    navigation <--- same as this.props
        // title: "Home",
        // headerRight: (
        //     <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
        //         <Image
        //             source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
        //             style={{ width: 50, height: 50}}
        //         />
        //     </TouchableOpacity>
        // ),
        // headerLeft: (
        //     <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
        //         <Image
        //             source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
        //             style={{ width: 50, height: 50}}
        //         />
        //     </TouchableOpacity>
        // ),

    });
	render(){
		return(
		    <View >
                {/*<Header*/}
                {/*nav = {this.props.navigation}*/}
                {/*/>*/}
                <ScrollView >
                    <View style={styles.container}>
                  <Text
                    style={styles.welcome}
                   New Code
                      onPress={()=>this.props.navigation.navigate('Another')}
                  >
                    Home Screen is this
                  </Text>
                    <Button
                        title="Go to Details"
                        onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            this.props.navigation.navigate('Another', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            });
                        }}
                    />
                    <Button
                    title="drwaer"
                    onPress={()=>this.props.navigation.toggleDrawer()}
                    />
                        <Button
                            title="drwaer"
                            onPress={()=>this.props.navigation.toggleDrawer()}
                        />
                    </View>
                    <Picker
                        selectedValue={this.state.language}
                        style={{height: 40, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                 </ScrollView>
            </View>
			)
	}
}

const styles = StyleSheet.create({
    main: {

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
});