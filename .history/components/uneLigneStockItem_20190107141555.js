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

})

export default DestinationItem