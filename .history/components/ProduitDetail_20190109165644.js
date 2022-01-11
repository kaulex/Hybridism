import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { recupererLeStock } from '../API/MonAPI'
import { recupererLeStockCD } from '../API/MonAPI'
import { enleverUneUnite } from '../API/MonAPI'
import { enleverUneUniteCD } from '../API/MonAPI'
import { ajouterUneUnitePanier } from '../API/MonAPI'
import { ajouterAuTotal } from '../API/MonAPI'

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
            photoTshirt: "",

            nomProduit: "",
            taille: "",
            couleur: "",
            photo: "",

            message: "",

            unCD: [],
            idCD: "",
            libelleCD: "",
            cdPhoto: "",

            typeProduit: "",

        }

        recupererLeStock().then(data => {
        this.setState({unProduit: data})
        this.state.unProduit.forEach(element => { 
          
          this.setState({tailleTshirt : element.Taille_Libelle})
          this.setState({couleurTshirt : element.Couleur_Libelle})
          this.setState({catTshirt : element.Categ_Libelle})
          this.setState({nomTshirt : element.Categ_CodeStock})
          this.setState({photoTshirt : element.Categ_Photo})

          if(this.state.unProduit.length == 0)
          {
            this.setState({message: "Aucun produit lié à ce QRCODE !"})
          }
          else
          {

          if(this.state.tailleTshirt+" – "+this.state.couleurTshirt+" – "+this.state.catTshirt == this.props.navigation.state.params.detail)
          {
            this.setState({taille: this.state.tailleTshirt})
            this.setState({couleur: this.state.couleurTshirt})
            this.setState({nomProduit: this.state.nomTshirt})
            this.setState({photo: this.state.photoTshirt})
            this.setState({idTshirt : element.Tshirt_ID})
            this.setState({message: "Confirmer la suppression du stock"})

            this.setState({typeProduit: "Tshirt"})
          }
          else
          {
            
          }
        }
      })

        });

        recupererLeStockCD().then(data => {
          this.setState({unCD: data})
          this.state.unCD.forEach(element => { 
            
            this.setState({libelleCD : element.CD_libelle})
            this.setState({idCD : element.CD_ID})
            this.setState({cdPhoto : element.CD_Cover})

            console.log(this.state.libelleCD + " -- CD : "+ this.props.navigation.state.params.detail)
  
            if(this.state.unCD.length == 0)
            {
              this.setState({message: "Aucun produit lié à ce QRCODE !"})
            }
            else
            {
  
              
            if(this.state.libelleCD + " -- CD" == this.props.navigation.state.params.detail)
            {
              this.setState({nomProduit: this.state.libelleCD})
              this.setState({photo: this.state.cdPhoto})
              this.setState({idTshirt : element.CD_ID})

              this.setState({message: "Confirmer la suppression du stock"})

              this.setState({typeProduit: "CD"})
            }
            else
            {
              
            }
          }
        })
  
          });
  }

  
  _onPressUpdate(){
    if(this.state.typeProduit == "CD")
    {
      enleverUneUniteCD(this.state.idTshirt)
      ajouterUneUnitePanier(this.state.typeProduit)
      ajouterAuTotal(this.state.typeProduit)
      alert("C'est supprimé du stock !")
      setTimeout(()=>{
        this.props.navigation.navigate("StockCD")
      }, 2000);
    }
    
    if(this.state.typeProduit == "Tshirt")
    {
      enleverUneUnite(this.state.idTshirt)
      ajouterUneUnitePanier(this.state.typeProduit)
      ajouterAuTotal(this.state.typeProduit)
      alert("C'est supprimé du stock !")
      setTimeout(()=>{
        this.props.navigation.navigate("Stock")
      }, 2000);
      }
    
    
  }


  _onPressReturn(){
    this.props.navigation.navigate("AppPhoto")
  }
  
  
   
  render() {
    
    return (
      
<ImageBackground source={require('../assets/fond.png')} style={{width: '100%', height: '100%'}}>    
      <View style={styles.main_container}>
        <View style={{flex: 3}}>
          <Text style={styles.detail_text}> { this.state.message }</Text>
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: -50}}>
          <Image source={{uri: 'http://prcm.fr/HYBRIDISM/Photos/'+this.state.photo}}
                    style={{width: 250, height: 297}} />

                    <Text style={{color: 'white'}}>
                      {this.state.nomProduit}
                    </Text>
                    <Text style={{color: 'white'}}>
                      {this.state.taille}
                    </Text>
                    <Text style={{color: 'white'}}>
                      {this.state.couleur}
                    </Text>
          </View>
        </View>
        <View style={{flex: 1, position: 'absolute', bottom: 30, right: 1, left: 1, height: 50,}}>
          <View style={styles.boxbox}>
          <TouchableOpacity style={styles.button} onPress={() => this._onPressUpdate()}><Text style={styles.confirm_text}>Oui</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this._onPressReturn()}><Text style={styles.confirm_text}>Non</Text></TouchableOpacity></View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1
    },
    detail_text:{
        marginTop:100,
        fontSize:20,
        textAlign:'center',
        color: 'white'
    },
    button:{
        alignItems:'center',
        height:50,
        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-evenly',    
        margin: 10, 
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#f39d21', 
    },
    text:{
        fontSize:16,
        marginTop:10,
        textAlign:'center',
        color: '#f39d21'
    },
    boxbox: {
        flexDirection: "row",
        height:50,
    },
    confirm_text:{
      color:'#f39d21'
    }
    
    
})