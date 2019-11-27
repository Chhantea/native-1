import React,{Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View,Text} from 'react-native';

export class CarousalSection extends Component {
    constructor(){
        super();
        this.state={
            entries:''
        }
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}