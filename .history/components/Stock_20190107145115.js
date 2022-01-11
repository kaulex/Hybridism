import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native'

class Stock extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = { 
            unStock: [] ,
        }

    recupInfosUser(this.props.navigation.state.params.idUser).then(data => {
      this.setState({user: data})
      this.state.user.forEach(element => { 
        this.setState({userEmail : element.user_email})
        this.setState({userNom : element.user_nom})
        this.setState({userPrenom : element.user_prenom})
        this.setState({userAdresse : element.user_adresse})
        this.setState({userVille : element.user_ville})
        this.setState({userCP : element.user_cp})
    })
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


