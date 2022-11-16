import React from 'react'
import {WebView} from 'react-native-webview'
import { useRoute } from '@react-navigation/native'

const Web_View = () => {
  //dnaspmd;sad
   const route = useRoute()
    const url = route.params

  return (
    <WebView source={{uri:`${url}`}} />
  )
}

export default Web_View