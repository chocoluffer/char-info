import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Initialize extends Component {
  constructor(props) {
    super(props)
  }

	_fetchCharacterList = () => {
		const path = 'wow/user/characters?access_token=2upj77th2f5hun8g4nvw228n';
	}

	render() {    
		return (
			<View style={styles.container}>
				<ActivityIndicator
		          display={isFetching ? 'flex' : 'none'}
		          size={100}
		          style={styles.spinner}
		          color={"blue"}
		        />
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
})

export const InitializeContainer = connect()(Initialize)