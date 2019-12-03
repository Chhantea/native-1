import React,{Component} from 'react';
import {View,Text,Picker,StyleSheet} from 'react-native';
import NestedVariation from "./NestedVariation";
import ThumbnailIndex from "./thumbnail/ThumbnailIndex";

export default class SubVariation extends Component{
    constructor(props){
        super(props);
        this.state={
            subVariationSelect: this.props.subVariation[0]
        }
    }
    componentDidMount(){
        if(typeof this.props.subVariation[0].nestedSubVariantDetail == 'undefined'){
            this.props.updateState('price1',this.props.subVariation[0].price1);
            this.props.updateState('quantity',this.props.subVariation[0].quantity);
            this.props.variantStateUpdate('price1',this.props.subVariation[0].price1);
            this.props.variantStateUpdate('quantity',this.props.subVariation[0].quantity);
        }
        var select = this.props.varSelect;
        select.sid = this.props.subVariation[0]._id;
        this.props.updateState('variationSelect', select);
    }
    _renderVariationDetails=()=>{
        var  variation = this.props.subVariation;
        var arr =[];
        for(var i=0;i<variation.length;i++){
            arr.push(<Picker.Item label={variation[i].title} value={variation[i]}  key={"variation_"+i}/>)
        }
        return arr;
    };
    onHandleChange=(value)=>{
        this.setState({subVariationSelect:value});
        var select = this.props.varSelect;
        select.sid =value._id;
        this.props.updateState('variationSelect', select);
        if(typeof value.nestedSubVariantDetail == 'undefined'){
            this.props.updateState('price1',value.price1);
            this.props.updateState('quantity',value.quantity);
            this.props.variantStateUpdate('price1',value.price1);
            this.props.variantStateUpdate('quantity',value.quantity);
        }
    };
    _renderTypeSelection(){
        if(this.props.variationType2 =="dropdown"){
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
        if(this.props.variationType2 =="thumbnail"){
            return (
                <ThumbnailIndex
                    variation={this.props.subVariation}
                    variationSelect={this.state.subVariationSelect}
                    handleOnChange={this.onHandleChange}
                />
            )
        }
    }

    render() {
        return (
            <View>
                <View style={styles.contRow}>
                <View style={styles.labelContent}>
                    <Text>{this.props.variationName2} </Text>
                </View>
                    {this._renderTypeSelection()}
                </View>
                <NestedVariation
                    nestedSubVariantDetail={this.state.subVariationSelect.nestedSubVariantDetail}
                    updateState={this.props.updateState}
                    variationName3={this.props.variationName3}
                    variationType3={this.props.variationType3}
                    variantStateUpdate={this.props.variantStateUpdate}
                    varSelect={this.props.varSelect}
                />
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
       color:'white'

    }
});