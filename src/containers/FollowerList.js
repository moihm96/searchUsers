import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Dimensions
} from 'react-native';

import { Avatar } from 'react-native-elements';

const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {followersFetch} from '../actions/UsersAction'
class FollowerList extends Component{
  constructor(props){
    super(props)
    this.state={
        text:"",
        loading:false,
        users:[],
        usersTemp:[]
    }
  }
  
  componentDidMount(){
    this.props.followersFetch(this.props.route.params.item.login);

    this.setState({
      users: this.props.users,
      usersTemp : this.props.users
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    
    this.setState({
      users: nextProps.users,
      usersTemp : nextProps.users
    })
  }

  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        users: this.state.usersTemp,
      });
    } else {
      var data = this.state.usersTemp;
      query = query.toLowerCase();
      data = data.filter(l => l.login.toLowerCase().match(query));

      this.setState({
        users: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#E1F8EE'}} />
    );
  };


  render(){ 
    if(this.state.loading){
      return(
        <View>
          <Text>Unloading users!</Text>
        </View>
      )
    }
    return(
      <View style = {styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#7CE3B5" />
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Text..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
          <FlatList
          ItemSeparatorComponent={() => this.separator()}
            data ={this.state.users}
            renderItem={
            ({item}) => 
            <TouchableOpacity style ={styles.itemContainer} onPress={()=> this.props.navigation.navigate('User',{ item: item})} >
              <Avatar rounded source={{uri:item.avatar_url}}/>
              <Text style={styles.loginContainer}>{item.login}</Text>
            </TouchableOpacity>
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
  itemContainer: {
      flexDirection: 'row',
      flexWrap:'wrap',
      paddingBottom:5
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#7CE3B5',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  loginContainer:{
    paddingLeft:10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  }
})
const mapStateToProps = state => {
  const users = state.users;

  return {users}
}

export default connect(mapStateToProps,{followersFetch})(FollowerList);