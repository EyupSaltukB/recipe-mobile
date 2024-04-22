import {FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {recipeList} from '../utils/constants';
import {AppColors} from '../themes/AppColors';
import {StarIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
    const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({item}) => (
          <Pressable
          onPress={() => navigation.navigate("RecipeDetail", {item : item})}
            style={{
              backgroundColor: AppColors.secondary,
              shadowColor: AppColors.black,
              shadowOffset: {width: 0.2, height: 4},
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 15,
              marginVertical: 10,
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Image source={item.image} style={{width: 150, height: 90}} />
            <Text style={{marginTop: 10 , fontWeight : "bold"}}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{flexDirection: 'row'}}>
                <StarIcon size={17} color={AppColors.star} />
                <Text> {item.rating}</Text>
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
