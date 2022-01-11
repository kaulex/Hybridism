import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { recupererLeStock } from '../API/MonAPI'

export default class ProduitDetail extends Component {
   
  render() {
  
    return (

      <View style={styles.main_container}>
        <Text style={styles.detail_text}> {this.props.navigation.state.params.detail} </Text>
        <TouchableOpacity style={styles.oui_btn}><Text>Oui</Text></TouchableOpacity>
        <TouchableOpacity style={styles.non_btn}><Text>Non</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        flex:1
    },
    detail_text:{
        
    },

    oui_btn:{
        backgroundColor:'red',
        flexDirection:'row'
    },
    non_btn:{
        backgroundColor:'green',
        flexDirection:'row'
    },
})