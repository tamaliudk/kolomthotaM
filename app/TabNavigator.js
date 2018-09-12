import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation';
import VesselArrival from './VesselArrival';
import Schedule from './Schedule';
import AddVessel from './AddVessel';

const Tabs = createMaterialTopTabNavigator({
    Vessels:VesselArrival,
    Schedule:Schedule
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#7a7d82',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        }
    },
}
);

const StackNavigator = createStackNavigator({
    
    
    Home:{
        screen: Tabs
    },
    AddVessel:{
        screen:AddVessel
    }
},
    {
        navigationOptions:{
            headerMode:'none',
            //headerLeft:null
    
        }
    }

);




export default StackNavigator;