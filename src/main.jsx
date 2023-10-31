import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import App from './App.jsx'
import {  Theme, ThemePanel } from '@radix-ui/themes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Theme accentColor="mint" grayColor="gray" panelBackground="solid" scaling="100%" radius="full">
 
      <App />
    
    </Theme>

)
