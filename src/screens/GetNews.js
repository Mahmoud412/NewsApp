import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {API_KEY} from '../config';
import {GET} from '../Services/API';
import styles from '../components/TopHeadlineStyles';
const GetNews = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const catgory = route.params;
  const [data, setData] = useState([]);
  navigation.setOptions({
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
    <>
      {data.length === 0 ? (
        <ActivityIndicator color="white" />
      ) : (
        <ScrollView style={styles.container}>
          {data.map((news, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Article', news.url)}>
              <View key={index}>
                <Image
                  style={styles.image}
                  source={{uri: `${news.urlToImage}`}}
                />
                <Text style={styles.title}>{news.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default GetNews;
