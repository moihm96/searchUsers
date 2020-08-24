import React, {Component} from 'react';
import {
  View,
  Text
  
} from 'react-native';

export default class Details extends Component{
    render(){
        return(
            <View style = {{flexDirection: "row",paddingTop:10, paddingBottom: 5}}>
                <Text style ={{fontSize: 18, fontWeight: 'bold', color: '#000',paddingLeft: 10, paddingRight: 10}}>{this.props.head}</Text>
                <Text style= {{fontSize: 18}}>{this.props.content == null ? 'Empty property' : this.props.content}</Text>
            </View>
        )
    }
}