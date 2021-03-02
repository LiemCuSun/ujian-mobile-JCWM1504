import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { getCarousel } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const WIDTH = Dimensions.get('screen').width;

const CartScreen = () => {
    const dispatch = useDispatch()

    const { carousel } = useSelector((state) => {
        return {
            carousel: state.productReducer.carousel
        }
    })

    React.useEffect(() => {
        dispatch(getCarousel())
    }, [])

    const itemsPerPage = 2;
    const [page, setPage] = React.useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;


    return (
        <SafeAreaView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Region</DataTable.Title>
                    <DataTable.Title numeric>New Cases</DataTable.Title>
                    <DataTable.Title numeric>Total Cases</DataTable.Title>
                    <DataTable.Title numeric>Recovered</DataTable.Title>
                    <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={carousel}
                    renderItem={({ item }) => (
                        <DataTable.Row>
                            <DataTable.Cell>{item.Country}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                    keyExtractor={(item, index) => index}
                />
                {/* <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.floor(carousel.length / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${carousel.length}`}
                /> */}
            </DataTable>
        </SafeAreaView >
    )
};


export default CartScreen