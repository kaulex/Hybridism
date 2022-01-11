import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



class DestinationItem extends React.Component{
    
    
    render (){
        
        const voyage = this.props.voyages

        return(      
                
        <View style={styles.main_container}>

                    <View style={styles.content_container}>

                        <View style={styles.header_container}>
                        <Text style={styles.fromDestination_text}>{voyage.depart_libelle} -> {voyage.destinations_libelle}</Text>
                    
                        </View>

                        <View style={styles.infos_container}>
                        <Text style={styles.departuredate_text}>Date de départ : {voyage.VoyageInfo_dateDepart}</Text>
                        <Text style={styles.departure_text}>Heure de départ : {voyage.VoyageInfo_heureDepart}</Text>
                        <Text style={styles.departure_text}>Heure d'arrivée : {voyage.VoyageInfo_heureArrivee}</Text>
                        <Text style={styles.departure_text}>Places restantes : {voyage.voyage_nbrPlaces}</Text>
                        <Text style={styles.price_text}>{voyage.VoyageInfo_prix} €</Text>
                        </View>

                    </View>
        </View>
  
        )
    }
}

const styles = StyleSheet.create({

    main_container:{
        height:120,
        flexDirection:'row',
        backgroundColor: '#dcdcdc',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#b4b4b4',
        borderRadius: 3,
    },

    content_container:{
        flex:3,
        margin:5,
        flexDirection:'column',
        
    },
    header_container:{
        flex:2
    },
    fromDestination_text:{
        
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'left',
    },
    toDestination_text:{
        
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'left',
    },
    
    infos_container:{
        flex:7,
       
    },
    departuredate_text:{
        textAlign:'left',
        fontSize:15,
        marginBottom:5
    },

    departure_text:{
        textAlign: 'left',
        fontSize: 14,
        
    },
    arrival_text:{
      
        textAlign: 'left',
        fontSize: 14
    },
    price_text:{
        
        marginTop: -15,
        textAlign:'right',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#9f9f9f'
    }
})

export default DestinationItem