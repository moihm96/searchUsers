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

import { Avatar } from 'react-native-elements';
import Details from './Details';
import Button from './Button'
const {width, height} = Dimensions.get('window');


export default class UserItem extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            user:{}
        }
      }
      componentDidMount(){
        this.getUsers(this.props.route.params.item);
        console.log(this.state.users)
      }
      getUsers = (item) => {
    
        this.setState({loading:true});
    
        fetch("https://api.github.com/users/"+ item.login)
        .then(res => res.json())
        .then(res =>{
          this.setState({
            user : res,
            loading: false
          })
        });  
      }
      
    render(){
        const {item} = this.props.route.params;
        this.getUsers.bind(item);
        const {loading, user} = this.state;
        if(!this.state.loading){
            return(
                <View>
                    <Avatar size= 'large' containerStyle={{alignSelf:'center'}} rounded source={{uri:this.state.user.avatar_url}}/>
                    <Details
                        head = {"Name: "}
                        content = {user.name}
                    />
                    <Details
                        head = {"Web repositories: "}
                        content = {user.html_url}
                    />
                    <Details
                        head = {"User's blog: "}
                        content = {user.blog}
                    />
                    <Details
                        head = {"Location: "}
                        content = {user.location}
                    />
 
                    <Details
                        head = {"Email: "}
                        content = {user.email}
                    />
                    <Details
                        head = {"Company: "}
                        content = {user.company}
                    />
                    <TouchableHighlight style={{ justifyContent: "center", padding: 20}} onPress={()=> this.props.navigation.navigate('Followers',{ item: item})}>
                        <View style={{alignItems: "center", backgroundColor: "#7CE3B5", padding: 10}}>
                            <Details
                                head={"FOLLOWERS"}
                                content= {user.followers}
                            />
                        </View> 
                    </TouchableHighlight >
                    
                    <TouchableHighlight style={{ justifyContent: "center", padding: 20}} onPress={()=> this.props.navigation.navigate('Repo',{ item: item})}>
                        <View style={{alignItems: "center", backgroundColor: "#7CE3B5", padding: 10}}>
                            <Details
                                head={"REPOSITORIES: "}
                                content= {user.public_repos}
                            />
                        </View> 
                    </TouchableHighlight >
                    
                </View>
            )
        }else{
            return(
                <Text>No user found!!!</Text>
            )
        }
    }
}