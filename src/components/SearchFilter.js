import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColors} from '../themes/AppColors';
import {MagnifyingGlassCircleIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid';

const SearchFilter = ({icon, placeholder}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.secondary,
        flexDirection: 'row',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 15,
        shadowColor: AppColors.black,
        shadowOffset: {width: 0.2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}>
      <MagnifyingGlassIcon size={25} color={AppColors.primary}/>
      <TextInput style={{paddingLeft : 8, fontSize  : 15, color: AppColors.gray}}>{placeholder}</TextInput>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
