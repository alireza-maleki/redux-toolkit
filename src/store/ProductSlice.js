import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: { items: [] },
    reducers: {
        allData(state, action) {
            state.items = action.payload;
        },
    }
})


// === get data ===
// export const getAllData = () => async (dispatch, getState) => {

//     try {
//         const { data } = await axios.get('https://fakestoreapi.com/products');
//         console.log(data);
//         dispatch(productActions.allData(data));
//     } catch (error) {
//         console.log(error.message);
//     }

// }


export const productActions = ProductSlice.actions;

export default ProductSlice.reducer;




