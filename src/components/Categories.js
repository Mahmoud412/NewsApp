import {View, Text, ScrollView , StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation()
  const categories = [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology',
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
    {
        categories.map((category,index)=>(
          <TouchableOpacity key={index} onPress={()=>navigation.navigate('GetNews',category)}>
            <View style={styles.container} >
            <Text style={styles.text}>{category}</Text>
            </View>
            </TouchableOpacity>
        ))
    }
    </ScrollView>
  );
};



const styles = StyleSheet.create({


    container:{
        margin:10
    },

    text:{
        fontWeight:'300',
        fontSize:16,
        borderRadius:10,
        borderWidth:1,
        padding:10,
        borderColor:'white',
        color:'white'
    }
})
export default Categories;
