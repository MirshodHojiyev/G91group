import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type User={
    id:string,
    name:string,
    age:number,
    isStudent:boolean
}

export const userApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3000' }),
    endpoints:(builder)=>({
        getUsers:builder.query<any[],void>({
            query:()=>"/users"
        }),
        getOneUser:builder.query<any,number>({
            query:(id)=>`/users/${id}`
        }),
            addUser:builder.mutation<any,any>({
             query:(userObj)=>({
                url:"/users",
                metod:"POST",
            body:userObj})
        }),
        deleteUser:builder.mutation<any,number>({
            query:(id)=>({
                url:`/users/${id}`,
                method:"DELETE"})

})})
})

export const { useGetUsersQuery,useGetOneUserQuery,useAddUserMutation,useDeleteUserMutation   } = userApi

