import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


// Load fonts
const loadFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};


const FeedbackScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={ require('./assets/images/usb_icon.png') }
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  usbIcon: {
    width: 70,
    height: 70,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20, // Thêm khoảng cách dưới tên sản phẩm
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 10, // Giảm khoảng cách giữa các phần tử
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, // Giảm khoảng cách giữa text và stars
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingStars: {
    color: 'gold',
    fontSize: 40,
  },
  imageUploadButton: {
    borderWidth: 1,
    borderColor: '#1511EB',
    borderRadius: 5,
    height: 70,
    marginHorizontal: 34,
    marginVertical: 20,
    flexDirection: 'row', // Thêm dòng này để icon và text nằm cùng hàng
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUploadText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Thêm khoảng cách giữa icon và text
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    height: 222,
    marginHorizontal: 34,
    marginVertical: 20,
    padding: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#0D5DB6',
    borderWidth: 1,
    borderColor: '#1511EB',
    borderRadius: 5,
    height: 41,
    marginHorizontal: 38,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default FeedbackScreen;