import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IUser } from "../domain/IUser";
import { AUTH_KEY } from "./useHooks";

export const getUser = createAsyncThunk('users/get', ({ email, password }: { email: string, password: string }) => {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
})
export const createUser = createAsyncThunk('users/create', ({ email, password }: { email: string, password: string }) => {
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
})

const saveUserData = (state: UserInterface, action: PayloadAction<unknown>) => {
    state.data = action.payload;
    window.sessionStorage.setItem(AUTH_KEY, JSON.stringify(action.payload));
    state.isAuth = true;
}
const clearUserData = (state: UserInterface) => {
    state.data = {};
    window.sessionStorage.removeItem(AUTH_KEY);
    state.isAuth = false;
}

interface UserInterface {
    isAuth: boolean,
    data: unknown
}

const initialState: UserInterface = {
    isAuth: false,
    data: {}
}

const { reducer, actions } = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<IUser>) {
            saveUserData(state, action);
        },
        logoutUser(state) {
            clearUserData(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                saveUserData(state, action);
            })
            .addCase(getUser.rejected, (state) => {
                clearUserData(state);
            })

        builder
            .addCase(createUser.fulfilled, (state, action) => {
                saveUserData(state, action);
            })
            .addCase(createUser.rejected, (state) => {
                clearUserData(state);
            })
    }
})

export const { loginUser, logoutUser } = actions;

export default reducer;