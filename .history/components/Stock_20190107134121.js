import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

class Stock extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.vueBenef}>
            <Text>BJOUR</Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    vueBenef: {
        flex: 1,
        backgroundColor: 'red'
    },
})

export default Stock


