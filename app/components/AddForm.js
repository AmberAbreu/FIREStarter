import React, {useEffect} from 'react'
import { View, Text, Modal, Pressable, StyleSheet, Button } from 'react-native'
import {useForm, Controller} from 'react-hook-form'

import TextInputField from '../components/TextInputField'

export default function AddForm({modalVisible, setModalVisible}) {
  const { control, handleSubmit, formState: {errors, isValid} } = useForm({mode:'onBlur'});
  const onSubmit = data => console.log(data)


  return (
    <View>
      <Modal
      animationType="slide"
      transparent="true"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Controller
              control={control}
              name="name"
              render={({field: {onChange, value, onBlur}}) => (
                <TextInputField
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                />
                
              )}
              />
              <Button title="Submit" onPress={handleSubmit(onSubmit)}/>
      
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});