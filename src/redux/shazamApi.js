import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const shazamCoreapi = createApi({
    reducerPath:"shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','e7071663famshe674704f941543bp1b7b38jsn44eacf1aadc7');
            return headers;
        }
    }),
    endpoints:(builder) =>({
        getTopCharts:builder.query({query:()=>'/charts/world'})
    })
})

export const { useGetTopChartsQuery } = shazamCoreapi;


