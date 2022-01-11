import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    
    
    render (){

        const uneLigneStock = this.props.uneLigneStock

        return(      
                
        <View style={styles.main_container}>
         <View style={styles.tabStock}>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>S – BLACK – CAT1</Text>
                </View>
                <View style={styles.tabStockStock}>
                    <Text style={styles.ligneRefTab}>9</Text>
                </View>
            </View>
        </View>
  
        )
    }
}

const styles = StyleSheet.create({
    tabStockRef: {
        flex: 1,
        backgroundColor: 'red'
    },
    tabStockStock: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'flex-end',
    }
})

export default UneLigneStockItem