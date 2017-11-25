import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { View, Text, StyleSheet } from 'react-native'
import { InventoryActions, ProductsActions, RegisterActions } from './../../actions'

import { NavigationActions } from 'react-navigation'
import { LeftTabNavigation } from './..'
// import TabNavigation from './../../util/tabNavigation'

class MainNavigation extends Component {
  constructor(props) {
    super(props)
    this.navigationRouter = this.navigationRouter.bind(this)
  }

  componentDidMount() {
    // const { dispatch } = this.props
  }

  navigationRouter(path) {
    this.navigator && this.navigator.dispatch(
      NavigationActions.navigate({ routeName: path })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}><LeftTabNavigation navigationEvent={this.navigationRouter} /></View>
      </View>
    )
  }
}

// <View style={styles.main}><TabNavigation ref={nav => { this.navigator = nav; }} /></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  navigation: {
    flex: 2,
    borderRightWidth: 0.5,
    borderColor: 'black'
  },
  main: {
    flex: 15
  }
})

export const MainNavigationContainer = connect()(MainNavigation)