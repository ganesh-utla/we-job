import React from 'react';
import {Modal, Text, Pressable, View, TouchableOpacity} from 'react-native';
import styles from './clearmodal.style';
import { COLORS } from '../../../constants';

const ClearModal = ({text, modalVisible, setModalVisible, handleClear}) => {

  return (
    <View>
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
                <Text style={styles.normalText}>
                    {text}
                </Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.btn, {backgroundColor: COLORS.gray}]}
                    onPress={() => {
                        setModalVisible(false);
                        handleClear();
                    }}
                    >
                    <Text style={styles.btnText}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.btn, {backgroundColor: "#FE7654"}]}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={styles.btnText}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ClearModal;