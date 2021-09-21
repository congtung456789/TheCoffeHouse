import React from 'react'
import { View,SafeAreaView,ScrollView,StyleSheet,TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Khac = () => {
    return (
        <ScrollView>
            <SafeAreaView >
                <View style={{marginHorizontal:8,marginVertical:10}}>
                    <View style={{marginHorizontal:8,marginVertical:6}}>
                      <Text style={styles.titlecf}>Tiện ích</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.tap} >
                          <Icon name="text-box-outline" size={30} color="#f26700" style={styles.tapicon} /> 
                          <Text style={styles.taptxt}>Lịch sử đơn hàng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tap}>
                          <Icon name="content-paste" size={30} color="#b274f3" style={styles.tapicon} /> 
                          <Text style={styles.taptxt}>Điều khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={[styles.tap,{width:'96%'}]}>
                          <Icon name="music-box-outline" size={30} color="#64da2e" style={styles.tapicon} />
                          <Text style={styles.taptxt}>Nhạc đang phát</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:16,marginVertical:10}}>
                  <Text style={styles.titlecf}>Hỗ trợ</Text>
                </View>
                <View style={{width:'92%',marginHorizontal:16,marginVertical:10, backgroundColor:'white',borderRadius:10}}>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="star-outline" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Đánh giá đơn hàng</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                    <View style={{}}></View>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="message-outline" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Đánh giá đơn hàng</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:16,marginVertical:10}}>
                  <Text style={styles.titlecf}>Tài khoản</Text>
                </View>
                <View style={{width:'92%',marginHorizontal:16,marginVertical:10, backgroundColor:'white',borderRadius:10}}>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="account-outline" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Thông tin cá nhân</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                    <View style={{}}></View>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="bookmark-outline" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Địa chỉ</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="cog-outline" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Cài dặt</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={{flexDirection:'row',height:60,alignItems:'center',}}>
                        <Icon name="exit-to-app" size={20} color="#222222" style={styles.iconhotro} />
                        <Text style={styles.txthotro}>Đăng nhập</Text>
                        <Icon name="chevron-right" size={20} color="#222222" style={styles.iconhotro} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ScrollView>

    );
}
const text1 = {
    color: '#222222',
    fontSize:20,
}
const styles = StyleSheet.create({
    iconhotro:{
        marginHorizontal:16,
        marginVertical:10,
        
    },
    txthotro:{
        flex:2,
        fontSize:16,
    },
    taptxt:{
      marginHorizontal:10,
      fontSize:16,
      fontWeight:'bold',
      color:'#0a0709',
    },
    tapicon:{
      marginHorizontal:10,
      marginVertical:10,
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
        color: 'black',
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

export default Khac;
