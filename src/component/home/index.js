import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,ScrollView,Picker,TouchableOpacity,Image} from 'react-native';
import  Header from '../shareComponent/header';
import CarousalHeadder from "../shareComponent/carousal/CarousalHeadder";
import GetLocation from "../shareComponent/GetLocation";
import SideScrollSection from "../shareComponent/carousal/SideScrollSection";

export default class HomeIndex extends Component {
  constructor(props){
      super(props);
      this.state={
          locationCheck:false
      }
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
		    <View style={styles.main}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.carousalHeaderSection}>
                        <CarousalHeadder/>
                    </View>

                    {/*<Picker*/}
                        {/*selectedValue={this.state.language}*/}
                        {/*style={{height: 40, width: 100}}*/}
                        {/*onValueChange={(itemValue, itemIndex) =>*/}
                            {/*this.setState({language: itemValue})*/}
                        {/*}>*/}
                        {/*<Picker.Item label="Java" value="java" />*/}
                        {/*<Picker.Item label="JavaScript" value="js" />*/}
                    {/*</Picker>*/}
                    <View style={styles.section2}>
                        <View>
                            <Text>
                                New Arrival
                            </Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#0000001a',
                                borderBottomWidth: 1,
                                padding:5
                            }}
                        />
                        <SideScrollSection
                        nav={this.props.navigation}
                        />
                    </View>
                    <View style={styles.section2}>
                        <View>
                            <Text>
                                New Arrival
                            </Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#0000001a',
                                borderBottomWidth: 1,
                                padding:5
                            }}
                        />
                        <SideScrollSection
                            nav={this.props.navigation}
                        />
                    </View>
                    {/*<Button*/}
                    {/*title={"test"}*/}
                    {/*onPress={()=>this.props.navigation.navigate('Cart')}*/}
                    {/*/>*/}
                    <Button
                    title={"Get location"}
                    onPress={()=>this.setState({locationCheck:true})}
                    />
                    {this.state.locationCheck? <GetLocation/>:null}
                 </ScrollView>
            </View>
			)
	}
}

const styles = StyleSheet.create({
    main: {
        backgroundColor:'grey'
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
    section2:{
        marginBottom:5,
        backgroundColor:"white",
        padding:5
    },
    carousalHeaderSection:{
        marginBottom:5
    }
});