import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'

class LeftTabNavigation extends Component {
  constructor(props) {
    super(props)
  }

  _renderTabs() {
    const navigationData = [
       {
         "path": '',
         "imagePath": '',
         "title": ''
       },
       {
         "path": '',
         "imagePath": '',
         "title": ''
       }
    ];
    return navigationData.map((object, index) => {
      return (
        <TouchableNativeFeedback key={index} onPress={() => this.props.navigationEvent(object.path)}>
          <View style={styles.leftButton}>
            <Image source={require('./../shared/icon-placeholder.png')} style={styles.iconSize}/>
            <Text style={styles.navText}>{object.title}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    })
  }

  render() {    
    return (
      <View style={styles.container}>
        {this._renderTabs()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    // width: 100,
    height: 100,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 0.5,
    borderColor: 'grey'
  },
  navText: {
    fontSize: 11,
    textAlign: 'center',
  },
  iconSize: {
    width: 65,
    // width: '90%',
    height: 65,
  }
})

export const LeftTabNavigationContainer = connect()(LeftTabNavigation)