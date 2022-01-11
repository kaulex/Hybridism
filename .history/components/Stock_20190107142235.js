import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'

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
            
        </View>
      </View>
    )
  }
}


<<<<<<< HEAD

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
    
})

export default Stock


=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
>>>>>>> 1bc4aa08b6f185f806d96b274bb005d570a78849
