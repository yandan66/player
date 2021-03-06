import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar, NativeModules, Platform } from 'react-native'
import { font, color, layout } from '../../styles'
import Input from '../../components/Input'
import Icon from '../Icon'

const { StatusBarManager } = NativeModules
const version = Platform.Version
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
let SEARCHBAR_TOP = version >= 21 ? STATUSBAR_HEIGHT : 0

export default class NavSearchHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { style, navigation, ...other } = this.props
    return (
      <View style={styles.navHeader}>
        <View style={styles.nav}>
          <View style={styles.main}>
            <TouchableOpacity
              activeOpacity={1}
              focusedOpacity={1}
              onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-left" iconStyle={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.headerInput}>
              <Input style={styles.input} searchIcon ={true}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const GAPMAIN = layout.paddingHorizontal / 2

const styles = StyleSheet.create({
  navHeader: {
    position: 'relative',
    paddingTop: SEARCHBAR_TOP,
    backgroundColor: '#eee'
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.Version >= 21 ? layout.paddingVertical / 2 : layout.paddingVertical,
    paddingBottom: layout.paddingVertical,
    paddingHorizontal: layout.paddingHorizontal,
  },

  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backIcon: {
    color: color.blackDisabled,
    fontSize: font.nr,
  },

  headerInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: GAPMAIN,
    borderWidth: 1,
    borderColor: color.colorDivid,
    backgroundColor: color.white,
    borderRadius: 2
  },

  inputIcon: {
    marginLeft: 8,
    marginRight: 4
    // borderWidth: 1
  },

  input: {
    fontSize: font.sm
  },

  searchWrapper: {
    // width: 24,
    // height: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderRadius: 12,
    borderColor: color.blackDisabled
  },

  searchIcon: {
    color: color.blackDisabled,
    fontSize: font.sm
  }

})