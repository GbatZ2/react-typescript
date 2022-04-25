import React from 'react'
import {useContext} from 'react'
import {themeContext,ThemeContextProvider } from './ThemeContext'



export default function Box() {

const theme = useContext(themeContext)


  return (

    <ThemeContextProvider>  
                <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>
                   <h2>Box</h2>
                </div>
    </ThemeContextProvider>

  )
}
