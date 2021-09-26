import React, {useState} from 'react';
import { View, ImageBackground, KeyboardAvoidingView,  Text,TouchableOpacity,TextInput, Image, StyleSheet, SafeAreaView,Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { Login } from '../api/Services';
const {height,width} = Dimensions.get('window') 
const Dangnhap = () => {
    const [phone,setphone] = useState()
    const [code,setcode] = useState()
    const onchangephone = (val) => setphone(val)
    const onchangecode = (val) => setcode(val)
    const [isVisible,setisVisible] = useState(false) 
    const Close =()=>{
        setisVisible(false)
    }
    const onVerifyPhone = async () =>{
        try {
            const response = await Login({ phone: phone});
            console.log('rs', response.data.data);
            setisVisible(true)
        } catch (error) {
            console.log(error);
        }
    }
    
    const onVerifyCode = async () =>{
        try {
            const response = await Login({ phone : phone, otp : code});
            console.log('rs', response.data);
            console.log('token', response.data.token);
            // AsyncStorage.setItem('token',response.data.token);
            setisVisible(false)
        } catch (error) {
            console.log(error.response);
        }
    }
    
    return (
        <KeyboardAvoidingView 
         style={{flex:1}}
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         >
            <ImageBackground 
            source={require('../img/unnamed.jpg')} 
            style={{width:'100%',flex:1,justifyContent:'center'}}
            > 
            <SafeAreaView  style={{flex:1}} >
                <View style={{flex:1}} >
                    <TouchableOpacity style={styles.nutx} onPress={Close} >
                        <Icon1 name="close" size={20} color="white" />
                    </TouchableOpacity>  
                </View>
                <View style={{flex:3,backgroundColor:'white', borderTopLeftRadius:25,borderTopRightRadius:25}}>
                    <View style={{alignItems:'center', marginVertical:30}}>
                        <Text>Chào mừng bạn đến với</Text>
                            <Image
                             style={{resizeMode: 'center',width:'100%',height:40}} 
                             source={require('../img/logo_the_coffee_house_1.png')} 
                             />
                    </View>
                    <View style={{marginHorizontal:30}}>
                        <View style={{flexDirection:'row',borderWidth:1,borderRadius:10,borderColor:'gray'}}>
                            <View style={{justifyContent:'center',alignItems:'center',width:'20%'}}>
                                <Text style={styles.txtbutton}>+84</Text>
                            </View>
                            <View style={{height:'50%',borderWidth:0.5,marginTop:12}}></View>
                            <View style={styles.txtbutton}>
                                <TextInput
                                    placeholder='Nhập số điện thoại'
                                    style={[styles.txtbutton,{marginLeft:20}]}
                                    onChangeText={onchangephone}
                                    keyboardType='numeric'
                                    value={phone}
                                />
                            </View>  
                        </View>
                            <TouchableOpacity style={styles.dangnhap}  onPress={onVerifyPhone}>
                                <Text style={[styles.txtbutton,{color:'white'}]}>Đăng nhập</Text>
                            </TouchableOpacity>  
                    </View>
                    <View style={{flexDirection:'row',marginVertical:20,marginHorizontal:30,justifyContent:'center',alignItems:'center'}}>
                        <View style={{borderWidth:0.5,flex:1,height:0}}></View>
                        <View>
                         <Text style={{fontSize:18, marginLeft:10,marginRight:10,color:'gray'}}> Hoặc </Text>
                        </View>
                        <View style={{borderWidth:0.5,flex:1,height:0}}></View>
                    </View>
                    <View style={{marginHorizontal:30}}>
                            <TouchableOpacity style={[styles.f3,{flexDirection:'row',backgroundColor:'black',borderColor:'black'}]} >
                                <Icon name="apple" size={25} color="white" />
                                <Text style={[styles.txtbutton,{color:'white',marginHorizontal:10}]}>Tiếp tục bằng Apple</Text>
                            </TouchableOpacity>  
                            <TouchableOpacity style={[styles.f3,{flexDirection:'row',backgroundColor:'#3A5FCD',borderColor:'#3A5FCD'}]}>
                                <Icon name="facebook-square" size={25} color="white" />
                                <Text style={[styles.txtbutton,{color:'white',marginHorizontal:10}]}>Tiếp tục bằng Facebook</Text>
                            </TouchableOpacity>  
                            <TouchableOpacity style={[styles.f3,{flexDirection:'row',backgroundColor:'white',borderColor:'#D3D3D3'}]} >
                                <Icon name="google" size={25} color="black" />
                                <Text style={[styles.txtbutton,{color:'black',marginHorizontal:10}]}>Tiếp tục bằng Google</Text>
                            </TouchableOpacity>  
                    </View>
                    <TouchableOpacity style={styles.tv}>
                        <Text style={styles.txtbutton} >Tiếng Việt</Text>
                    </TouchableOpacity>
                    
                </View>
                <Modal
                    testID={'modal'}
                    isVisible={isVisible}
                    onSwipeComplete={Close}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.view}>
                     <View style={styles.content}>
                        <View style={styles.contentcon}>
                            <Text style={styles.contentTitle}>Xác nhận mã OTP</Text>
                            <Text style={styles.contenttxt}>Một mã xác thực gồm 6 số đã dược gửi đến số điện thoại {phone}</Text>   
                        </View>
                        <View style={styles.txtbutton}>
                            <TextInput
                                placeholder='Nhập số điện thoại'
                                style={[styles.txtbutton,{marginLeft:20}]}
                                onChangeText={onchangecode}
                                // keyboardType='numeric'
                                value={code}
                            />
                        </View>  
                        <TouchableOpacity style={styles.dangnhap}  onPress={onVerifyCode}>
                            <Text style={[styles.txtbutton,{color:'white'}]}>Xác nhận</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.nutx1} onPress={Close}>
                            <Icon1 name="close" size={20} color="black" />
                        </TouchableOpacity>  
                     </View>
                </Modal>
            </SafeAreaView>
            </ImageBackground>
        </KeyboardAvoidingView>
        
    );
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:1,
        flex:1,
    },
    f3:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#D3D3D3',
        marginVertical:15,
        height:50, 
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
    },
    dangnhap:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#D3D3D3',
        marginVertical:15,
        height:50, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D3D3D3'
    },
    nutx:{
        position:'absolute',
        top:50, 
        right:20,
        width:30,
        height:30,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    nutx1:{
        position:'absolute',
        top:10, 
        right:10,
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
    },
    txtbutton:{
        fontSize:20,
    },
    txt:{
       marginTop:5,
       fontSize:20,
       fontWeight:'bold',
    },
    tv:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 10,
        height:height-100,

      },
      contentcon:{
        marginHorizontal:16,
        marginVertical:50,
        justifyContent:'center',
        alignItems:'center',
      },
      contentTitle: {
        fontSize: 25,
        fontWeight:'bold',
        marginVertical:10,
      },
      contenttxt:{
        fontSize:18,
        textAlign:'center',
        
      },
      view:{
        justifyContent: 'flex-end',
        margin:0,
      }
});

export default Dangnhap;
