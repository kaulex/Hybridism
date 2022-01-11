import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { recupererLeStock } from '../API/MonAPI'
import { enleverUneUnite } from '../API/MonAPI'

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
            imageTshirt: "",
            message: "",
        }

        recupererLeStock().then(data => {
        this.setState({unProduit: data})
        this.state.unProduit.forEach(element => { 
          
          this.setState({tailleTshirt : element.Taille_Libelle})
          this.setState({couleurTshirt : element.Couleur_Libelle})
          this.setState({catTshirt : element.Categ_Libelle})
          this.setState({imageTshirt : element.Tshirt_photo})

          console.log(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt)

          if(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt == this.props.navigation.state.params.detail)
          {
            this.setState({idTshirt : element.Tshirt_ID})
          }
          else
          {
            
          }
      })

        });
  }

  
  _onPressUpdate(){
    enleverUneUnite(this.state.idTshirt)
    alert("C'est supprimé du stock !")
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate("Stock")
    }, 2000);
    
  }
  
  
   
  render() {
  
    return (

      <View style={styles.main_container}>
        <Text style={styles.detail_text}> {this.props.navigation.state.params.detail} - { this.state.message }</Text>
        
        <View style={styles.boxbox}>
        <TouchableOpacity style={styles.button} onPress={() => this._onPressUpdate()}><Text>Oui</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Non</Text></TouchableOpacity></View>

        <Image source={{uri: 'http://prcm.fr/HYBRIDISM/Photos/'+this.state.imageTshirt}}
          style={{width: 300, height: 400}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        
    },
    detail_text:{
        marginTop:30,
        fontSize:22,
        textAlign:'center'
    },
    button:{
        alignItems:'center',
        height:50,
        flexDirection:'row',
        flex: 1,
        backgroundColor: "#eee",
        justifyContent: 'space-evenly',    
        margin: 10, 
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#00c7ff', 
    },
    text:{
        fontSize:16,
        marginTop:10,
        textAlign:'center'
    },
    boxbox: {
        flexDirection: "row",
        height:50,
    }
    
    
})