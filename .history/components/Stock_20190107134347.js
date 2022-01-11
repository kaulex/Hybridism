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
        marginTop: 20
    },
    vueBenef: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection:'row',
    },
    tableStock: {
        flex: 1,
        backgroundColor: 'yellow'
    },
})

export default Stock


