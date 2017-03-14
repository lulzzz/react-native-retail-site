import React, { Component } from 'react';
import MainLayout from './src/components/layouts/MainLayout';
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';


class RetailSite extends Component {
  render() {
    return (
      <MainLayout />
    );
  }
}

AppRegistry.registerComponent('RetailSite', () => RetailSite);

export default RetailSite;
