import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API_KEY} from '../config';
import {GET} from '../Services/API';
const GetNews = () => {
  const navogation = useNavigation();
  const route = useRoute();
  const catgory = route.params;
  const [data, setData] = useState([]);
  navogation.setOptions({
    title: catgory,
  });
  useEffect(() => {
    const getNews = async () => {
      const response = await GET(
        `/top-headlines?country=us&category=${catgory}&apiKey=${API_KEY}`,
      );
      setData(response.articles);
    };
    getNews();
  }, []);
  return (
    <ScrollView>
      {data.map((news, index) => (
        <View key={index}>
          <Image style={styles.image} source={{uri: `${news.urlToImage}`}} />
          <Text style={styles.title}>{news.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 16,
  },
});
export default GetNews;
