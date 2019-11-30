import React,{Component} from 'react';
import {View,Image,Text,ScrollView,StyleSheet,TouchableOpacity,Button} from 'react-native';
import Header2 from "../../shareComponent/headder2";
import ResultList from "./ResultList";

export default class SearchResultIndex extends Component{
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
                <View style={styles.upperContent}>
                    <Text>All Category</Text>
                </View>
                <View style={styles.nativeHr}/>
                <View style={styles.upperContent2}>
                    <View style={styles.contRow}>
                        <View style={styles.fd4}>
                            <Text>10 Item(s) from "Random"</Text>
                        </View>
                        <View>
                            <Button
                             title={"Filter"}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.nativeHr}/>
                <ResultList
                nav={this.props.navigation}
                />
                <ResultList
                    nav={this.props.navigation}
                />
                <ResultList
                    nav={this.props.navigation}
                />
                <ResultList
                    nav={this.props.navigation}
                />
                <ResultList
                    nav={this.props.navigation}
                />
                <ResultList
                    nav={this.props.navigation}
                />
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
     upperContent:{
         padding:10
     },
    nativeHr:{
        borderBottomColor: '#0000001a',
        borderBottomWidth: 1,
        // padding:5
    },
    upperContent2:{
        padding:10,
        backgroundColor: '#00000008'
    },
    contRow:{
        flexDirection: 'row',
    },
    fd4:{
         flex:4
    }
});