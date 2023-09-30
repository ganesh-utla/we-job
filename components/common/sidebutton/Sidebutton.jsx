import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native';
import styles from './sidebutton.style';

const Sidebutton = ({ text, icon, handlePress }) => {
  return (
    <TouchableOpacity style={styles.listBtn} onPress={handlePress}>
        <Image
            source={icon}
            resizeMode='contain'
            style={styles.likeBtnImage}
        />
        <Text style={styles.btnText}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

export default Sidebutton;