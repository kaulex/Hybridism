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
            nbrStock: "",
            couleur: "",

            unTabColor: [],
        }

        recupererLeStock().then(data => {
        this.setState({unStock: data})

        this.state.unStock.forEach(element => { 
            this.setState({nbrStock : element.Tshirt_NbrStock})
            if(this.state.nbrStock < 5)
            {

                let colorr = 'red'

                this.state.unTabColor.push(colorr)

                console.log(this.state.unTabColor[0])

            }
            else
            {

                let colorr = 'black'

                this.state.unTabColor.push(colorr)
                console.log(this.state.unTabColor[1])
              
            }

        })

        

        
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
        <ImageBackground source={require('../assets/fond.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>        
            <View style={styles.vueBenef}>
                {/**TOTAL */}
                <View style={styles.statistiques}>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#00abff"}}>TOTAL </Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#00abff"}}>{ this.state.total }</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#00abff"}}> €</Text>
                </View>

                {/**BENEF */}
                <View style={styles.statistiques}>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}>BENEFICE </Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}>269</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}> €</Text>
                </View>

                {/**QUANTITÉ */}
                <View style={styles.statistiques}>
                <Icon name='shopping-basket' type='font-awesome' color='white' style={styles.icone}/> 
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign: 'center', color:"#fff",}}>   { this.state.panier }</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#1c0014"}}> €</Text>
                </View>
                <View style={{height:10}}></View>
            </View>
            
            <View style={styles.tableStock}>
                <FlatList
                    data={this.state.unStock}
                    keyExtractor={(item) => item.Tshirt_ID.toString()}
                    renderItem={({item}) => <UneLigneStockItem uneLigneStock={item} unTabColor={this.state.unTabColor[0]}/>}
                />
            </View>
        </View>
        </ImageBackground>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 60
    },
    vueBenef: {
        flex: 0.3,
        
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
    icone: {
        color: 'white',
        backgroundColor: 'white'
    }
    
})

export default Stock


