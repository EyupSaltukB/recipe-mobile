import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BellIcon } from "react-native-heroicons/solid";
import { AppColors } from '../themes/AppColors';

const Header = ({headerText}) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Text style={{flex : 1, fontSize  : 22, fontWeight : "700"}}>{headerText}</Text>
      <BellIcon color={AppColors.primary} size={30}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})