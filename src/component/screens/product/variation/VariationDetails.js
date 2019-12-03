import React,{Component} from 'react';
import {View,Text,Picker,StyleSheet,TextInput} from 'react-native';
import SubVariation from "./SubVariation";
import ThumbnailIndex from "./thumbnail/ThumbnailIndex";

const Grey="#9e9e9e";
const Blue="#4285F4";
const Red="#f43023";
export default class VariationDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            variationSelect: this.props.variation[0],
            price1:'',
            quantity:'',
            selectQuantity:'1',
            inputError:false
        }
    }
    componentDidMount(){
        if(typeof this.props.variation[0].subVariantDetail == 'undefined'){
          this.props.updateState('price1',this.props.variation[0].price1);
          this.props.updateState('quantity',this.props.variation[0].quantity);
          this.setState({price1:this.props.variation[0].price1,quantity:this.props.variation[0].quantity})
        }
        var select = this.props.varSelect;
        select.vid = this.props.variation[0]._id;
        this.props.updateState('variationSelect', select);
    }
    _renderVariationDetails=()=>{
        var  variation = this.props.variation;
        var arr =[];
        for(var i=0;i<variation.length;i++){
            arr.push(<Picker.Item label={variation[i].title} value={variation[i]}  key={"variation_"+i}/>)
        }
        return arr;
    };
    onHandleChange=(value)=>{
        this.setState({variationSelect:value});
        var select = this.props.varSelect;
        select.vid = value._id;
        this.props.updateState('variationSelect', select);
        if(typeof value.subVariantDetail=="undefined"){
            this.props.updateState('price1',value.price1);
            this.props.updateState('quantity',value.quantity);
        }
    };
    variantStateUpdate=(name,value)=>{
            this.setState({[name]:value})
    };
    handleOnChange=(event)=>{
            this.setState({selectQuantity:event.nativeEvent.text,inputError:false})
    };
    _handleBlur=()=>{
        if(this.state.selectQuantity > this.state.quantity){
            this.setState({inputError:true});
        }
        this.props.updateState('selectQuantity',this.state.selectQuantity);
    };
    _renderTypeSelection(){
        if(this.props.variationType1 =="dropdown"){
            return (
                <View style={styles.valueContent}>
                    <Picker
                        selectedValue={this.state.variationSelect}
                        style={styles.pickerContent}
                        onValueChange={
                            this.onHandleChange
                        }>
                        {this._renderVariationDetails()}
                    </Picker>
                </View>
            )
        }
        if(this.props.variationType1 =="thumbnail"){
            return (
                <ThumbnailIndex
             variation={this.props.variation}
             variationSelect={this.state.variationSelect}
             handleOnChange={this.onHandleChange}
            />
            )
        }
    }
    render() {
        return (
            <View>
                <View style={styles.priceSection}>
                    <Text>Price  <Text style={styles.priceTag}>{this.state.price1}</Text></Text>
                    <View
                    style={{flex:1,flexDirection:'row'}}
                    >
                        <View
                            style={{flex:1,
                            marginTop:10
                            }}
                        >
                            <Text>Quantity</Text>
                        </View>
                        <View
                            style={{flex:2}}
                        >
                            <TextInput
                                value={this.state.selectQuantity}
                                style={styles.input}
                                selectionColor={this.state.inputError?Red:Blue}
                                underlineColorAndroid={this.state.inputError? Red:Grey}
                                keyboardType={'numeric'}
                                onChange={this.handleOnChange}
                                onBlur={this._handleBlur}
                            />
                            {this.state.quantity < 5 || this.state.inputError?(
                                <View style={{paddingStart:10}}>
                                    <Text style={{fontSize:9,color:"#f43023"}}>Only {this.state.quantity} left</Text>
                                </View>
                            ):null}
                        </View>
                    </View>
                </View>
                <View style={styles.nativeHr}/>
                <View style={styles.contRow}>
                    <View style={styles.labelContent}>
                    <Text>{this.props.variationName1} </Text>
                    </View>
                    {this._renderTypeSelection()}
                </View>
                <SubVariation
                subVariation={this.state.variationSelect.subVariantDetail}
                updateState={this.props.updateState}
                variationName2={this.props.variationName2}
                variationName3={this.props.variationName3}
                variationType2={this.props.variationType2}
                variationType3={this.props.variationType3}
                variantStateUpdate={this.variantStateUpdate}
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

    },
    priceSection:{
        padding:10
    },
    nativeHr:{
        borderBottomColor: '#0000001a',
        borderBottomWidth: 1,
    },
    input: {
        height:40,
        paddingLeft: 6
    },
    priceTag:{
        fontSize:20,
        color:'#f43023'
    }
});