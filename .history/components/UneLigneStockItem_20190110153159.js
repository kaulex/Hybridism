import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    constructor(props)
    {

        super(props)
        this.state = { 
            couleur: "black",
            uneLigneStock : this.props.uneLigneStock
        }
  }

 isRed = () => this.state.uneLigneStock.Tshirt_NbrStock <

    render (){

        

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>{ this.state.uneLigneStock.Categ_CodeStock } – { this.state.uneLigneStock.Couleur_Libelle } – { this.state.uneLigneStock.Taille_Libelle  }</Text>
                    <Text style={{flex: 0.5, textAlign: 'right', padding: 10, fontSize: 12, color: this.state.couleur}}>{ this.state.uneLigneStock.Tshirt_NbrStock } pièces</Text>
                    
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