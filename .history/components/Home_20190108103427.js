import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={{uri: 'http://prcm.fr/HYBRIDISM/fond.png'}} style={{width: '100%', height: '100%'}}>   
      <View style={styles.container}>

        {/**BUTTON */}
        <TouchableOpacity 
        style={styles.button}   
        onPress={()=>this.props.navigation.navigate("Stock")}
        ><Text style={styles.txt}>Stock</Text></TouchableOpacity>

        {/**BUTTON */}
        <TouchableOpacity 
        style={styles.button}   
        onPress={()=>this.props.navigation.navigate("AppPhoto")}
        ><Text style={styles.txt}>QR Code</Text></TouchableOpacity>

      </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  button: {
    height: 50,
    width:"75%",
    backgroundColor: "#eee",
    justifyContent: 'center',    
    alignItems: 'center',  
    margin: 10, 
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#00c7ff', 
  },
  txt: {
    color: "#00c7ff",
    fontSize: 20,    
  },
});


