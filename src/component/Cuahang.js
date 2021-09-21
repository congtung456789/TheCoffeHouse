import React,{ useEffect, useState } from 'react'
import { View,Dimensions,SafeAreaView,TextInput,Image,ScrollView,StyleSheet,TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DiaDiem } from '../api/Services';
import Modal from "react-native-modal";
const {width,height} = Dimensions.get('window')
const Cuahang = () => {
  const [isModal,setModal] = useState()
  const [isVisible,setisVisible] = useState(false)
  const Close = () =>{
    setisVisible(false)
  }
  const onAdd =(item)=>()=>{
    setisVisible(true)
    // dispatch({type:'AddCart',data: item })
    setModal(item)
    console.log(isModal);
  }
    const [product,setProduct] = useState([])
    useEffect(()=>{
      const callGetProductList = async () =>{
        try{
           const response = await DiaDiem();
           console.log('rs', response.data)
           setProduct(response.data)
        }
        catch(error){
          console.error(error);
        }
      }
      callGetProductList()
  },[])
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.sanpham} onPress = {onAdd(item)} > 
        <View style={styles.img}>
           <Image
            source={{uri: item.image_1}}
            style={{width:'100%',height:'100%',borderRadius:10}}
          />
        </View>
        <View  style={{flex:2,marginVertical:5,marginHorizontal:5}}>
          <Text numberOfLines={1} style={styles.text1}>THE COFFEE HOUSE</Text> 
          <Text numberOfLines={2} style={styles.textsp} >{item.address.full_address}</Text>
          <Text style={styles.text2}>chưa xác định</Text>
        </View>
      </TouchableOpacity>
      );
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{marginHorizontal:0}}>
                <Text style={styles.titlecf}>Cà cửa hàng khác</Text>
                    <FlatList
                      data={product}
                      renderItem={renderItem}
                      keyExtractor={item => item.id?.toString()}
                      numColumns={1}
                    /> 
                </View>
                <Modal
                    testID={'modal'}
                    isVisible={isVisible}
                    onSwipeComplete={Close}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={{margin:0,justifyContent: 'flex-end',}}>
                      <ScrollView style={{flex:1,marginTop:50,height:height,bottom:0}}>
                      <View style={styles.modalsp} >
                         <View style={styles.modalimg}>
                          <Image
                            resizeMode='stretch'
                            source={{ uri: isModal?.image_1 }}
                            style={{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}
                          />

                        </View>
                        <View style={{flex:0.5,marginVertical:10,marginHorizontal:10,borderBottomWidth:1,borderBottomColor:'#F0F0F0'}}>
                          <Text numberOfLines={1} style={styles.text1}>THE COFFEE HOUSE</Text> 
                          <Text numberOfLines={1} style={styles.street}>{isModal?.street}</Text> 
                          <Text style={styles.modaltime}>Giờ mở cửa: {isModal?.opening_time} - {isModal?.closing_time}</Text>
                        </View>
                        <View style={{flex:1}}>
                          <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,height:70}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                              <View style={styles.modalicon}>
                                <Icon name={'telegram'} size={20} color="black" />
                              </View>
                            </View>
                            <View style={styles.modaladdress}>
                              <Text style={styles.modaltextsp}>{isModal?.address.full_address} </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,height:70}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                              <View style={styles.modalicon}>
                                <Icon name={'heart-outline'} size={20} color="black" />
                              </View>
                            </View>
                            <View style={styles.modaladdress}>
                              <Text style={styles.modaltextsp}>Thêm vào danh sách yêu thích </Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,height:70}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                              <View style={styles.modalicon}>
                                <Icon name={'phone'} size={20} color="black" />
                              </View>
                            </View>
                            <View style={styles.modaladdress}>
                              <Text style={styles.modaltextsp}>Liên hệ</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,height:70}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                              <View style={styles.modalicon}>
                                <Icon name={'share-outline'} size={20} color="black" />
                              </View>
                            </View>
                            <View style={styles.modaladdress}>
                              <Text style={styles.modaltextsp}>Chia sẻ với bạn bè </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                      </ScrollView>
                       <TouchableOpacity style={styles.nutx1} onPress={Close}>
                            <Icon name="close" size={20} color="white" />
                      </TouchableOpacity>
                      <View style={{position:'absolute',bottom:0, height:height-700,width:'100%',flex:1}}>
                          <View style={{flex:1}}>
                          <TouchableOpacity style={styles.oder}>
                              <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Đặt sản phẩm</Text>
                              <Text style={{fontSize:16,color:'white'}}>Tự đến lấy tại cửa hàng này</Text>
                            </TouchableOpacity>
                          </View>
                      </View>
                  </Modal>
            </SafeAreaView>
        </ScrollView>
    )
}
const text1 = {
     color: 'black',
     fontSize:20,
     
 }
const styles = StyleSheet.create({
  modalicon:{
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
    backgroundColor:'#F0F0F0',
    borderRadius:10,
  },
  modaladdress:{
    flex:5,
    justifyContent:'center',
    marginHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#F0F0F0',
  },
  oder:{
    width:width-20,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    backgroundColor:'#EC870E',
    borderRadius:10
  },
    street:{
      fontSize:20,
      fontWeight:'bold',
    },
    titlecf:{
        color: '#222222',
        fontSize:20,
        marginHorizontal:8,
        marginTop:10,
        fontWeight:'bold'
    },
    sanpham:{
        flexDirection:'row',
        marginHorizontal:8,
        marginVertical:5,
        backgroundColor:'#F0F0D0',
        borderRadius:10,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    img:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        // width:90,
        height:100,
        marginHorizontal:15,
    },
    text1: {
        color: '#A0A0A0',
        fontSize:12,
        fontWeight:'bold',
        marginVertical:5,
        
      },
    text2: {
        color: '#A0A0A0',
        fontSize:14,
        // fontWeight:'bold',
        marginVertical:10,
      },
    textsp:{
        ...text1,
    },
    modaltxt:{
      flex:2,
      fontSize:24,
      fontWeight:'bold',
    },
    modalsp:{
      flex:1,
      height:1000,
      backgroundColor:'#F0F0D0',
      borderRadius:10,
      backgroundColor:'white',
      paddingBottom:300
      
    },
    modalimg:{
      flex:2,
      width:'100%',
  },
  modaltextsp:{
    color:'black',
    fontSize:18,
    marginVertical:10
  },
  modaltime:{
    color:'#707070',
    fontSize:16,
    marginVertical:5,
  },
  modalyeucau:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
  },
  minplus:{
    flex:1,
    // width:35,
    // height:35,
    backgroundColor:'#F0F0F0',
    // justifyContent:'center',
    // alignItems:'center',
    borderRadius:10,
  },
  nutx1:{
    position:'absolute',
    top:60, 
    right:10,
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#555555',
    borderRadius:50,
    
},
})

export default Cuahang
