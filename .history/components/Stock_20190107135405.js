import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

class Stock extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vueBenef}>
            <Text>... vendus</Text>
            <Text>... € ventes</Text>
            <Text>... € bénéfice</Text>
        </View>
        <View style={styles.tableStock}>
            <Text style={styles.titrePartie}>Tableau des stocks</Text>
            <View style={styles.tabStock}>
                <View style={styles.tabStockRef}>
                    <Text style={styles.ligneRefTab}>S – BLACK – CAT1</Text>
                </View>
                <View style={styles.tabStockStock}>
                    <Text style={styles.ligneRefTab}>9</Text>
                </View>
            </View>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,
        width: '100%'
    },
    vueBenef: {
        flex: 0.1,
        backgroundColor: '#f39d21',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    tableStock: {
        flex: 1,
        backgroundColor: '#c31c89'
    },
    titrePartie: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 25
    },
    tabStock: {
        padding: 20,
    },
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

export default Stock


