import React from 'react';
import {Modal, Text, Linking, View, TouchableOpacity} from 'react-native';
import styles from './sidebar.style';
import { icons } from '../../../constants';
import Sidebutton from '../../common/sidebutton/Sidebutton';
import { useRouter } from 'expo-router';

const Sidebar = ({modalVisible, setModalVisible}) => {

  const router = useRouter();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>

                <Sidebutton icon={icons.heart} text={"Favorites"} handlePress={() => router.push('/favorites')} />
                
                <Sidebutton icon={icons.codeicon} text={"GitHub"} handlePress={() => Linking.openURL("https://github.com/ganesh-utla/we-job")} />

                <Sidebutton icon={icons.star} text={"Give a star"} handlePress={() => Linking.openURL("https://github.com/ganesh-utla/we-job")} />

                <TouchableOpacity 
                    style={styles.backBtn}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={styles.backBtnText}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Sidebar;