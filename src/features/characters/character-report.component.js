import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default class CharacterReport extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { character, onClick } = this.props

    return (
      <TouchableNativeFeedback onPress={onClick}>
        <View style={styles.item}>
          <Text>Character Information</Text>
          <Text>{character.name}</Text>
          <Text>{character.realm}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '1%'
    // marginRight: '2%',
    // marginBottom: '2%',
  }
})