'use strict';

import React from 'react';
let { View, StyleSheet, Text, Switch} = require('react-native');

import {GraphicalSwitchComponent} from '../lib/GraphicalSwitchComponent';

export class GraphicalSwitchField extends React.Component{
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  render(){

    return(<GraphicalSwitchComponent
      {...this.props}
      ref='graphicalFieldComponent'
      containerStyle={[
        formStyles.fieldContainer,
        formStyles.verticalContainer,
        this.props.containerStyle
      ]}

      labelStyle = {[
        formStyles.fieldText,
        this.props.labelStyle
      ]}
      switchStyle={[
        {marginTop: 7, position:'absolute', right: 10},
        this.props.switchStyle
      ]}
      />

    )
  }

}



  let formStyles = StyleSheet.create({
    fieldContainer:{
      justifyContent: 'center',
      height: 160,
    },
    verticalContainer:{
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },

  });
