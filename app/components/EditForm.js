import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { View, Text, Modal, Pressable, StyleSheet, Button } from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import { updateExpense} from '../store/categoriesReducer';
import TextInputField from '../components/TextInputField'


export function EditForm({modalVisible, setModalVisible, updateExpense, expenseId, inputs, setInputs}) {
  const { control, handleSubmit, formState: {errors, isValid} } = useForm({mode:'onBlur'});


  // const editSubmit = (data, expenseId) => {
  //   updateExpense(data, expenseId)
  //   setInputs({
  //     title: "",
  //     description: "",
  //     total: 0
  //   })
  // }

  const onSubmit = data => {
    setModalVisible(!modalVisible)
    updateExpense(data, inputs.id)
  }

  useEffect(() => {
    console.log("these are the inputs", inputs.id);
  }, [])

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
            <Text style={styles.modalText}>Add an expense</Text>
            <Pressable
              style={[styles.button, styles.buttonClose, styles.innerModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Controller
                control={control}
                rules={{
                  value: true,
                  message: 'Title of expense is required.'
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputField
                  error={errors.title}
                  errorText={errors.title?.message}
                    onChangeText={onChange}
                    placeholder="title"
                    value={value}
                  />
                )}
                name="title"
                defaultValue={inputs.title}
              />

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: false
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputField
                    onChangeText={onChange}
                    placeholder="description"
                    value={value}
                  />
                )}
                name="description"
                defaultValue={inputs.description}
              />
              <Controller
                defaultValue={inputs.total}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInputField
                    error={errors.total}
                    errorText={errors.total?.message}
                    onChangeText={onChange}
                    placeholder="amount spent"
                    value={value}
                  />
                )}
                name="total"
                rules={{
                  maxLength: 100,
                  value: true,
                  message: 'Title of expense is required.'
                }}
              />
              <Button title="Submit" onPress={handleSubmit(onSubmit)} />

              <Text 
              style={styles.textStyle}
              onPress={()=> setModalVisible(!modalVisible)}
              >Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}



const mapDispatch = (dispatch) => {
  return {
    updateExpense: (data, id) => dispatch(updateExpense(data, id)),
  };
};

export default connect(null, mapDispatch)(EditForm);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  innerModal: {
    height: '90%',
    width: '90%',
    justifyContent: 'flex-start'
  },
  modalView: {
    margin: 20,
    height: '70%',
    width: '70%',
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