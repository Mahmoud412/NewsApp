import {View, Text, ScrollView, ActivityIndicator, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Categories from './Categories';
import {API_KEY} from '../config';
import { GET } from '../Services/API';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopHeadline = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const response = await GET(
        `/top-headlines?country=us&apiKey=${API_KEY}`,
      );
      setData(response.articles);
    };
    getNews();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <Categories/>
      {data.length === 0 ? <ActivityIndicator color='black'/> : 
      <ScrollView >
      {data.map((news , index)=>(
        <View style={styles.subContainer} key={index}>
          <Image  style={styles.image} source={{uri:`${news.urlToImage}`}}/>
          <Text style={styles.title}>{news.title}</Text>
        </View>
      ))}
      </ScrollView>
    }
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container:{
    backgroundColor:'black'
  },

  text:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    margin:5
  },
  subContainer:{
    margin:10,
  },
  image:{
    width:'100%' ,
     height:250,
     marginVertical:10,
     
  },
  title:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
})
export default TopHeadline;
