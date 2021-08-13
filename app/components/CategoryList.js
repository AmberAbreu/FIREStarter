import React, {useRef} from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Animated , FlatList} from 'react-native'
import categoriesData from '../dummydata'

const up = require('../assets/icons/up_arrow.png')
const down = require('../assets/icons/down_arrow.png')

export default function CategoryList() {
  const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current
  const [categories, setCategories] = React.useState(categoriesData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [showMoreToggle, setShowMoreToggle] = React.useState(false)
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={{
            flex: 1,
            flexDirection: 'row',
            margin: 5,
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 5,
            backgroundColor: "white",
            ...styles.shadow
        }}
    >
        <Image
            source={item.icon}
            style={{
                width: 20,
                height: 20
            }}
        />
        <Text style={{ marginLeft: 8, color: "blue", fontSize: 14 }}>{item.name}</Text>
    </TouchableOpacity>
)

return (
    <SafeAreaView style={{ paddingHorizontal: 24 - 5 }}>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                numColumns={2}
            />
        </Animated.View>

        <TouchableOpacity
            style={{
                flexDirection: 'row',
                marginVertical: 8,
                justifyContent: 'center'
            }}
            onPress={() => {
                if (showMoreToggle) {
                    Animated.timing(categoryListHeightAnimationValue, {
                        toValue: 115,
                        duration: 500,
                        useNativeDriver: false
                    }).start()
                } else {
                    Animated.timing(categoryListHeightAnimationValue, {
                        toValue: 172.5,
                        duration: 500,
                        useNativeDriver: false
                    }).start()
                }

                setShowMoreToggle(!showMoreToggle)
            }}
        >
           
        </TouchableOpacity>
    </SafeAreaView>
)
}

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
