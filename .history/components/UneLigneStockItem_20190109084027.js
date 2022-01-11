import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = { 
            couleurStock: "white",
            lignePieces: "",
        }

        _verifTotal()
  {
    if(uneLigneStock.Tshirt_NbrStock <= 5)
    {
        this.setState({lignePieces: "<Text style={{flex: 0.5, textAlign: 'right', padding: 10, fontSize: 12, color: this.state.couleurStock}}>{ uneLigneStock.Tshirt_NbrStock } pièces</Text>"}) 
    }
    else
    {
        this.setState({lignePieces: "<Text style={{flex: 0.5, textAlign: 'right', padding: 10, fontSize: 12, color: 'red'}}>{ uneLigneStock.Tshirt_NbrStock } pièces</Text>"})
    }
  }

  }
  
  

    render (){

        const uneLigneStock = this.props.uneLigneStock
        
        _verifTotal()

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>{ uneLigneStock.Categ_CodeStock } – { uneLigneStock.Couleur_Libelle } – { uneLigneStock.Taille_Libelle  }</Text>
                    
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