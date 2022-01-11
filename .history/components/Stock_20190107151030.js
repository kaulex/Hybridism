import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'
import UneLigneStockItem from './UneLigneStockItem'
import { recupererLeStock } from '../API/MonAPI'


class Stock extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { 
            unStock: [] ,
        }

        recupererLeStock().then(data => {
        this.setState({unStock: data})
        });
  }

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
            <View style={{flex: 1}}> 
            <View style={styles.tabStock}></View>
            <FlatList
                data={this.state.unStock}
                keyExtractor={(item) => item.Tshirt_ID.toString()}
                renderItem={({item}) => <UneLigneStockItem uneLigneStock={item}/>}
            />
            </View>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
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


