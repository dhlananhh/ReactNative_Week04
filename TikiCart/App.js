import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TikiCart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/book.png')}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSeller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOriginalPrice}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.buyLater}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={styles.couponContainer}>
        <Text style={styles.couponText}>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.couponLink}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.couponInputContainer}>
        <View style={styles.couponInput}>
          <View style={styles.yellowBlock} />
          <TextInput
            style={styles.couponTextInput}
            placeholder="Mã giảm giá"
            placeholderTextColor="#000000"
          />
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.giftContainer}>
        <Text style={styles.giftText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.giftLink}>Nhập tại đây?</Text>
      </TouchableOpacity>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>141.800 đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPrice}>141.800 đ</Text>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 120,
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  productSeller: {
    fontSize: 12,
    color: '#808080',
    marginTop: 5,
  },
  productPrice: {
    color: '#ee0000',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  productOriginalPrice: {
    color: '#808080',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginTop: 2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    width: 25,
    height: 25,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#000',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  buyLater: {
    color: '#1e88e5',
    fontSize: 12,
    marginLeft: 'auto',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
  couponText: {
    fontSize: 12,
  },
  couponLink: {
    color: '#1e88e5',
    fontSize: 12,
  },
  couponInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  couponInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    flex: 1,
    marginRight: 10,
    height: 45,
  },
  yellowBlock: {
    width: 32,
    height: 20,
    backgroundColor: '#F2DD1B',
    marginLeft: 10,
  },
  couponTextInput: {
    flex: 1,
    marginLeft: 10,
    fontWeight: "bold",
  },
  applyButton: {
    backgroundColor: '#0A5EB7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 45,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  giftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
  giftText: {
    fontSize: 12,
  },
  giftLink: {
    color: '#1e88e5',
    fontSize: 12,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
  subtotalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtotalPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ee0000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee0000',
  },
  orderButton: {
    backgroundColor: '#ff3945',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TikiCart;