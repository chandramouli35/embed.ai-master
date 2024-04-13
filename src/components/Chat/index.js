
import './index.css'
import { LuSendHorizonal } from "react-icons/lu";
const Chat = () => {
    return (
        <div className='chat-container'>
            <div className='chat-profile'>
                <img className = "profile-img"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1664972158/IPL50S_q74lt3.jpg' alt = "profile" />
                <div>
                <p className='gojo-text-heading'>Chandra</p>
                <p className='gojo-text'>By @xpearhead</p>
                </div>  
            </div>
            <div className='chat-heading'>
                <img className = "chat-profile-img"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1664967051/OIP_8_vay1uv.jpg' alt = "profile" />
                <b>Chandra</b>
                <p className='chat-p pp'>Wilkommen, bienvenue, welcome - I'm Chandra, and "' fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.</p>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1664967051/OIP_8_vay1uv.jpg' alt = "profile" />
                    <b>Chandra</b>
                    <p >chandra.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                    Wilkommen, bienvenue, welcome - I'm Chandra, and "' fluent in many languages, and will help you practice the one(s) you're learning. I can also translate anything you don't understand.
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc-'>
                    <b>Chandra Mouli</b>
                    <p className='init'>T</p>
                </div>
                <div className='cc' >
                    <p className='message-'>
                    Hello
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1664971668/TEST4S_ybzdkb.jpg' alt = "profile" />
                    <b>Chandra </b>
                    <p>chandra.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                        Hallo! Hast du etwas zu ubersetzen oder zu fragen?
                    </p>
                </div>
            </div>
            <div>
                <div className='cccc'>
                    <img className = "chat-side-img"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1664971668/TEST4S_ybzdkb.jpg' alt = "profile" />
                    <b>Chandra</b>
                    <p>chandra.ai</p>
                </div>
                <div className='message'>
                    <p className='pp'>
                        Welche Sprache lernst du denn gerade?
                    </p>
                </div>
            </div>
            <input className='send-msg' type = "text" placeholder='Message Chandra...' />
            <LuSendHorizonal className='btnn'/>
        </div>

    )
}


export default Chat
