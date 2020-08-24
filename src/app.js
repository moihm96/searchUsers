
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserList from './UserList';
import UserItem from './UserItem';
import Repo from './Repo';
import FollowerList from './FollowerList'

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Users" component={UserList} />
        <Stack.Screen name="User" component={UserItem} />
        <Stack.Screen name="Repo" component={Repo} />
        <Stack.Screen name="Followers" component={FollowerList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;