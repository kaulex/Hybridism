// Navigation/Navigation.js
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Connexion from '../components/Connexion'
import AppPhoto from '../components/AppPhoto'
import Stock from '../components/Stock'
import Home from '../components/Home'
import ProduitDetail from '../components/ProduitDetail'

const SearchStackNavigator = createStackNavigator({

  Connexion: { 
    screen: Connexion, 
    navigationOptions: {
      title: '',
      headerTransparent: true,
      headerStyle: {
        
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
  Home: { 
    screen: Home, 
    navigationOptions: {
      title: 'Home',
      headerTransparent: true,
      headerStyle: {
        
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }, 

  AppPhoto: { 
    screen: AppPhoto, 
    navigationOptions: {
      title: 'AppPhoto',
      headerTransparent: true,
      headerStyle: {
        
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  Stock: { 
    screen: Stock, 
    navigationOptions: {
      title: 'Gestion du stock',
      headerTransparent: true,
      headerStyle: {
        color: 'black'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
 
  ProduitDetail: { 
    screen: ProduitDetail, 
    navigationOptions: {
      title: '',
      headerTransparent: true,
      headerStyle: {
        
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

})

export default createAppContainer(SearchStackNavigator)