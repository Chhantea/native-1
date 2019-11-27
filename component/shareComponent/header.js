import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component{
    constructor(){
        super();
        this.state={
            search: '',
            selectValue:'All'
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };
	_onPressButton(){
		console.log("this is press")
	}
	render(){
        const { search } = this.state;
		return(
		    <View style={style.container}>
					<View style={style.contRow}>
                        <View >
                            <TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >
                                <Image
                                    source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
                                    style={{ width: 50, height: 50}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={style.title}>
                            <Text style={{color: 'white'}}>AawBSpot</Text>
                        </View>
                        <View style={style.f1center}>
                            <TouchableOpacity onPress={() => this.props.nav.navigate('MyModal')} >
                            <Text style={{color:'white'}}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.rightIcon}>
                            <TouchableOpacity onPress={() => this.props.nav.navigate('Cart')} >
                                <Image
                                    source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
                                    style={{ width: 50, height: 50}}
                                />
                            </TouchableOpacity>
                        </View>
					</View>
                <View style={(style.contRow2)}>
                    {/*<View style={style.leftSearch}>*/}
                        {/*<TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >*/}
                            {/*<Text style={{color:'white'}}>Button</Text>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    <View style={style.searchSection}>
                        <TouchableOpacity onPress={this._onPressButton} style={style.sideTouchable}>
                        <Ionicons style={style.searchIcon} name="md-search" size={30} color="black" />
                        </TouchableOpacity>
                        <TextInput
                            style=
                                {style.input}
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            placeholder={'search....'}
                            onFocus={() => this.props.nav.navigate('search')}
                        />
                        {/*<Picker*/}
                            {/*selectedValue={this.state.selectValue}*/}
                            {/*style={{height: 30, width: 83,color:'black'}}*/}
                            {/*onValueChange={(itemValue, itemIndex) =>*/}
                                {/*this.setState({selectValue: itemValue})*/}
                            {/*}>*/}
                            {/*<Picker.Item label="All" value="All"/>*/}
                            {/*<Picker.Item label="Coustom" value="Coustom" />*/}
                        {/*</Picker>*/}
                    </View>
                </View>
                <View style={(style.contRow)}>
                    <Text style={{color:'white',fontSize:10}}> Shop by </Text>
                </View>
                <View style={(style.contRow2)}>
                    <View style={style.title}>
                        <Text style={{color:'white',fontSize:16}}> Category </Text>
                    </View>
                    <View style={style.title}>
                        <Text style={{color:'white',fontSize:16}}> Wish List </Text>
                    </View>
                    <View style={style.title}>
                        <Text style={{color:'white',fontSize:16}}> Deals </Text>
                    </View>
                    <View style={style.title}>
                        <Text style={{color:'white',fontSize:16}}> Sell </Text>
                    </View>
                </View>
            </View>

			)
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: 25,
        backgroundColor: '#212121',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

	},
    contRow:{
        flexDirection: 'row',
        // padding: 10,
        // height: 70,
    },
    contRow2:{
        flexDirection: 'row',
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10
        // height: 70,
    },
	title: {
      flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    rightIcon: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    },
    leftSearch: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },searchIcon: {
        padding: 2
    },
    input: {
        flex: 1,
        paddingTop: 1,
        paddingRight: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
    },
    sideTouchable: {
        borderLeftColor:'black',
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        backgroundColor: 'orange',paddingLeft: 5,paddingRight: 5
    },
    f1center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    }
});