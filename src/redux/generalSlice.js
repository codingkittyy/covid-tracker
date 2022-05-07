import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGlobalCases = createAsyncThunk('covids/fetchGlobalCases', async() => {
    const res = await axios(`https://covid19.mathdro.id/api`);
    return res.data;
})

export const fetchCountries = createAsyncThunk('covids/fetchCountries', async() => {
    const res = await axios(`https://covid19.mathdro.id/api/countries`);
    return await res.data;
})

export const fetchNation = createAsyncThunk('covids/fetchNation', async(nation) => {
    const res = await axios(`https://covid19.mathdro.id/api/countries/${nation}/confirmed`);
    return res.data;
})

export const fetchDailyCases = createAsyncThunk('covids/fetchDailyCases', async() => {
    const res = await axios(`https://covid19.mathdro.id/api/daily`);
    return await res.data;
})

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        items: [],
        isLoading: false,
        countries: [],
        nation: 'Turkey',
        nationItem: [],
        dailyCases: [],
    },
    reducers: {
        changeCountry: (state, action) => {
            state.nation = action.payload
        }
    },
    extraReducers: {
        [fetchGlobalCases.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchGlobalCases.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchGlobalCases.rejected]: (state, action) => {
            state.error = action.error.message
        },
        [fetchCountries.fulfilled]: (state, action) => {
            state.countries =action.payload;
            state.isLoading = false;
        },
        [fetchNation.fulfilled]: (state, action) => {
            state.nationItem = action.payload;
            state.isLoading = false;
        },
        [fetchDailyCases.fulfilled]: (state, action) => {
            state.dailyCases = action.payload;
            state.isLoading = false;
        },
    },
})

export const {changeCountry} = generalSlice.actions
export default generalSlice.reducer;