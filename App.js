import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Judul from './components/judul';
import Login from './components/login';
import Footer from './components/footer';
import Biodata from './components/biodata';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Judul/>
        <Login/>
        <Button
            title="Login"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Footer/>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Biodata/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
