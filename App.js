import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
//import VesselArrival from './app/VesselArrival'
import  Tabs from './app/TabNavigator';
import AddVessel from './app/AddVessel';
const StackNavigator=createStackNavigator({
  Tabs:{
    screen:Tabs
  },
  AddVessel:{
screen:AddVessel
  }
});

export default StackNavigator;