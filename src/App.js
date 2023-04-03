import React from 'react'
/*import LoginForm from './components/LoginForm'*/
import {ChatEngine} from 'react-chat-engine'


import ChatFeed from './components/ChatFeed'

import './App.css'

const App=() =>{
    /*if(!localStorage.getItem('username')) return <LoginForm />*/

    return(
        <ChatEngine
            height="100vh"
            projectID="cb787f4f-be99-46fe-8ea8-f7c540c3bcae"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App