import React from 'react'
import { View,SafeAreaView,Image,Dimensions,ScrollView,StyleSheet,TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const DATA = [
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Miễn phí 01 Hồng trà sữa trân châu cỡ vừa',
        price:599,
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        img1: require('../img/thuonghieu.png'),
        title1:'BEAN',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        title:'Miễn phí 01 Hồng trà sữa trân châu cỡ vừa',
        price:599,
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        img1: require('../img/thuonghieu.png'),
        title1:'BEAN',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f88',
        price:599,
        title: 'Dông giá 29K, MẠI ZO, MẠI ZO',
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        img1:require('../img/thuonghieu.png'),
        title1:'BEAN',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        price:599,
        title: 'giảm ngay 30K,khi đặt qua APP',
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        img1:require('../img/thuonghieu.png'),
        title1:'BEAN',
    },
  ];
const Uudai = () => {
    // const {width,height} = Dimensions.get('window')
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.sanpham}>
          <View style={styles.img}>
            <Image
                source={item.img}
                style={{width:'100%',height:'100%',borderRadius:10}}
            />
          </View>
      
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.img1}>
              <Image
                  source={item.img1}
                  style={{width:'100%',height:'100%',borderRadius:10}}
              />
            </View>
            <View  style={{flex:1, alignItems:'center'}}>
              <Text numberOfLines={2} style={styles.text1}>{item.title}</Text>
              <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#dceed8',borderRadius:50,width:80}}>
                    <Text style={styles.txtprice}>{item.price}</Text>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.text1} >{item.title1}</Text>
            </View>
          </View>
          
        </TouchableOpacity>
        );
    return (
        <ScrollView>
        <SafeAreaView style={{backgroundColor:'#F0F0F0'}}>
            <View >
                <View style={{flexDirection:'row',marginHorizontal:16,marginVertical:16}}>
                  <Text style={styles.titlecf}>Phiếu ưu đãi của bạn</Text>
                  <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:50}}>
                    <Text style={styles.taptxt}> Xem tất cả</Text>
                  </TouchableOpacity>
                </View>
                
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal
                  style={{marginHorizontal:10}}
                /> 
            </View>
            
        </SafeAreaView>
    </ScrollView>
    )
}
const text1 = {
    color: '#222222',
    fontSize:20,
}
const taptxt={
    marginHorizontal:10,
    marginVertical:5,
    fontSize:18,
    fontWeight:'bold',
    color:'#4dcd44',
}
const styles = StyleSheet.create({
   txtprice:{
    ...taptxt,
   },
   taptxt:{
    ...taptxt,
    color:'black',
   },
   tapicon:{
     marginHorizontal:10,
     marginVertical:5,
   },
   tap:{
     marginHorizontal:8,
     marginVertical:5,
     width:'46%',
     height:80,
     backgroundColor:'white',
     borderRadius:10,
   },
   titlecf:{
       flex:2,
       color: '#222222',
       fontSize:20,
       marginTop:10,
       fontWeight:'bold',
       alignItems:'center',
       justifyContent:'center',
   },
   sanpham:{
       marginHorizontal:6,
       marginVertical:10,
       backgroundColor:'#F0F0D0',
       borderRadius:10,
       height:400,
       width:200,
       backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center',
   },
   img:{
       justifyContent:'center',
       alignItems:'center',
       flex:1,
       width:'100%'
   },
   img1:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
      height:40,
      width:40
   },
   text1: {
       ...text1,
       marginVertical:5,
       textAlign:'center',
       marginHorizontal:10,
     },
   dau:{
     width:'92%',
     height:400,
     backgroundColor:'white',
     borderRadius:20,
     marginHorizontal:16,
     marginVertical:10
   },
})

export default Uudai;
