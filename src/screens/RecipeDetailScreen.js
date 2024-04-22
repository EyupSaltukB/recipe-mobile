import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {AppColors} from '../themes/AppColors';
import {ArrowLeftCircleIcon, HeartIcon} from 'react-native-heroicons/solid';

const RecipeDetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <View style={{backgroundColor: item.color, flex: 1}}>
      <SafeAreaView style={{flexDirection: 'row', marginHorizontal: 15}}>
        <Pressable style={{flex: 1}} onPress={() => navigation.goBack()}>
          <ArrowLeftCircleIcon size={40} color={AppColors.gray} />
        </Pressable>

        <HeartIcon size={40} color={AppColors.primary} />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: AppColors.secondary,
          flex: 1,
          marginTop: 200,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            /* backgroundColor : AppColors.primary,  */
            height: 300,
            width: 300,
            position: 'absolute',
            top: -150,
            borderRadius: 10,
          }}>
          <Image
            source={item.image}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>

        {/* Recipe Name */}
        <Text
          style={{
            color: AppColors.black,
            marginTop: 150,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>

        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* desc */}
            <Text
              style={{
                fontSize: 20,
                color: AppColors.gray,
                marginVertical: 15,
                fontStyle: 'italic',
              }}>
              {item.description}...
            </Text>

            {/* details */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 0,0,0.38)',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 40}}>⏰</Text>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(135, 236,235,0.8)',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 40}}>🍽️</Text>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255, 165,0,0.58)',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 40}}>🔥</Text>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* ingredients */}
            <View style={{alignSelf: 'flex-start', marginVertical: 22}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 5}}>
                Ingredients:
              </Text>
              {
              item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 3,
                    }}
                    key={index}>
                    <View
                      style={{
                        backgroundColor: AppColors.primary,
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}></View>
                    <Text style={{fontSize: 15, marginLeft: 5}}>
                      {ingredient}
                    </Text>
                  </View>
                )
              })}
            </View>

            {/* steps */}
            <View style={{alignSelf: 'flex-start', marginVertical: 22}}>
              <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 5}}>
                Steps:
              </Text>
              {
                item.steps.map((step, index) => {
                  return (
                    <Text key={index} style={{fontSize : 20, marginLeft : 5 , marginVertical : 5}}>{`${index + 1} ) ${step}...`}</Text>
                  )
                })
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});
