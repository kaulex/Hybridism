import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground} from 'react-native';

export default class Connexion extends React.Component {

  constructor(props) {
    super(props)

        this.state ={
            // utilisé dans "login()"
            password:'',
            authError:'',
        }

  } 

  // permet de se connecter
  login = () => {  

    if(this.state.password != "alakon"){
        this.state.authError = "Mot de passe incorrect ..."
    }else if(this.state.password == "alakon"){
        this.props.navigation.navigate("Home")  // On change de page : Connexion.js -> Home.js
    }else {        
        this.state.authError = "Erreur ..."
    }
    
  }

  // Rendu de ma vue
  render() {
    return (
      <ImageBackground source={{uri: '../assets/fond.png'}} style={{width: '100%', height: '100%'}}>    
      <View style={styles.container}>
        <View style={styles.boite1}>

              {/**AUTH ERROR */}
              <Text style={styles.errorMessage}>{this.state.authError}</Text>

        </View>        
        <View style={styles.boite2}>
          <Image style={styles.logo} source={require('../images/HMAlogo.png')}/>
             

              {/**MOT DE PASSE */}
              <TextInput 
              secureTextEntry={true}
              style={styles.textInput}  
              placeholder="mot de pass ..."
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              />

              <View style={styles.btnC}>
                <Text style={styles.txt} />
                {/**BUTTON */}
                <Button     
                style={styles.btn}   
                onPress={this.login}
                title="Connexion"
                />
              </View>

        </View>        
        <View style={styles.boite3}></View>
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boite1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boite2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boite3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#eee',
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgb(220, 220, 220)',
    marginBottom: 15,
  },
  errorMessage: {
    color: '#f00',
  },
  txt:{
    width:25,
  },
  logo:{
    width:332,
    height:101,
    marginBottom:30
  }

});