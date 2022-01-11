import React from 'react';
import { Text, StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import UneLigneStockItem from './UneLigneStockItem'
import { recupererLeStock } from '../API/MonAPI'
import { recupererLesCalculs } from '../API/MonAPI'


class Stock extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { 
            unStock: [] ,
            unCalcul: [] ,
            total: "",
            panier: "",

        }

        recupererLeStock().then(data => {
        this.setState({unStock: data})
        });

        recupererLesCalculs().then(data => {
            this.setState({unCalcul: data})
            this.state.unCalcul.forEach(element => { 
          
                this.setState({total : element.Calcul_Total})
                this.setState({panier : element.Calcul_Panier})
            })
            });
  }

  render() {
    return ( 
        <View style={styles.container}>        
            <View style={styles.vueBenef}>
                {/**TOTAL */}
                <View style={styles.statistiques}>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#557cca"}}>TOTAL </Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#557cca"}}>{ this.state.total }</Text>
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
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign: 'center', }}>   { this.state.total }</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#fff"}}> €</Text>
                </View>
                <View style={{height:10}}></View>
            </View>
            
            <View style={styles.tableStock}>
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
    },
    tabStock: {
        backgroundColor: '#fff',
        padding: 20      
    },
    
})

export default Stock


