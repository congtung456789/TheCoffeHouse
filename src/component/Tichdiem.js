import React from 'react'
import { View,SafeAreaView,Image,ImageBackground,ScrollView,StyleSheet,TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Mua 4 tặng 2, Mua 8 tặng 4',
        img: require('../img/ticket/tk1.jpg'),
        title1:'Hạn sử dụng',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        title: 'Deal độc quyền, ưu đãi 40%',
        img: require('../img/ticket/tk1.jpg'),
        title1:'Hạn sử dụng',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f88',
        title: 'Dông giá 29K, MẠI ZO, MẠI ZO',
        img: require('../img/ticket/tk1.jpg'),
        title1:'Hạn sử dụng',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        title: 'giảm ngay 30K,khi đặt qua APP',
        img: require('../img/ticket/tk1.jpg'),
        title1:'Hạn sử dụng',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
        title: 'Second Item',
        img: require('../img/ticket/tk1.jpg'),
        title1:'Hạn sử dụng',
    },
    
  ];

const Tichdiem = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.sanpham}>
          <View style={styles.img}>
             <Image
           source={item.img}
           style={{width:'100%',height:'100%',borderRadius:10}}
          />
          </View>
          <View  style={{flex:2,marginVertical:10,marginHorizontal:15}}>
            <Text numberOfLines={2} style={styles.text1}>{item.title}</Text> 
            <Text numberOfLines={1} style={styles.textsp} >{item.title1}</Text>
          </View>
        </TouchableOpacity>
        );
      return (
          <ScrollView>
              <SafeAreaView style={{backgroundColor:'#F0F0F0'}}>
                <View style={styles.dau}>
                  <View style={{position:'absolute',width:'90%',color:'white',zIndex:2,marginHorizontal:20,marginVertical:5,marginVertical:10}}>
                    <Text style={{marginVertical:5,color:'white', fontSize:20}}>Tên của bạn</Text>
                    <Text style={{color:'white', fontSize:16}}>0 BEAN . Mới</Text>
                    <View style={{width:'100%', backgroundColor:'white', height:80,borderRadius:10,marginTop:50}}></View>
                  </View>
                <Image 
                  source={require('../img/cafe.jpg')}  
                  style={{width:'100%',flex:3,justifyContent:'center',borderRadius:20,zIndex:1}}
                  /> 
                  <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                  <Text >Còn 100 BEAN nữa bạn sẽ thăng hạng</Text>
                  <Text >Đổi quà không ảnh hưởng tới việc thăng</Text>
                  <Text >của bạn</Text>
                  <Text >Chưa tích điểm</Text>
                  </View>
                </View>
                <View style={{marginHorizontal:8,marginVertical:10}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.tap} >
                          <Icon name="gift-outline" size={25} color="#FDBC25" style={styles.tapicon} /> 
                          <Text style={styles.taptxt}>Đổi ưu đãi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tap}>
                          <Icon name="ticket-confirmation-outline" size={25} color="#FDBC25" style={styles.tapicon} /> 
                          <Text style={styles.taptxt}>Voucher của bạn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.tap}>
                          <Icon name="clipboard-list-outline" size={25} color="#FDBC25" style={styles.tapicon} />
                          <Text style={styles.taptxt}>Lịch sử BEAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tap}>
                          <Icon name="cannabis" size={25} color="blue" style={styles.tapicon} />
                          <Text style={styles.taptxt}>Quyền lợi của bạn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                        numColumns={1}
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
  const styles = StyleSheet.create({
      taptxt:{
        marginHorizontal:10,
        marginVertical:5,
        fontSize:18,
        fontWeight:'bold',
        color:'#0a0709',
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
          flexDirection:'row',
          marginHorizontal:8,
          marginVertical:10,
          backgroundColor:'#F0F0D0',
          borderRadius:10,
          height:160,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
      },
      img:{
          justifyContent:'center',
          alignItems:'center',
          flex:1,
          height:100,
          marginHorizontal:15,
          marginVertical:15,
      },
      text1: {
          ...text1,
          marginVertical:10
        },
      textsp:{
          ...text1,
          marginVertical:10
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
export default Tichdiem
