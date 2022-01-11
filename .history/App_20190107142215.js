import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Navigation from './navigation/navigation' // permet de naviguer entre les views

export default class App extends React.Component {  

  // Rendu de ma vue
  render() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <Stock />
      </View>
    );
=======
      <Navigation/>
    )
>>>>>>> 1bc4aa08b6f185f806d96b274bb005d570a78849
  }
}