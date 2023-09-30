import React, { useState, useEffect } from 'react';
import {Modal, Text, View, TouchableOpacity, TextInput, Image, ToastAndroid} from 'react-native';
import styles from './profilemodal.style';
import { icons } from "../../../constants";
import { storage } from '../../../utils/storage';
import { useRouter } from 'expo-router';

const ProfileModal = ({modalVisible, setModalVisible, username, setUsername}) => {

    const [changeName, setChangeName] = useState(false);
    const router = useRouter();

    const showToast = (text) => {
        ToastAndroid.showWithGravity(
            text,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };

    const handleSave = () => {
        setModalVisible(false);
        setChangeName(false);
        storage.save({
            key: 'username',
            data: username.length < 3? "John" : username
        });
        setUsername(username.length < 3? "John" : username);
    }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            handleSave(); 
            if (changeName)
                showToast("Username updated!");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.normalText}>
                        Username
                    </Text>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder='What should I call you?'
                        editable={changeName}
                    />
                    </View>
                    { !changeName && (
                        <TouchableOpacity style={styles.searchBtn} onPress={() => setChangeName(true)}>
                            <Image
                                source={icons.pencil}
                                style={styles.searchBtnImage}
                            />
                        </TouchableOpacity>
                    )}
                </View>
                
                <View style={styles.container}>
                    { changeName && (
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => {handleSave(); showToast("Username updated!");}}
                            >
                            <Text style={styles.btnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileModal;