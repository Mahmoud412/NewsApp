import { StyleSheet} from 'react-native'




const styles = StyleSheet.create({

    container:{
        backgroundColor:'black'
      },
      hederView:{
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
      },
      text:{
        color:'white',
        fontSize:18,
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


export default styles
