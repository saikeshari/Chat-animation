import React, {useState} from 'react';
import './Messages.css';

function Messages() {
    const [Show, setShow] = useState(true);
    const [ShowText, setShowText] = useState(true);
    setTimeout(()=>{setShow(false)},1000);
    setTimeout(()=>{setShowText(false)},1400);
    return (
        <div className="messageWindow">
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
            <div className={Show? "messageBefore": "messageAfter"}>
                <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiiiiiiiiiiiiiiiii</div>
            </div>
        </div>
    )
}

export default Messages
