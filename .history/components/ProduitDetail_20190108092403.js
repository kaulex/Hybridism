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
            nomTshirt: "", 
            photoTshirt

            nomProduit: "",
            taille: "",
            couleur: "",
            photo: "",

            message: "",
        }

        recupererLeStock().then(data => {
        this.setState({unProduit: data})
        this.state.unProduit.forEach(element => { 
          
          this.setState({tailleTshirt : element.Taille_Libelle})
          this.setState({couleurTshirt : element.Couleur_Libelle})
          this.setState({catTshirt : element.Categ_Libelle})
          this.setState({nomTshirt : element.Categ_CodeStock})
          

          console.log(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt)

          if(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt == this.props.navigation.state.params.detail)
          {
            this.setState({taille: this.state.tailleTshirt})
            this.setState({couleur: this.state.couleurTshirt})
            this.setState({nomProduit: this.state.nomTshirt})
            this.setState({idTshirt : element.Tshirt_ID})
            this.setState({imageTshirt : element.Tshirt_photo})
            this.setState({nomProduit : element.Categ_CodeStock })
            this.setState({message: "Confirmer la suppression du stock"})
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
        <View style={{flex: 3}}>
          <Text style={styles.detail_text}> { this.state.message }</Text>
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: -50}}>
          <Image source={{uri: 'http://prcm.fr/HYBRIDISM/Photos/'+this.state.imageTshirt}}
                    style={{width: 250, height: 250}} />

                    <Text>
                      {this.state.nomProduit}
                    </Text>
                    <Text>
                      {this.state.taille}
                    </Text>
                    <Text>
                      {this.state.couleur}
                    </Text>
          </View>
        </View>
        <View style={{flex: 1, position: 'absolute', bottom: 30, right: 1, left: 1, height: 50,}}>
          <View style={styles.boxbox}>
          <TouchableOpacity style={styles.button} onPress={() => this._onPressUpdate()}><Text>Oui</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text>Non</Text></TouchableOpacity></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1
    },
    detail_text:{
        marginTop:50,
        fontSize:20,
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