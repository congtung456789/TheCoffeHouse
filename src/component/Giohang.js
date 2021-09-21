import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import Loading from './Loading';
export default function CartScreen() {
	// const [data, setDate] = useState([])
	const dispatch = useDispatch();
	const productList = useSelector((store) => store.cartReducer.products);
	const totalMoney = productList.reduce((acc, ele) => acc + Number(ele.quantity*ele.price), 0)
	const totalitem = productList.reduce((acc, ele) => acc + Number(ele.quantity), 0)
	console.log('productList', productList)
	const onChangeQuantity = (type, item) => () => {
		if (type === 'reduce' && item.quantity === 1) {
			dispatch({ type: 'REMOVE_ITEM', data: item })
		} else {
			dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
		}
	}
	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_ITEM', data: item })
	}
	const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })

	const renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, margin: 5, flexDirection: 'row' }}>
				<Image source={{ uri: item.high_res_image}} style={{ width: 100, height: 100, }} />
				<View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10 }}>
					<Text style={{ fontSize: 17, }}>{item.product_name}</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
						<View style={{ flex: 1, }}>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price} đ</Text>
								<Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price} đ</Text>
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<View style={{ flexDirection: 'row', marginRight: 10 }}>
									<TouchableOpacity style={styles.md_add} onPress={onChangeQuantity('reduce', item)}>
										<Ionicons name="md-remove" size={25} color={'black'} />
									</TouchableOpacity>
									<Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item?.quantity}</Text>
									<TouchableOpacity style={styles.md_add} onPress={onChangeQuantity('increase', item)}>
										<Ionicons name="add-outline" size={25} color={'black'} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
				<TouchableOpacity style={{position:'absolute', top:0,right:5,}} onPress={onRemoveItem(item)}>
					<Ionicons name="ios-close-outline" size={30} color={'black'} />
				</TouchableOpacity>
			</View>
		);
	};


	return (
		<View style={{ flex: 1 }}>
			<FlatList
				style={{ backgroundColor: 'white', flex: 1 }}
				data={productList}
				renderItem={renderItem}
				keyExtractor={(item) => item._id?.toString()}
				ListFooterComponent={
					<View>
						{
							productList?.length ?
								<TouchableOpacity style={{ marginTop: 10, marginBottom: 50, backgroundColor:'#EC870E',marginHorizontal:10,justifyContent:'center',alignItems:'center', height:50 }} onPress={onRemoveAll}>
									<Text style={{ color: 'black',fontSize:18,fontWeight:'bold' }}>
										Remove all
									</Text>
								</TouchableOpacity> : null
						}
						{
							productList?.length ? <View style={{ height: 80, paddingHorizontal: 15,backgroundColor:'#EC870E',justifyContent:'center',marginHorizontal:10, }}>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
									<Text>Total item: </Text>
									<Text>{totalitem}</Text>
								</View>
								<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
									<Text>Total money: </Text>
									<Text>{totalMoney} $</Text>
								</View>
							</View> : null
						}
					</View>
				}
			/>

			{!productList?.length && (
				<View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
					<Text>Nothing here!</Text>
				</View>)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	wishlistIcon: {
		marginRight: 5,
		position: 'absolute',
		top: 5,
		right: 5,
		zIndex: 1
	},
	md_add:{
		width:35,
		height:35,
		backgroundColor:'#F0F0F0',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
	},

});