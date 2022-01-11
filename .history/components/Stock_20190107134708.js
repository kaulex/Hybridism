import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

class Stock extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vueBenef}>
            <Text>BJOUR</Text>
        </View>
        <View style={styles.tableStock}>
            <Text>Tableau des stocks</Text>
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
        flex: 0.3,
        backgroundColor: '#f39d21',
        
    },
    tableStock: {
        flex: 1,
        backgroundColor: 'yellow'
    },
})

export default Stock


