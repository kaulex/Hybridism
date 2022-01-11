import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';

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
        this.setState({authError: "Mot de passe incorrect ..."})
        console.log("ERROR : " + this.state.authError)
    }else if(this.state.password == "alakon"){
        this.setState({authError: ""})
        this.props.navigation.navigate("Home")  // On change de page : Connexion.js -> Home.js
    }else {        
      this.setState({authError: "Erreur inconnu ..."})
    }
    
  }

  
  // Rendu de ma vue
  render() {
    return (
      <ImageBackground source={require('../assets/fond.png')} style={{width: '100%', height: '100%'}}>    
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
              placeholder="mot de passe ..."
              placeholderTextColor='#FFF'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              />

              <View style={styles.btnC}>
                <Text style={styles.txt} />
                {/**BUTTON */}
                <TouchableOpacity style={styles.btn} onPress={this.login}>
                  <Text style={{fontSize:16, fontWeight:"bold", color:"#f39d21"}}>Connexion</Text>
                </TouchableOpacity>
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
    marginTop:90
  },
  boite1: {
    flex: 1,
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#f39d21',
    marginBottom: 15,
    color: '#FFF'
  },
  errorMessage: {
    color: '#FFF',
    fontWeight: "bold",
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