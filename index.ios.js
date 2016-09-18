/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Landing from './application/components/Landing';
import Dashboard from './application/components/Dashboard';
import { globals } from './application/styles';


class assemblies extends Component {
  render() {
    return (
        <Navigator
            style={globals.flex}
            initialRoute={{name: 'Landing'}}
            renderScene={(route, navigator) => {
                switch (route.name) {
                    case 'Landing':
                        return (
                            <Landing navigator={navigator}/>
                        );
                    case 'Dashboard':
                        return (
                            <Dashboard navigator={navigator}/>
                        );
                }
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('assemblies', () => assemblies);
