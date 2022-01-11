import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    
    
    render (){

        const uneLigneStock = this.props.uneLigneStock

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>S – { uneLigneStock.Couleur_Libelle } – {uneLigneStock.Categ_Libelle }</Text>
                    <Text style={styles.ligneStockTab}>9</Text>
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
        padding: 10
    },
    ligneStockTab: {
        flex: 1,
        textAlign: 'right',
        padding: 10
    }
})

export default UneLigneStockItem