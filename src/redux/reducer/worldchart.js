import { createReducer } from "@reduxjs/toolkit"
export const shazamApi = createReducer({},{
    
})

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', "option").then((response)=> console.log(response.json)).catch((error)=> console.log(error))