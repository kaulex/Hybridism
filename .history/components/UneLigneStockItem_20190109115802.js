import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class UneLigneStockItem extends React.Component{
    constructor(props)
    {

        super(props)
        this.state = { 
            couleur: "",
            indice: -1,
        }
  }

    render (){

        const uneLigneStock = this.props.uneLigneStock
        const tabCouleur = this.props.unTabColor

        console.log(tabCouleur)

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>{ uneLigneStock.Categ_CodeStock } – { uneLigneStock.Couleur_Libelle } – { uneLigneStock.Taille_Libelle  }</Text>
                    <Text style={{flex: 0.5, textAlign: 'right', padding: 10, fontSize: 12, color: tabCouleur[() =>{
                let i = 0
            }]}}>{ uneLigneStock.Tshirt_NbrStock } pièces</Text>
                    
                </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    tabStockRef: {
        flex: 1,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#a8a7a8',
        backgroundColor: '#e3e3e3'
    },
    ligneRefTab: {
        flex: 1,
        padding: 10,
        fontSize: 12,
    },
    ligneStockTab: {
        flex: 0.5,
        textAlign: 'right',
        padding: 10,
        fontSize: 12,
    }
})

export default UneLigneStockItem