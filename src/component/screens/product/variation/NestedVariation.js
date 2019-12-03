import React,{Component} from 'react';
import {View,Text,Picker,StyleSheet} from 'react-native';
import ThumbnailIndex from "./thumbnail/ThumbnailIndex";

export default class NestedVariation extends Component{

    constructor(props){
        super(props);
        this.state={
            nestedVariationSelect: this.props.nestedSubVariantDetail[0]
        }
    }
    componentDidMount(){
            this.props.updateState('price1',this.props.nestedSubVariantDetail[0].price1);
            this.props.updateState('quantity',this.props.nestedSubVariantDetail[0].quantity);
            this.props.variantStateUpdate('price1',this.props.nestedSubVariantDetail[0].price1);
            this.props.variantStateUpdate('quantity',this.props.nestedSubVariantDetail[0].quantity);
        var select = this.props.varSelect;
        select.nid = this.props.nestedSubVariantDetail[0]._id;
        this.props.updateState('variationSelect', select);
    }
    _renderVariationDetails=()=>{
        var  variation = this.props.nestedSubVariantDetail;
        var arr =[];
        for(var i=0;i<variation.length;i++){
            arr.push(<Picker.Item label={variation[i].title} value={variation[i]}  key={"variation_"+i}/>)
        }
        return arr;
    };
    onHandleChange=(value)=>{
        this.setState({nestedVariationSelect:value});
        var select = this.props.varSelect;
        select.nid = value._id;
        this.props.updateState('variationSelect', select);
        this.props.updateState('price1',value.price1);
        this.props.updateState('quantity',value.quantity);
        this.props.variantStateUpdate('price1',value.price1);
        this.props.variantStateUpdate('quantity',value.quantity);
    };
    _renderTypeSelection(){
        if(this.props.variationType3 =="dropdown"){
            return (
                <View style={styles.valueContent}>
                    <Picker
                        selectedValue={this.state.subVariationSelect}
                        style={styles.pickerContent}
                        onValueChange={
                            this.onHandleChange
                        }>
                        {this._renderVariationDetails()}
                    </Picker>
                </View>
            )
        }
        if(this.props.variationType3 =="thumbnail"){
            return (
                <ThumbnailIndex
                    variation={this.props.nestedSubVariantDetail}
                    variationSelect={this.state.nestedVariationSelect}
                    handleOnChange={this.onHandleChange}
                />

            )
        }
    }
    render() {
        return (
            <View style={styles.contRow}>
                <View style={styles.labelContent}>
                    <Text>{this.props.variationName3} </Text>
                </View>
                {this._renderTypeSelection()}
            </View>
        );
    }

}

const styles=StyleSheet.create({
    contRow:{
       flex:1,
       flexDirection:'row',
        paddingTop:5,
        paddingEnd:5,
        paddingStart:5
    },
    labelContent:{
        flex:1,
        marginTop:10
    },
    valueContent:{
        flex:1,
        backgroundColor:'grey',
    },
    pickerContent:{
       color:"white"

    }
});