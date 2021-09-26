import React, { useEffect, useState } from 'react'
import { View,SafeAreaView,Dimensions,Image,ScrollView,StyleSheet,TouchableOpacity, FlatList, Text, TextInput } from 'react-native';
import axios from 'axios';
import Modal from "react-native-modal";
import { getProductList } from '../api/Services';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from './Loading';
const {height,width} = Dimensions.get('window') 
const Dathang = () => {
  const dispatch = useDispatch();
  const [product,setProduct] = useState([])
  const [isVisible,setisVisible] = useState(false)
  const [isModal,setModal] = useState()
  const [clickheart,setclickheart] = useState(false)
  const [isloading,setLoading] = useState(false)
  
  // ===============
  const Close = ()=>{
    setisVisible(false)
  }
  //================
  useEffect(()=>{
    const callGetProductList = async () =>{
      try{
         setLoading(true)
         const response = await getProductList();
         console.log('rs', response.data.data)
         setProduct(response.data.data)
         setLoading(false)
      }
      catch(error){
        console.error(error);
      }
    }
    callGetProductList()
  },[])
  //=================
  const onAdd =(item)=>()=>{
    setisVisible(true)
    setModal(item)
    console.log(isModal);
  }
  // ================
  const onAddToCart = (item) =>()=>{
    dispatch({type: 'ADD_CART', data: {...item, quantity: 1}})
  }
    const renderItem = ({ item }) => (
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.sanpham} onPress={onAdd(item) }>
          <View  style={{flex:2,marginVertical:10,marginHorizontal:15}}>
            <Text numberOfLines={1} style={styles.text1}>{item.product_name}</Text> 
            <Text numberOfLines={2} style={styles.textsp} >{item.description}</Text>
            <Text style={{marginVertical:10}}>{item.price}đ</Text>
          </View>
          <View style={styles.img}>
             <Image
           source={{ uri: item.high_res_image }}
           style={{width:'100%',height:'100%',borderRadius:10}}
          />
          </View>
        </TouchableOpacity>
      </View>
   
      );
      // let arr = [1,2,3,4]
      //   {/* <View>
      //     <Text>aaaaa</Text>
      //     {arr.map(e => <Text>{e}</Text>)}
      //   </View> */}
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1}}>
          { isloading && <Loading/>}
          {/* <Loading/> */}
                <View style={{flex:1}}>
                  <Text style={styles.titlecf}>Trà trái cây - Trà sữa</Text>
                  <FlatList
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={item => item._id?.toString()}
                    numColumns={1}
                  /> 
                  
                </View>
               
              <Modal
              
                testID={'modal'}
                isVisible={isVisible}
                onSwipeComplete={Close}
                swipeDirection={['up', 'left', 'right', 'down']}
                style={{margin:0,justifyContent: 'flex-end',}}>
                <ScrollView style={{flex:1,height:height,marginTop:50,bottom:0}}>
                  <View style={styles.modalsp} >
                     <View style={styles.modalimg}>
                      <Image
                        resizeMode='stretch'
                        source={{ uri: isModal?.high_res_image }}
                        style={{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}
                      />
                    </View>
                    <View style={{flex:1,marginVertical:10,marginHorizontal:10}}>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.modaltxt}>{isModal?.product_name}</Text>
                        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={
                          ()=>{
                            setclickheart(!clickheart)
                          }
                        }>
                          <Icon name={ clickheart === false ? 'heart-outline' : 'heart' } size={30} color={clickheart === false ? 'black' : '#EC870E' } />
                        </TouchableOpacity> 
                      </View>
                      <Text style={styles.modalprice}>{isModal?.price}đ</Text>
                      <Text numberOfLines={3} style={styles.modaltextsp} >{isModal?.description}</Text>
                    </View>
                    <View style={{flex:1}}>
                      <View style={{marginHorizontal:10,marginVertical:10}}>
                        <Text style={styles.modalyeucau}>Yêu cầu khác </Text>
                        <Text style={styles.modaltextsp}>Những tùy chọn khác </Text>
                        <TextInput 
                        style={{borderWidth:1, borderColor:'gray',height:35,borderRadius:10}}
                        placeholder={'thêm ghi chú'}
                        />
                      </View>
                    </View>
                  </View>
                  </ScrollView>
                   <TouchableOpacity style={styles.nutx1} onPress={Close}>
                        <Icon name="close" size={20} color="white" />
                  </TouchableOpacity>
                  <View style={{position:'absolute',bottom:0, height:height-700,width:'100%', backgroundColor:'white',borderTopColor:'#aaa',borderTopWidth:1,flex:1}}>
                      <View style={{flex:1,justifyContent: 'center'}}>
                      <TouchableOpacity style={{width:width-20,height:50,justifyContent:'center',alignItems:'center',marginHorizontal:10,backgroundColor:'#EC870E',borderRadius:10}} onPress={onAddToCart(isModal)}>
                          <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Thêm sản phẩm</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
              </Modal>
            </ScrollView>     
          </SafeAreaView>      
           
    )
}
 
 const text1 = {
     color: '#222222',
     fontSize:16,
 }
const styles = StyleSheet.create({
 
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
        marginVertical:10,
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
        height:100,
        marginHorizontal:15,
    },
    text1: {
        ...text1,
        fontWeight:'bold',
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
      height:height,
      backgroundColor:'#F0F0D0',
      borderRadius:10,
      backgroundColor:'white',
      marginBottom:height-750,
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
  modalprice:{
    color:'#707070',
    fontSize:18,
    marginVertical:10,
  },
  modalyeucau:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
  },
  minplus:{
    width:35,
    height:35,
    backgroundColor:'#F0F0F0',
    justifyContent:'center',
    alignItems:'center',
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
headtxt:{
  fontSize:18,
  fontWeight:'bold',
},
txtthongbao:{
  fontSize:18,
  color:'#999999'
},
})

export default Dathang;
