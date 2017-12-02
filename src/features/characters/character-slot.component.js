import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default class CharacterSlot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { character, onClick } = this.props

    return (
      <TouchableNativeFeedback onPress={onClick}>
        <View style={styles.item}>
          <Text>{character.name}</Text>
          <Text>{character.realm}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    width: '100%',
    height: 80,
    // marginRight: '2%',
    // marginBottom: '2%',
  }
})