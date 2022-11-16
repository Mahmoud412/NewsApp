import {View, Text, ScrollView, ActivityIndicator, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Categories from './Categories';
import {API_KEY} from '../config';
import { GET } from '../Services/API';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './TopHeadlineStyles';
import { useNavigation } from '@react-navigation/native';

const TopHeadline = () => {
  const navigation =useNavigation()
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
    <View style={styles.hederView}>
    <Text style={styles.text}>Top News</Text>
    <FontAwesome name={'trophy'} size={20} color='white'/>

    </View>
    <Categories/>
      {data.length === 0 ? <ActivityIndicator color='white'/> : 
      <ScrollView >
      {data.map((news , index)=>(
        <TouchableOpacity onPress={()=> navigation.navigate('Article',news.url)}>
        <View style={styles.subContainer} key={index}>
          <Image  style={styles.image} source={{uri:`${news.urlToImage}`}}/>
          <Text style={styles.title}>{news.title}</Text>
        </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    }
    </SafeAreaView>
  );
};



export default TopHeadline;
