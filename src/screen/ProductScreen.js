import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Card, Button } from 'react-native-elements'

// import actions
import { getCarousel, getProduct } from '../actions'


const WIDTH = Dimensions.get('screen').width;

const ProductScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const { product, carousel } = useSelector((state) => {
        return {
            product: state.productReducer.product,
            carousel: state.productReducer.carousel
        }
    })

    React.useEffect(() => {
        dispatch(getCarousel())
        dispatch(getProduct())
    }, [])

    console.log(product)

    return (
        <SafeAreaView style={{ backgroundColor: '#fbeeac', flex: 1, paddingTop: 10 }}>
            <View>
                <Text style={{ marginTop: 0, marginHorizontal: 20, fontSize: 25, fontWeight: 'bold' }}>Coronavirus Live Update</Text>
                <Card containerStyle={styles.cardContainer}>
                    <View style={styles.viewTitleButton}>
                        <Text style={styles.namaProduk}>
                            Total :
                        </Text>
                        <Text style={styles.namaProduk}>
                            {product.TotalConfirmed}
                        </Text>
                        <Text style={styles.namaProduk}>
                            + {product.NewConfirmed}
                        </Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardContainer}>
                    <View style={styles.viewTitleButton}>
                        <Text style={styles.namaProduk}>
                            Recovered :
                        </Text>
                        <Text style={styles.namaProduk}>
                            {product.TotalRecovered}
                        </Text>
                        <Text style={styles.namaProduk}>
                            + {product.NewRecovered}
                        </Text>
                    </View>
                </Card>
                <Card containerStyle={styles.cardContainer}>
                    <View style={styles.viewTitleButton}>
                        <Text style={styles.namaProduk}>
                            Deaths :
                        </Text>
                        <Text style={styles.namaProduk}>
                            {product.TotalDeaths}
                        </Text>
                        <Text style={styles.namaProduk}>
                            + {product.NewDeaths}
                        </Text>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 70,
        borderRadius: 0,
    },
    viewTitleButton: {
        justifyContent: 'center',
    },
    namaProduk: {
        marginBottom: 0,
        fontSize: 20
    },
    viewRatingButton: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    viewButton: {
        display: 'flex',
        flexDirection: 'row',
        width: 130,
        justifyContent: 'space-around'
    },
    buttonBookmark: {
        width: 50,
        backgroundColor: '#f4d160'
    },
    buttonCart: {
        width: 50,
        backgroundColor: '#28527a'
    }
})

export default ProductScreen