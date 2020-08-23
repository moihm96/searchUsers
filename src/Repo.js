import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');


export default class Repo extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            data:[],
            dataTemp:[]
        }
      }
      componentDidMount(){
        this.getUsers(this.props.route.params.item);
        console.log(this.state.users)
      }
      getUsers = (item) => {
    
        this.setState({loading:true});
    
        fetch("https://api.github.com/users/"+ item.login + '/repos')
        .then(res => res.json())
        .then(res =>{
          this.setState({
            data : res,
            dataTemp: res,
            loading: false
          })
        });  
      }
      
      separator = () => {
        return (
          <View style={{height: 10, width: '100%', backgroundColor: '#E1F8EE'}} />
        );
      };
      
    render(){
        if(this.state.loading){
            return(
              <View>
                <Text>No repositories found!</Text>
              </View>
            )
          }
          return(
            <View style = {styles.container}>
                <FlatList
                ItemSeparatorComponent={() => this.separator()}
                  data ={this.state.data}
                  renderItem={
                  ({item}) => 
                  <View>
                    <Text style={styles.nameContainer}>{item.full_name}</Text>
                    <Text style={styles.urlContainer}>{item.html_url}</Text>
                  </View>
                  }
                />
            </View>
            
          )
    }
}


const styles = StyleSheet.create({
    container : {
      flex : 1
    },
    
    nameContainer:{
      paddingLeft:10,
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000',
    },
    urlContainer:{
        paddingLeft:10,
        fontSize: 17,
    }
  })