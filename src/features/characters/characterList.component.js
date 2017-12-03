import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableNativeFeedback, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CoreActions from './../../actions/core.actions'
import _handleApi from './../../util/ApiHandler'

import CharacterSlot from './character-slot.component'
import CharacterReport from './character-report.component'

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
		const { displaySpecific } = this.props
		displaySpecific(character)
		console.log(character)
	}

	_test2 = () => {
		console.log('wheeee')
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
		const { fullList, activeList, isFetching, displaySpecific } = this.props;
		
		// let holder = { "name": "placeholder", "realm": "placeholder" };

		return (
			<View style={styles.container}>
				<Text>Low level toons may not be listed.{"\n"}If you would like to add them to visibility, provide their name and server.</Text>
				<ActivityIndicator
		        	display={isFetching ? 'flex' : 'none'}
		          	size={100}
		          	style={styles.spinner}
		          	color={"orange"}
		        /> 
				<FlatList 
		          	data={activeList}
		          	keyExtractor={(item, index) => index}
		          	renderItem={this._renderToon.bind(this)}
		          	style={styles.list}
		        />
			</View>
		);
	}
}

 // <View display={displaySpecific.flag ? 'flex' : 'none'}>

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
    // paddingTop: '2%',
    paddingHorizontal: '2%',
    // backgroundColor: '#9ea2a2'
  },
  item: {
  	width: '100%',
  	height: 40,
  }
});

