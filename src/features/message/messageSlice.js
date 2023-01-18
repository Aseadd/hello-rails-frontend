import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "http://localhost:3000/api/v1/messages";

export const fetchMessages = createAsyncThunk("messages/fetchMessages", async () => {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            },
        });
    console.log(response.json())
    return response.json();
    }
);

export const messagesReducer = createSlice({
    name: "messages",
    initialState: {
        messages: [{
            id: 1,
            name: "Hello Rails with React",
        }],
        status: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMessages.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.status = "succeeded";
                // Add any fetched messages to the array
                state.messages = action.payload;
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
    
});

export default messagesReducer.reducer;