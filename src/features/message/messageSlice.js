import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    inbox: [
      {
        _id: 1,
        propertyName: "Royal Ratan",
        propertyDescription: "Best Building In Indore",
        name: "Harsh",
        email: "harsh@gmail.com",
        phone: "+919123456789",
        createdAt: "21-Jan-25",
        isSeen: false,
      },
      {
        _id: 2,
        propertyName: "Phoneix Citadel",
        propertyDescription: "Best Shopping Mall In Indore",
        name: "Ishra",
        email: "ishra@gmail.com",
        phone: "+911234567812",
        createdAt: "22-Jan-25",
        isSeen: true,
      },
    ],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default messageSlice.reducer;
