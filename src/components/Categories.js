import {View, Text, ScrollView , StyleSheet} from 'react-native';
import React from 'react';

const Categories = () => {
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
            <View style={styles.container} key={index}>
            <Text style={styles.text}>{category}</Text>
            </View>
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
        borderColor:'black'
    }
})
export default Categories;
