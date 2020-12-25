import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';
import './Messages.css';
import messages from './messages.json';
import img1 from './img1.jpg';
import img2 from './img2.jpeg';

function Messages() {

    const[count,setCount] = useState(0);

    const[arr,setArray] = useState([]);
    // arr.length=0;

    // const [Show, setShow] = useState(true);
    // const [ShowText, setShowText] = useState(true);
    // setTimeout(()=>{setShow(false)},1000);
    // setTimeout(()=>{setShowText(false)},1400);

    useEffect(() => {
        const interval = setInterval(() => {
            if(arr.length === 7)
            {
                //alert("reached");
                arr.length=0;
                //clearInterval(interval);
            }
            console.log(messages.messages[arr.length].messageText + " " + arr.length);
            setArray(arr => [...arr, messages.messages[arr.length]]);
            arr.length+=1;
      }, 1500);
      
        return () => clearInterval(interval);
      });

    function updateScroll(){
        var element = document.getElementById("scrollBottom");
        element.scrollTop = element.scrollHeight;
    }

    setInterval(updateScroll,500);

    // function addMessage(e) {
    //     document.querySelector(".messageWindow").innerHTML += "<div className={Show? "messageBefore": "messageAfter"}>
    //     <div className={ShowText? "messageTextBefore": "messageTextAfter"}>Saiiiiiiiiiiii</div>
    // </div>";
    // }

    return (
        <>
        <div id="scrollBottom" className="messageWindow">
            <FlipMove>
            
            {arr.map((message) => (
                <div className="message1"  style={message.status === "sent" ? {marginLeft:"57vw", color:"white", backgroundColor:"green"} : {}}>
                    {message.pic === "img1" ? <img alt="map" className="messageText1" src={img1} height="60px" width="60px" style={{borderRadius:"50%"}}/> : <></>}
                    {message.pic === "img2" ? <img alt="map" className="messageText1" src={img2} height="50%" width="50%" /> : <></>}
                    <div className="messageText1">{message.messageText}<br/><span style={message.status === "sent" ? {color:"white"} : {}} className="messageTime">{message.day}</span></div>
                </div>
            ))}
            </FlipMove>
        </div>
        <div className="textInput">
        <FontAwesomeIcon className="cameraIcon" icon={faCamera} />
        <input type="text" value="Type Something"/>
        <FontAwesomeIcon className="sendIcon" onClick={() => setCount(count + 1)} icon={faPaperPlane}/>
        </div>
        </>
    )
}

export default Messages
