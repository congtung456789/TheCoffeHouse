import React, {useState,useEffect} from 'react'
import { View,SafeAreaView,Image,ScrollView,StyleSheet,TouchableOpacity, FlatList, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from './Swiper';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Giảm 50% cho 2 ly nước với mã LACQUAN ',
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        date:'18/08',
    },  
    { 
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Giam 20% khi thanh toán qua Airpay',
        img: require('../img/khuyenmai/khuyenmai3.jpg'),
        date:'18/08',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        title: '7 ngày FREE size',
        img: require('../img/khuyenmai/khuyenmai4.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        title: 'Nhâp mã \' TETSAPVE \'  nhận ngay ưu đãi',
        img: require('../img/khuyenmai/khuyenmai5.jpg'),
        date:'18/08',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        title: 'Thưởng trà ngóng lương, đồng giá 40K ',
        img: require('../img/khuyenmai/khuyenmai6.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Mua 4 tặng 2, Mua 8 tặng 4',
        img: require('../img/khuyenmai/khuyenmai7.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        title: 'Deal độc quyền, ưu đãi 40%',
        img: require('../img/khuyenmai/khuyenmai8.jpeg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f88',
        title: 'Dông giá 29K, MẠI ZO, MẠI ZO',
        img: require('../img/khuyenmai/khuyenmai9.png'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        title: 'giảm ngay 30K,khi đặt qua APP',
        img: require('../img/khuyenmai/khuyenmai10.png'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
        title: 'Second Item',
        img: require('../img/khuyenmai/khuyenmai2.jpg'),
        date:'18/08',
    },
    
  ];
  const DATA1 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch1.jpg'),
      title:'43 Hoa Hồng, Quận Phú Nhuận, Hồ Chí Minh, Việt Nam',
      price:'Chưa xác định'

  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch3.jpg'),
      title:'281 Lê Văn Sỹ, Quận Tân Bình, Hồ Chí Minh, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch4.jpg'),
      title:'17 Út Tịch, Quận Tân Bình, Hồ Chí Minh, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch5.jpg'),
      title:'23M Hai Bà Trưng, Hoàn Kiếm, Hà Nội, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch6.jpg'),
      title:'122 Bùi Thị Xuận, Hai Bà Trưng, Hà Nội, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch7.jpg'),
      title:'197 Xô Viết Nghệ TĨnh, Quân Bình Thạnh, Hồ Chí Minh, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch8.jpg'),
      title:'572 Ba Tháng Hai, Quân 10, Hồ Chí Minh, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f88',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch9.jpg'),
      title:'68A Hoàng Cầu, Đống Đa, Hà Nội, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch10.jpg'),
      title:'458 Minh Khai,Hai Bà Trưng, Hà Nội, Việt Nam',
      price:'Chưa xác định'
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
      // title: 'THE COFFEE HOUSE ',
      img: require('../img/cuahang/ch2.jpg'),
      title:'160 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội, Việt Nam',
      price:'Chưa xác định'
  },
    
  ];
  const DATA2 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Giảm 50% cho 2 ly nước với mã LACQUAN ',
        img: require('../img/khuyenmai/khuyenmai1.jpg'),
        date:'18/08',
    },  
    { 
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Giam 20% khi thanh toán qua Airpay',
        img: require('../img/khuyenmai/khuyenmai3.jpg'),
        date:'18/08',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        title: '7 ngày FREE size',
        img: require('../img/khuyenmai/khuyenmai4.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        title: 'Nhâp mã \' TETSAPVE \'  nhận ngay ưu đãi',
        img: require('../img/khuyenmai/khuyenmai5.jpg'),
        date:'18/08',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        title: 'Thưởng trà ngóng lương, đồng giá 40K ',
        img: require('../img/khuyenmai/khuyenmai6.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Mua 4 tặng 2, Mua 8 tặng 4',
        img: require('../img/khuyenmai/khuyenmai7.jpg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
        title: 'Deal độc quyền, ưu đãi 40%',
        img: require('../img/khuyenmai/khuyenmai8.jpeg'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f88',
        title: 'Dông giá 29K, MẠI ZO, MẠI ZO',
        img: require('../img/khuyenmai/khuyenmai9.png'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        title: 'giảm ngay 30K,khi đặt qua APP',
        img: require('../img/khuyenmai/khuyenmai10.png'),
        date:'18/08',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
        title: 'Second Item',
        img: require('../img/khuyenmai/khuyenmai2.jpg'),
        date:'18/08',
    },
    
  ];

const Trangchu = () => {
  const [dulieu,setDulieu] = useState([]);
  const [isVisible,setisVisible] = useState(false)
   console.log(dulieu)
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{flex:1,marginHorizontal:8,marginVertical:10}}>
        <View style={{flex:1,width: 170,height: 170 }}>
           <Image
         source={item.img}
         style={{width:'100%',height:'100%',borderRadius:10}}
        />
        </View>
        <View  style={{flex:1,marginVertical:10}}>
          <Text style={styles.text1} numberOfLines={1}>{item.title}</Text> 
        </View>
        <View style={{flexDirection:'row'}}>
          <Icon name="date-range" size={20} color="#707070" /> 
          <Text style={{color:'#707070'}}> Đến {item.date}</Text>
        </View>
      </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
            <ScrollView style={[styles.container]}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.giaohang}>
                        <TouchableOpacity style={styles.icongiaohang}>
                          <Image
                               style={{resizeMode: 'center',width:'100%',height:60}} 
                               source={require('../img/ship.jpg')} 
                          />
                          <Text style={styles.title}>Giao hàng</Text>
                        </TouchableOpacity>
                        <View style={{width:0, height:80,borderWidth:0.5,borderColor:'#E0E0E0'}}></View>
                        <TouchableOpacity style={styles.icongiaohang}>
                            <Image
                                 style={{resizeMode: 'center',width:'100%',height:60}} 
                                 source={require('../img/mangdi.jpg')} 
                            />
                            <Text  style={styles.title}>Mang đi</Text>
                        </TouchableOpacity>
                    </View>
                    <Swiper/>
                    <View style={styles.khampha}>
                      <Text style={styles.text}>Khám phá thêm</Text>
                      <Icon1 name="star-four-points-outline" size={25} color="#FDBC25" /> 
                    </View>
                    <View style={{marginHorizontal:8,marginVertical:10}}>
                      <ScrollView horizontal={true} >
                        <TouchableOpacity  style={styles.viewuudai} onPress={()=> setDulieu(DATA)}>
                            <Text style={styles.Udai}>Ưu đãi đặc biệt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewuudai } onPress={()=> setDulieu(DATA1)}>
                          <Text style={styles.Udai}>Cập nhật từ nhà</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewuudai} onPress={()=> setDulieu(DATA2)}>
                          <Text style={styles.Udai}>#CoffeLover</Text>
                        </TouchableOpacity>
                      </ScrollView>
                    </View> 
                    {/* <View style={{marginHorizontal:8}}>
                       <FlatList
                         data={dulieu}
                         renderItem={renderItem}
                         keyExtractor={item => item.id}
                         numColumns={2}
                       /> 
                    </View> */}
            </SafeAreaView>
          </ScrollView>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      icongiaohang:{
        justifyContent:'center', 
        alignItems:'center',
        flex:1,
      },
      giaohang:{
        flexDirection:'row',
        height:100, 
        justifyContent:'center', 
        alignItems:'center',
        borderWidth:1, 
        marginHorizontal:16,
        marginVertical:20,
        borderColor:'#E0E0E0',
        borderRadius:10,
      },
      iconhead:{
        height:40,
        width:40,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:2,
        borderRadius:20,
        borderColor:'#fdfdfd',
        elevation:3,
      },
      iconbot:{
        height:40,
        alignItems:'center',
        justifyContent:'center',
      },
      headcon:{
        marginHorizontal: 16,
        flexDirection:'row',

        alignItems:'center'
      },
      headtxt:{
        fontSize:18,
        fontWeight:'bold',
      },
      head:{
          width:'100%',
          height:60,
          borderBottomWidth:1,
          borderColor:'#E0E0E0',
          justifyContent:'center',
          alignItems:'center',
          position:'absolute',
          backgroundColor:'white',
      },
      item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 12,
        marginHorizontal: 16,
        width:'42%',
        justifyContent:'center',
        alignItems:'center'
      },
      title: {
        fontSize: 17,
      },
      wrapper: {
          borderRadius:10,
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        width:'92%',
      },
      text: {
        color: 'black',
        fontSize:20,
        fontWeight:'bold',
      },
      text1: {
        color: '#222222',
        fontSize:16,
        fontWeight:'bold',
      },
      khampha:{
        marginHorizontal:16,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
      },
      Udai:{
        color: 'black',
        fontSize:15,
        fontWeight:'bold',
      },
      viewuudai:{
        fontWeight:'bold',
        borderRadius:50,
        width:140, 
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:8,
        backgroundColor:'#E0E0E0',
        marginVertical:15,
      },
      anh:{
        resizeMode: 'stretch',
        width:'100%',
        height:'100%',
        borderRadius:5,
      },
});
export default Trangchu;
