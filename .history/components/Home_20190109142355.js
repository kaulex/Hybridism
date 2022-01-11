import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native'


export default class Home extends Component {

  

  render() {
    return (
      <ImageBackground source={require('../assets/fond.png')} style={{width: '100%', height: '100%'}}>    
      <View style={styles.container}>

        {/**BUTTON */}
        <TouchableOpacity 
        style={styles.button}   
        onPress={()=>this.props.navigation.navigate("Stock")}
        ><Text style={styles.txt}>Stock Tshirt</Text></TouchableOpacity>

        {/**BUTTON */}
        <TouchableOpacity 
        style={styles.button}   
        onPress={()=>this.props.navigation.navigate("Stock")}
        ><Text style={styles.txt}>Stock CD</Text></TouchableOpacity>

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
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  button: {
    height: 50,
    width:"60%",
    justifyContent: 'center',    
    alignItems: 'center',  
    margin: 10,
    marginTop: 50, 
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#f39d21', 
  },
  txt: {
    color: '#f39d21',
    fontSize: 20,  
  },
});


