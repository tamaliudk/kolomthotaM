/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  TouchableHighlight,
  
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon =(<Icon name="rocket" size={40} color="#900" 
onPress={() => {
  this.props.navigation.navigate('AddVessels');
}}/>)

type Props = {};
export default class VesselArrival extends Component<Props> {
  render() {
    return (
    
      
       
   
    <View style={styles.container}>
    
        <ScrollView>
            <View style={{padding: 20, flex:1, justifyContent: 'center'}}>
                <View style={styles.container}>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name:QUEEN OF LUCK</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: ALION</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: MSC SUSAN</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name:MALIAKOS</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name:EVER DIAMOND</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: MSC ROBARTA</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: MSC SINDY</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: EVER DEVELOP</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name:QUEEN OF LUCK</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: MSC ROBARTA</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name:ALLION</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.vessel}
                                         onPress={() => {
                                            this.props.navigation.navigate('Schedule');
                                       }}>
                             <Text style={{color: 'white', fontSize: 18}}>Vessel Name: MSC SUSANA</Text>
                        </TouchableHighlight>
                        
                        
                        
                        
                </View>
            </View>
        </ScrollView> 
        <View style={{height:60, alignItems:'center',justifyContent:'center'}} >

          <Button 
             onPress={() => {
              this.props.navigation.navigate('AddVessel');
         }}
            title="Add Vessel"
            buttonStyle={{
              backgroundColor: "#343434",
              width: 150,
              height: 45,
              borderColor: "#9E9E9E",
              borderWidth: 3,
              borderRadius: 5
            }}
          />
  
    </View>
        </View>      
    
        
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121'
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  vessel:{
    margin: 10, 
    width: 350, 
    height: 150,
    backgroundColor: '#343434',
    padding: 10,
    alignItems: 'center',
    borderRadius:10
  }
});
