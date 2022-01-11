import React from 'react';
import { Text, StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
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
            {/**TOTAL */}
            <View style={styles.statistiques}>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#557cca"}}>TOTAL </Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#557cca"}}>269</Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#557cca"}}> €</Text>
            </View>
            {/**BENEF */}
            <View style={styles.statistiques}>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#218f35"}}>BENEFICE </Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#218f35"}}>269</Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#218f35"}}> €</Text>
            </View>
            {/**QUANTITÉ */}
            <View style={styles.statistiques}>
            <Icon name='shopping-basket' type='font-awesome' style={styles.icone}/> 
                <Text style={{fontSize:18, fontWeight:"bold", textAlign: 'center', }}>   269</Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}> €</Text>
            </View>
            
                <FlatList
                    data={this.state.unStock}
                    keyExtractor={(item) => item.Tshirt_ID.toString()}
                    renderItem={({item}) => <UneLigneStockItem uneLigneStock={item}/>}
                />
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
        flex: 0.3,
        backgroundColor: '#fff',
        paddingRight: 10,
        borderBottomColor: '#f00',
        borderBottomWidth: 1,
    },
    statistiques: {
        flexDirection: "row", 
        flex: 1, 
        padding: 5,
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
    },
    tableStock: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'red',
        marginTop: 10
    },
    titrePartie: {
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#f00',
        borderBottomWidth: 1,
        fontSize: 25
    },
    tabStock: {
        backgroundColor: '#fff',
        padding: 20      
    },
    
})

export default Stock


