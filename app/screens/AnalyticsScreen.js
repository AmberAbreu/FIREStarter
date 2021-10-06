import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { connect } from "react-redux";
import { getCategories } from '../store/categoriesReducer';

import {VictoryPie, VictoryBar} from 'victory-native'

import categoriesData from '../dummydata'


export function renderChart({navigation}, props) {
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   props.getCategories()
    // });
    console.log(props)
    
  }, [])

const windowWidth = Dimensions.get('window').width
const {categories} = props


  // function processCategoryDataToDisplay(){

  //   let chartData = categories.map((item) => {
      
  //     let total = item.expenses.reduce((a, b ) => a + (b.total ), 0)
  //     return {
  //       name: item.name,
  //       y: total,
  //       expenseCount: item.expenses.length,
  //       color: item.color,
  //       id: item.id
  //     }
  //   })


  //   let filterChartData = chartData.filter(a => a.y > 0)
  //   let totalExpense = filterChartData.reduce((a,b) => a + (b.y || 0), 0)
  //   let finalChartData = filterChartData.map((item) => {
  //     let percentage = (item.y / totalExpense * 100).toFixed(0)
  //     return {
  //       label: `${percentage}%`,
  //       y: Number(item.y),
  //       expenseCount: item.expenseCount,
  //       color: item.color,
  //       name: item.name,
  //       id: item.id
  //     }    
  //   })
  //   return finalChartData
  // }
  function setSelectCategoryByName(name) {
    let category = categories.filter(a => a.name == name)
    setSelectedCategory(category[0])
  }

  // let chartData = processCategoryDataToDisplay()
  // let colorScales = chartData.map((item) => item.color)
  // let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

  return (
    <View style={{ alignItems: "center", justifyContent: "center", top: 50 }}>
      {/* <Text style={{ fontSize: 40 }}>Expenses Data:</Text>
      <VictoryPie
        data={chartData}
        colorScale={colorScales}
        labels={(datum) => `${datum.y}`}
        radius={({ datum }) =>
          selectedCategory && selectedCategory.name == datum.name
            ? windowWidth * 0.4
            : windowWidth * 0.4 - 10
        }
        innerRadius={70}
        labelRadius={({ innerRadius }) =>
          (windowWidth * 0.4 + innerRadius) / 2.5
        }
        style={{
          labels: { fill: "white" },
          parent: {
            ...styles.shadow,
          },
        }}
        width={windowWidth * 0.8}
        height={windowWidth * 0.8}
        events={[
          {
            target: "data",
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      let categoryName = chartData[props.index].name;
                      setSelectCategoryByName(categoryName);
                    },
                  },
                ];
              },
            },
          },
        ]}
      />

      <View style={{ position: "absolute", top: "42%", left: "42%" }}>
        <Text style={{ textAlign: "center" }}>{totalExpenseCount}</Text>
        <Text style={{ textAlign: "center" }}>Expenses</Text>
      </View> */}

      
    </View>
  );
}


//const singleData = 



const mapState = (state) => {
  return {
    categories: state.categoriesReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapState, mapDispatch)(renderChart);



const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
}
})
