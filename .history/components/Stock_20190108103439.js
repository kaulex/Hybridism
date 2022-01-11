import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'
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
        <ImageBackground source={{uri: 'http://prcm.fr/HYBRIDISM/fond.png'}} style={{width: '100%', height: '100%'}}>   
      <View style={styles.container}>
        <View style={styles.vueBenef}>
            <Text>269 </Text>
            <Icon
                    name='euro'
                    type='font-awesome'
                    style={styles.icone}
                />    
            <Text>€</Text>
            <Text>V</Text>
        </View>
        <View style={styles.tableStock}>
            <Text style={styles.titrePartie}>Tableau des stocks</Text>
            <View style={{flex: 1}}> 
            <FlatList
                data={this.state.unStock}
                keyExtractor={(item) => item.Tshirt_ID.toString()}
                renderItem={({item}) => <UneLigneStockItem uneLigneStock={item}/>}
            />
            </View>
        </View>
      </View>
      </ImageBackground>
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
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    tableStock: {
        flex: 1,
        backgroundColor: '#fff'
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


