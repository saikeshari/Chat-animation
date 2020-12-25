import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt, faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages.js';
import './ChatWindow.css';

function ChatWindow() {
    
    return (
        <div>
            <div class="chat_window">
                <div className="fixedChat">
                    <FontAwesomeIcon className="chatSymbol" icon={faCommentAlt}/>
                    <span class="chat_title">CHAT</span>    
                </div>
                <Messages/> 
                
            </div>
        </div>
    )
}

export default ChatWindow;
