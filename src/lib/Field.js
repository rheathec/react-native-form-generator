'use strict';

import React from 'react';
import {HelpText} from './HelpText';
let { View, StyleSheet, Text, TouchableHighlight} = require('react-native');

export class Field extends React.Component{
  render(){
    let fieldHelpText =
      this.props.helpTextComponent
      || ((this.props.helpText)
          ? <HelpText helpLeftIcon={this.props.helpLeftIcon} text={this.props.helpText} helpTextContainerStyle={this.props.helpTextContainerStyle} helpTextStyle={this.props.helpTextStyle}/>
          : null);

    if(this.props.onPress){
      return <TouchableHighlight underlayColor={this.props.underlayColor} onPress={this.props.onPress}>
        <View>
          {this.props.children}
          {fieldHelpText}
        </View>
      </TouchableHighlight>
    }
    return   <View>
      {this.props.children}
      {fieldHelpText}
    </View>;


  }
}
Field.propTypes = {
  helpTextComponent: React.PropTypes.element,
  helpText: React.PropTypes.string,
  underlayColor: React.PropTypes.string,
}

Field.defaultProps = {
  underlayColor: '#fff0',
}


let formStyles = StyleSheet.create({

  helpTextContainer:{
    marginTop:9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,

  },
  helpText:{
    color: '#7a7a7a'
  }
});
