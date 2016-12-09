'use strict';

import React from 'react';
let { View, StyleSheet, Text, Switch} = require('react-native');

import {CircularSwitchComponent} from '../lib/CircularSwitchComponent';

export class CircularSwitchField extends React.Component{
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  render(){

    return(<CircularSwitchComponent
        {...this.props}
        ref='circularSwitchFieldComponent'
        containerStyle={[
          this.props.containerStyle
        ]}

        labelStyle = {[
          this.props.labelStyle
        ]}
      />

    )
  }
}
