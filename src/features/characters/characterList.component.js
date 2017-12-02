import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableNativeFeedback, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CoreActions from './../../actions/core.actions'
import _handleApi from './../../util/ApiHandler'

import CharacterSlot from './character-slot.component'

export default class CharacterList extends Component {
	constructor(props) {
    	super(props)
  	}

  	componentDidMount() {
  		const { invalidateCore, fetchCore } = this.props
  		invalidateCore()
  		fetchCore()
  	}

	_test = (character) => {
		console.log('toon touched')
	}

	_renderToon({item}) {
		return (
			<CharacterSlot
				character={item}
				onClick={() => this._test(item)}
			/>
		)
	}

	render() {
		const { coreList, isFetching } = this.props

		return (
			<View style={styles.container}>
				<Text>Testing</Text>
				<ActivityIndicator
		        	display={isFetching ? 'flex' : 'none'}
		          	size={100}
		          	style={styles.spinner}
		          	color={"orange"}
		        />
				<FlatList 
		          	data={coreList}
		          	keyExtractor={(item, index) => index}
		          	renderItem={this._renderToon.bind(this)}
		        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
  	width: '100%',
    paddingTop: '2%',
    paddingHorizontal: '2%',
    backgroundColor: '#9ea2a2'
  },
  item: {
  	width: '100%',
  	height: 40,
  }
});

