import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FeedbackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={ require('./assets/usb_icon.png') }
          style={styles.usbIcon}
        />
        <Text style={styles.title}>
          USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa Bluetooth
        </Text>
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>
          Cực kỳ hài lòng
        </Text>
        <View style={styles.starsContainer}>
          <Text style={styles.ratingStars}>
            ★★★★★
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.imageUploadButton}>
        <FontAwesome name="camera" size={30} color="black" />
        <Text style={styles.imageUploadText}>
          Thêm hình ảnh
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.feedbackInput}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        placeholderTextColor="#C4C4C4"
        multiline
      />

      <TouchableOpacity style={submitButton}>
        <Text style={styles.submitButtonText}>
          Gửi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default FeedbackScreen;