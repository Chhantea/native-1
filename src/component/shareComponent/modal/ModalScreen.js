import React,{Component} from 'react';
import {View,Button,Text,TextInput} from 'react-native';
import SignUp from "../../Credential/signup";

export default class ModalScreen extends Component {
    constructor(){
        super();
        this.state={
            mailorphone:'',
            password:''
        }
    }
    onHandleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    };
    render() {
        return (
            <SignUp
            nav={this.props.navigation}
            />
        );
    }
}