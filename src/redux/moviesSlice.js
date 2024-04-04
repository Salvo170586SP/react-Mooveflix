import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMovie = createAsyncThunk('fetchMovie', async (query) => {
    const all = `https://api.themoviedb.org/3/trending/movie/day?`;
    const uriSearch = `https://api.themoviedb.org/3/search/movie?query=${query}&`;
    const url = query == '' ? all : uriSearch;
    const apiKey = '52506c224db8dc42f817a52dcdd3da51'
    const urlFull = `${url}api_key=${apiKey}`
    const response = await fetch(urlFull);
    const data = await response.json();

    // Memorizza i nuovi dati nel local storage, sovrascrivendo i precedenti
    localStorage.setItem('movies', JSON.stringify(data));

    return data;
});



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        value: JSON.parse(localStorage.getItem('movies')) || [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchMovie.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })
    }

});


export const moviesReducer = moviesSlice.reducer