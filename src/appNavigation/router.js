import React from 'react';
import { View, Text,Image,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native';
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
      <Text style={styles.headtxt}>chào bạn mới</Text>
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
      <Image
            style={{width:50,height:50}} 
            source={require('../img/ship.jpg')} 
      />
      </View>
  );
}
 const DathangRight = () =>{
  
  // < style={{flex:1}}>
  return(
    <View>
      <Text style={styles.headtxt}>Giao tận nơi</Text>
      <Text numberOfLines={1} style={styles.txtthongbao}>Các sản phẩm sẽ được giao đến địa chỉ............</Text>
    </View>
  );
 }
 const DathangTitle = () =>{

 }
//phần cửa hàng
//phần ưu đãi
const UudaiLeft = ()=> {
  return (
    <View style={{flexDirection:'row'}}>
      <Text style={styles.headtxt}>Ưu đãi</Text>
    </View>

  );
}
const UudaiRight = ()=> {
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
            headerShown: false,
          // headerLeft: (props) => <DathangLeft {...props} />,
          // headerRight: (props) => <DathangRight {...props} />,
          // headerTitle: (props) => <DathangLeft {...props} />,
          
        }}
        />
        <Tab.Screen name="Cửa hàng" component={Cuahang} 
          options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: (props) => <HeadRight {...props} />,
          
        }}
        />
        <Tab.Screen name="Giỏ hàng" component={Giohang} 
          options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: (props) => <HeadRight {...props} />,
          
        }}
        />
        <Tab.Screen name="Ưu đãi" component={Tichdiem}
        options={{
          
          headerTitle: (props) => <UudaiLeft {...props} />,
          headerRight: (props) => <UudaiRight {...props} />,
          
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
        borderRadius:20,
        borderColor:'#fdfdfd',
        elevation:3,
}
const styles = StyleSheet.create({
   headtxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    txtthongbao:{
      fontSize:18,
      color:'#999999'
    },
    iconhead1:{
      ...iconhead,
        height:40,
        width:60,
        
      },
    iconhead2:{
      ...iconhead,
        height:40,
        width:40,
    },
})
export default router;
