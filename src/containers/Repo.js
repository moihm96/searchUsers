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

import {connect} from 'react-redux';
import {reposFetch}  from '../actions/UsersAction';
import Details from '../components/Details';

const {width, height} = Dimensions.get('window');


class Repo extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            data:[],
            dataTemp:[]
        }
      }
      componentDidMount(){
        //this.getUsers();
        this.props.reposFetch(this.props.route.params.item.login);
    
        this.setState({
          data: this.props.followers,
          dataTemp : this.props.followers
        })
      }
    
      UNSAFE_componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
          data: nextProps.followers,
          dataTemp : nextProps.followers
        })
      }
      
      separator = () => {
        return (
          <View style={{height: 10, width: '100%', backgroundColor: '#E1F8EE'}} />
        );
      };
      
    render(){
          return(
            <View style = {styles.container}>
                <Details
                  head="Repositories of: "
                  content = {this.props.route.params.item.name}
                />
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

  const mapStateToProps = state => {
    const followers = state.users;
  
    return {followers}
  }
  
  export default connect(mapStateToProps,{reposFetch})(Repo);