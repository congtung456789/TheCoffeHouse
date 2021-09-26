import React from 'react';
import { View, Text,Image,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dangnhap from '../component/Dangnhap'
import Trangchu from '../component/Trangchu';
import Cuahang from '../component/Cuahang';
import Dathang from '../component/Dathang';
import Uudai from '../component/Uudai';
import Khac from '../component/Khac';
import Tichdiem from '../component/Tichdiem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Giohang from '../component/Giohang';
//phần trang chủ
const LogoTitle = ()=> {
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={styles.headtxttitle}>chào bạn mới</Text>
      <Icon name="star-four-points-outline" size={25} color="#FDBC25" />
    </View>

  );
}
const HeadRight = ()=> {
  return (
    <View style={{flexDirection:'row',marginHorizontal:16}}>
      <TouchableOpacity  style={[styles.iconhead1]}>
          <Icon name="ticket-confirmation-outline" size={25} color="#FDBC25" />
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.iconhead2]}>
          <Icon name="bell-outline" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
}
//phần đặt hàng
const DathangLeft =()=>{
  return (
      <View >
            <View style={{flexDirection:'row',marginVertical:10}}>
              <View style={{marginRight:10}} >
                <Image
                      style={{width:50,height:50,borderRadius:50}} 
                      source={require('../img/ship.jpg')} 
                />
              </View>
              <View>
                <TouchableOpacity style={{flexDirection:'row'}}>
                  <Text style={styles.headtxt}>Giao tận nơi</Text>
                  <Icon name={'chevron-down'} size={25} color="black" style={{marginRight:10}} />
                </TouchableOpacity>
                
                <Text numberOfLines={1} style={styles.txtthongbao}>Các sản phẩm sẽ được giao đến địa chỉ...</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',marginVertical:10}}>
              <TouchableOpacity style={styles.headtexticon}>
                <Text style={{fontSize:18, marginLeft:10,color:'gray'}}>Thực đơn</Text>
                <Icon name={'chevron-down'} size={25} color="black" style={{marginRight:10}} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headicon}>
                <Icon name={'magnify'} size={25} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headicon}>
                <Icon name={'heart-outline'} size={25} color="black" />
              </TouchableOpacity>
            </View>
        </View>
  );
}

//phần cửa hàng
const Cuahanghead = ()=> {
  return (
    <View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.headtxttitle}>Cửa hàng</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity  style={[styles.iconhead1]}>
              <Icon name="ticket-confirmation-outline" size={25} color="#FDBC25" />
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.iconhead2]}>
              <Icon name="bell-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.headtexticon}>
          <Text style={{fontSize:18, marginLeft:10,color:'gray'}}>Tìm kiếm</Text>
          <Icon name={'magnify'} size={25} color="black" style={{marginRight:10}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headbando}>
          <Icon name={'map-outline'} size={25} color="black" />
          <Text style={{fontSize:18,fontWeight:'bold',marginHorizontal:10}}>Bản đồ</Text>
        </TouchableOpacity> 
      </View>
  </View>
  );
}
//phần ưu đãi
const UudaiLeft = ()=> {
  return (
<View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.headtxttitle}>Cửa hàng</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity  style={[styles.iconhead1]}>
              <Icon name="ticket-confirmation-outline" size={25} color="#FDBC25" />
          </TouchableOpacity>
          <TouchableOpacity  style={[styles.iconhead2]}>
              <Icon name="bell-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.headtichdiem}>
          <Text style={{fontSize:18, marginLeft:10,color:'gray'}}>Tích điểm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headbando}>
          <Text style={{fontSize:18, marginLeft:10,color:'gray'}}>Đổi ưu đãi</Text>
        </TouchableOpacity> 
      </View>
  </View>
  );
}
//phần khác
const Tab = createBottomTabNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home-variant-outline' : 'home-variant-outline';
            } else if (route.name === 'Đặt hàng') {
              iconName = focused ? 'coffee-outline' : 'coffee-outline';
            }
             else if (route.name === 'Cửa hàng') {
              iconName = focused ? 'storefront-outline' : 'storefront-outline';
            }
             else if (route.name === 'Giỏ hàng') {
              iconName = focused ? 'shopping-outline' : 'shopping-outline';
            }
             else if (route.name === 'Ưu đãi') {
              iconName = focused ? 'ticket-outline' : 'ticket-outline';
            }
             else if (route.name === 'Khác') {
              iconName = focused ? 'format-list-checkbox' : 'format-list-checkbox';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Trang chủ" component={Trangchu} 
          options={{
          
           headerTitle: (props) => <LogoTitle {...props} />,
           headerRight: (props) => <HeadRight {...props} />,
           
         }}
        />
        <Tab.Screen name="Đặt hàng" component={Dathang} 
          options={{ 
            headerStyle:{height:150},
          // headerLeft: (props) => <DathangLeft {...props} />,
          // headerRight: (props) => <DathangRight {...props} />,
          headerTitle: (props) => <DathangLeft {...props} />,
          
        }}
        />
        <Tab.Screen name="Cửa hàng" component={Cuahang} 
          options={{
          headerStyle:{height:130},
          headerTitle: (props) => <Cuahanghead {...props} />,
          // headerRight: (props) => <HeadRight {...props} />,
          
        }}
        />
        <Tab.Screen name="Giỏ hàng" component={Giohang} 
          options={{
          // headerTitle: (props) => <LogoTitle {...props} />,
          // headerRight: (props) => <HeadRight {...props} />,
          
        }}
        />
        <Tab.Screen name="Ưu đãi" component={Tichdiem}
        options={{
          headerStyle:{height:130},
          headerTitle: (props) => <UudaiLeft {...props} />,
        }}
        />
        <Tab.Screen name="Khác" component={Khac} 
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: (props) => <HeadRight {...props} />,
          
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const iconhead ={
  // marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        borderColor:'#fdfdfd',
        elevation:3,
}
const styles = StyleSheet.create({
   headtxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    headtxttitle:{
      fontSize:24,
      fontWeight:'bold',
    },
    txtthongbao:{
      fontSize:18,
      color:'#999999'
    },
    iconhead1:{
      ...iconhead,
        height:50,
        width:70,
        
      },
    iconhead2:{
      ...iconhead,
        height:50,
        width:50,
    },
    headicon:{
      height:40,
      width:40,
      backgroundColor: "#F0F0F0",
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      marginRight:10,
      flexDirection:'row',
    },
    headtexticon:{
      flexDirection:'row',
      width:'75%',
      height:40,
      backgroundColor:'#F0F0F0',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:10, 
      marginRight:10
    },
    headbando:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    headtichdiem:{

    },
})
export default router;
