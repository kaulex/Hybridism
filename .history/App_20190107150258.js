import React from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Navigation from './navigation/navigation' // permet de naviguer entre les views

export default class App extends React.Component {  

  // Rendu de ma vue
  render() {
    const un = this.props.voyages
    return (
      <Navigation/>
    )
  }
}
