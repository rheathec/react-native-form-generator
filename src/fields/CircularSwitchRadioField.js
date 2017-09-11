'use strict';

import React from 'react';
let { View, StyleSheet, Text, Switch} = require('react-native');

import {CircularSwitchRadioComponent} from '../lib/CircularSwitchRadioComponent';

export class CircularSwitchRadioField extends React.Component{
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  render(){

    return(<CircularSwitchRadioComponent
        {...this.props}
        ref='fieldComponent'
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
