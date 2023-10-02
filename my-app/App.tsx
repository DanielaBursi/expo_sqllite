import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home/home.page'
import DatabaseInit from './src/database/db';

export default class home extends React.Component {

  constructor(props) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }


  render() {
    return (
      <Home />
    );
  }
}