import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFullMovie = createAsyncThunk('fetchFullMovie', async (querySearch) => {
    const baseUri = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = '52506c224db8dc42f817a52dcdd3da51'
    const urlFull = `${baseUri}?query=${querySearch}&api_key=${apiKey}`
    const response = await fetch(urlFull);
    return response.json();
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        value: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFullMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchFullMovie.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchFullMovie.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })
    }
});



export const moviesReducer = moviesSlice.reducer