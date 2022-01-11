import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    
    
    render (){

        const uneLigneStock = this.props.uneLigneStock

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>{ uneLigneStock.Categ_CodeStock } – { uneLigneStock.Couleur_Libelle } – { uneLigneStock.Taille_Libelle  }</Text>
                    <Text style={styles.ligneStockTab}>{ uneLigneStock.Tshirt_NbrStock } pièces</Text>
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
        borderBottomColor: '#b4b4b4',
    },
    ligneRefTab: {
        flex: 1,
        padding: 10,
        fontSize: 11,
    },
    ligneStockTab: {
        flex: 0.5,
        textAlign: 'right',
        padding: 10
    }
})

export default UneLigneStockItem