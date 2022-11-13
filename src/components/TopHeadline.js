import {View, Text, ScrollView, ActivityIndicator, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Categories from './Categories';

const TopHeadline = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const getNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=389c3dcdddda4256b23ee60a0a896607',
      );
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <View>
    <Categories/>
      {data.length === 0 ? <ActivityIndicator color='black'/> : 
      <ScrollView >
      {data.map((news , index)=>(
        <View style={styles.container} key={index}>
          <Image  style={styles.image} source={{uri:`${news.urlToImage}`}}/>
          <Text style={styles.title}>{news.title}</Text>
        </View>
      ))}
      </ScrollView>
    }
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
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
    fontWeight:'bold'
  }
})
export default TopHeadline;
