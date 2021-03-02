import Axios from 'axios'

export const getProduct = () => {
    return async (dispatch) => {
        try {
            console.log('get product trigered')

            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')

            console.log(res.data.Global)
            console.log('after axios')

            dispatch({
                type: 'GET_PRODUCT',
                payload: res.data.Global
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const getCarousel = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')

            console.log(res.data.Countries)
            console.log('after axios detail country')

            dispatch({
                type: 'GET_CAROUSEL',
                payload: res.data.Countries
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}