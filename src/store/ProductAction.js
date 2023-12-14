import { productActions } from "./ProductSlice";
import axios from "axios";



// === get data ===
export const getAllData = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        console.log(data);
        dispatch(productActions.allData(data));
    } catch (error) {
        console.log(error.message);
    }

};