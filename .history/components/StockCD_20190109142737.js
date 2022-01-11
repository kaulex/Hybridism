import React from 'react';
import { Text, StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import { Icon } from 'react-native-elements';
import UneLigneStockItem from './UneLigneStockItem'
import { recupererLeStockCD } from '../API/MonAPI'
import { recupererLesCalculs } from '../API/MonAPI'


class StockCD extends React.Component {

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
            indice: [],
            unTabColor: [],
        }

        recupererLeStockCD().then(data => {
        this.setState({unStock: data})

        let i = 0
        this.state.unStock.forEach(element => { 
            /*ithis.setState({nbrStock : element.Tshirt_NbrStock})
            f(this.state.nbrStock < 5)
            {
                
                let colorr = 'red'
                this.state.unTabColor.push(colorr)
            }
            else
            {
                let colorr = 'black'
                this.state.unTabColor.push(colorr)
            }*/
            
            
        })
// console.log(this.state.unTabColor)
        
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
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#00abff"}}>...</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#00abff"}}> €</Text>
                </View>

                {/**BENEF 
                <View style={styles.statistiques}>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}>BENEFICE </Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}>269</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#32e135"}}> €</Text>
                </View>*/}

                {/**QUANTITÉ */}
                <View style={styles.statistiques}>
                <Icon name='shopping-basket' type='font-awesome' color='white' style={styles.icone}/> 
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign: 'center', color:"#fff",}}>   ...</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", color:"#1c0014"}}> €</Text>
                </View>
                <View style={{height:10}}></View>
            </View>
            
            <View style={styles.tableStock}>
                <FlatList
                    data={this.state.unStock}
    
                    keyExtractor={(item) => item.Tshirt_ID.toString()}
                    renderItem={({item}) => <UneLigneStockItemCD uneLigneStock={item} unTabColor={this.state.unTabColor}/>}
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
        flex: 0.15,
        
        paddingRight: 10,
        borderBottomColor: '#f00',
        borderBottomWidth: 1,
    },
    statistiques: {
        flexDirection: "row", 
        
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

export default StockCD

