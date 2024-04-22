import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppColors} from '../themes/AppColors';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={{width: 360, height: 360}}
        source={require('../assets/images/main.png')}
      />
      <Text
        style={{
          color: AppColors.primary,
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 25,
        }}>
        40K + Recipes
      </Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: '500',
          color: AppColors.gray,
          marginTop: 44,
        }}>
        Cook Like A Chef
      </Text>
      <TouchableOpacity
      onPress={ () => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: AppColors.primary,
          paddingVertical: 20,
          width: '70%',
          alignItems: 'center',
          borderRadius: 30,
          marginTop: 40,
        }}>
        <Text
          style={{
            color: AppColors.secondary,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Let's Go!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
