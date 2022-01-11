import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class UneLigneStockItem extends React.Component{
    
    
    render (){

        const uneLigneStock = this.props.uneLigneStock

        return(    
        
         <View>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>S – BLACK – CAT1</Text>
                    <Text style={styles.ligneRefTab}>9</Text>
                </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    tabStockRef: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection:'row',
    },
    ligneRefTab: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'flex-end',
    }
})

export default UneLigneStockItem