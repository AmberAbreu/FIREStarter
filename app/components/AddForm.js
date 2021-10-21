import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { View, Text, Modal, Pressable, StyleSheet, Button , TextInput} from 'react-native'
import {useForm, Controller} from 'react-hook-form'

import { addExpense } from '../store/categoriesReducer';

import TextInputField from '../components/TextInputField'

export function AddForm({modalVisible, setModalVisible, addExpense, itemId}) {
  const { control, handleSubmit, formState: {errors, isValid} } = useForm({mode:'onBlur'});
  const onSubmit = data => {
    addExpense(data, itemId)
    console.log(itemId)
    console.log(data)
  }


  return (
    <View>
      <Modal
        animationType="slide"
        transparent="true"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
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
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder="first"
                    value={value}
                  />
                )}
                name="title"
                defaultValue=""
              />

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder="second"
                    value={value}
                  />
                )}
                name="description"
                defaultValue=""
              />
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder="price"
                    value={value}
                  />
                )}
                name="total"
                defaultValue=""
              />
              <Button title="Submit" onPress={handleSubmit(onSubmit)} />

              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}



const mapDispatch = (dispatch) => {
  return {
    addExpense: (data, id) => dispatch(addExpense(data, id)),
  };
};

export default connect(null, mapDispatch)(AddForm);

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