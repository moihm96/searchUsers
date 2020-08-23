import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
  
} from 'react-native';
import Details from './Details';

export default class Button extends Component{
    render(){
        return(
            <TouchableHighlight style={{ justifyContent: "center", padding: 20}}>
                        <View style={{alignItems: "center", backgroundColor: "#7CE3B5", padding: 10}}>
                            <Details
                                head={this.props.head}
                                content= {this.props.content}
                            />
                        </View> 
            </TouchableHighlight >
        )
    }
}