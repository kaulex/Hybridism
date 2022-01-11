import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { recupererLeStock } from '../API/MonAPI'

export default class ProduitDetail extends Component {

  constructor(props)
    {
        super(props)
        this.state = { 
            unProduit: [],
            idTshirt: "",
            tailleTshirt: "",
            couleurTshirt: "",
            catTshirt: "",
            message: "",
        }

        recupererLeStock().then(data => {
        this.setState({unProduit: data})
        this.state.unProduit.forEach(element => { 
          this.setState({idTshirt : element.Tshirt_ID})
          this.setState({tailleTshirt : element.Taille_Libelle})
          this.setState({couleurTshirt : element.Couleur_Libelle})
          this.setState({catTshirt : element.Categ_Libelle})

          console.log(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt)

          if(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt == this.props.navigation.state.params.detail)
          {
            console.log("C'EST OK")
          }
          else
          {
            console.log("C'EST NOK")
          }
      })

        });
  }
   
  render() {
  
    return (

      <View style={styles.main_container}>
        <Text style={styles.detail_text}> {this.props.navigation.state.params.detail} - { this.state.message }</Text>
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