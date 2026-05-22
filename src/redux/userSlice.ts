
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User={
    id:number,
    name:string
}

type State={
    users:User[],
    loading:boolean,
    error:string
    
}

const initialState:State={
    users:[],
    loading:false,
    error:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push(action.payload);
        },
        setLoading(state,action:PayloadAction<boolean>){
            state.loading=action.payload
     },
        setError(state,action:PayloadAction<string>){
            state.error=action.payload
        }


}
})


export const { addUser, setLoading,setError } = userSlice.actions
export default userSlice.reducer

