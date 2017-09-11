'use strict';

import React from 'react';
let { View, StyleSheet, Text, Switch, TouchableOpacity} = require('react-native');

import {Field} from './Field';

export class CircularSwitchRadioComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value,
    }
  }
  handleLayoutChange(e){
    let {x, y, width, height} = {... e.nativeEvent.layout};

    this.setState(e.nativeEvent.layout);
    //e.nativeEvent.layout: {x, y, width, height}}}.
  }
  setValue(value){
    this.setState({value:value});
    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }

  handleValueChange(value){
    // debugger;
    this.setState({value:value});
    if(this.props.onChange)      this.props.onChange(value);
    if(this.props.onValueChange) this.props.onValueChange(value);
  }

  toggleValue(){
    this.handleValueChange(!this.state.value);
  }

  render(){

    return(<Field {...this.props}>
        <View>
          <View style={[formStyles.container, this.props.containerStyle]} onLayout={this.handleLayoutChange.bind(this)}>


            <TouchableOpacity onPress={this.toggleValue.bind(this)} style={formStyles.circleBorder}>
              {this.state.value && <View style={formStyles.circleBody}></View>}
            </TouchableOpacity>

            <TouchableOpacity onPress={this.toggleValue.bind(this)} style={formStyles.labelContainer}>
              <Text lineBreakMode="tail" numberOfLines={2} style={[formStyles.label, this.props.labelStyle]}>{this.props.label[0]}</Text>
            </TouchableOpacity>

          </View>
          <Text style={[formStyles.circularSwitchHint, this.props.labelHintStyles]}>{this.props.labelHint[0]}</Text>

          <View style={[formStyles.container, this.props.containerStyle]} onLayout={this.handleLayoutChange.bind(this)}>
            <TouchableOpacity onPress={this.toggleValue.bind(this)} style={formStyles.circleBorder}>
              {!this.state.value && <View style={formStyles.circleBody}></View>}
            </TouchableOpacity>

            <TouchableOpacity onPress={this.toggleValue.bind(this)} style={formStyles.labelContainer}>
              <Text lineBreakMode="tail" numberOfLines={2} style={[formStyles.label, this.props.labelStyle]}>{this.props.label[1]}</Text>
            </TouchableOpacity>

          </View>
          <Text style={[formStyles.circularSwitchHint, this.props.labelHintStyles]}>{this.props.labelHint[1]}</Text>
        </View>

      </Field>
    )
  }

}

CircularSwitchRadioComponent.propTypes = {
  labelStyle: Text.propTypes.style,
  containerStyle: View.propTypes.style,
  switchStyle: Switch.propTypes.style
}


let formStyles = StyleSheet.create({
  form:{

  },
  labelContainer:{
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15
  },
  circleBody:{
    width: 20,
    height: 20,
    borderRadius: 32,
    backgroundColor: '#fff'
  },
  circleBorder:{
    width: 24,
    height: 24,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  label:{
    paddingRight: 20
  },
  noBorder:{
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  separatorContainer:{
    // borderTopColor: '#C8C7CC',
    // borderTopWidth: 1,
    paddingTop: 35,
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,

  },
  separator:{

    paddingLeft: 10,
    paddingRight: 10,
    color: '#6D6D72',
    paddingBottom: 7

  },
  fieldsWrapper:{
    // borderTopColor: '#afafaf',
    // borderTopWidth: 1,
  },
  horizontalContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  fieldContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 45
  },
  fieldText:{
    fontSize: 34/2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    lineHeight: 32
  },
  input:{
    paddingLeft: 10,
    paddingRight: 10,

  },
  helpTextContainer:{
    marginTop:9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,

  },
  helpText:{
    color: '#7a7a7a'
  },
  circularSwitchHint: {
    color: '#fffa',
    marginLeft: 35,
    marginTop: -10,
    marginBottom: 10,
    textAlign: 'left'
  },
});
