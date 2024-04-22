import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {categories} from '../utils/constants';
import {AppColors} from '../themes/AppColors';

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View key={index}
              style={{
                backgroundColor: index === 0 ? AppColors.primary : AppColors.secondary,
                marginRight: 35,
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 15,
                shadowColor: AppColors.black,
                shadowOffset: {width: 0.2, height: 4},
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical : 15
              }}>
              <Text style={{color : index === 0 && AppColors.secondary, fontWeight : "bold"}}>{category.category}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});