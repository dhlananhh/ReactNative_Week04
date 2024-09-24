import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    // Implement password generation logic here
    // This is a placeholder
    setGeneratedPassword('GeneratedPassword123!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <View style={styles.passwordDisplay}>
          <Text style={styles.passwordText}>{generatedPassword}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password length</Text>
          <TextInput
            style={styles.input}
            value={passwordLength}
            onChangeText={setPasswordLength}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include lower case letters</Text>
          <Switch
            value={includeLowercase}
            onValueChange={setIncludeLowercase}
            trackColor={{ false: "#767577", true: "#4a4ae6" }}
            thumbColor={includeLowercase ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include upcase letters</Text>
          <Switch
            value={includeUppercase}
            onValueChange={setIncludeUppercase}
            trackColor={{ false: "#767577", true: "#4a4ae6" }}
            thumbColor={includeUppercase ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include number</Text>
          <Switch
            value={includeNumbers}
            onValueChange={setIncludeNumbers}
            trackColor={{ false: "#767577", true: "#4a4ae6" }}
            thumbColor={includeNumbers ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include special symbol</Text>
          <Switch
            value={includeSymbols}
            onValueChange={setIncludeSymbols}
            trackColor={{ false: "#767577", true: "#4a4ae6" }}
            thumbColor={includeSymbols ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>
        <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
          <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#3a3a6d',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordDisplay: {
    backgroundColor: '#25254d',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  passwordText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 30,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  generateButton: {
    backgroundColor: '#4a4ae6',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;