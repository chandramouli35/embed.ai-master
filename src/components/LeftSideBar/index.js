
import { useState } from 'react';
import './index.css'
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { FaCompass } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const LeftSidebar = () => {
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()
    const hideSidebar = () => {
        setHide(prevState => !prevState)
   
    }
    const createChar = () => {
        navigate('/create-character')
    }
    
    const gotoHome = () => {
        navigate("/")  
    }
    const gotoChat = () => {
        navigate("/chat")
    }
    return(
        <div className='sidebar-main-container'>
            <div className= {hide ?  'siderbar-container': 'siderbar-hide'}>
                <div>
                    <b className= 'title' onClick={gotoHome}>chandra.ai </b><br/>
                    
                    <button className = "create-btn" onClick={createChar}><FaPlus />Create</button><br/>
                    <a href="/Content" className='discover'>
                    <button className = "discover-btn"><FaCompass className='compass-icon'/>Discover</button><br/>
                    </a>
                    <p className='chats'>Chats</p>
                    <p className='today'>Today</p>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1664970970/29Kohliton_ynbxfk.jpg" alt = "King"/>
                        <p className='names'>King Kohli</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1713018293/matrix_y1t6lg.jpg"alt = "Matrix"/>
                        <p className='names'>Matrix</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1713018510/KARNA-_yap07z.jpg"alt = "Karna"/>
                        <p className='names'>Karna</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1713018620/lord-shiva-17_elstmb.webp"alt = "Destroyer"/>
                        <p className='names'>Destroyer</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1713018431/subhashchandra_bose_dn7cbm.jpg" alt = "Bose"/>
                        <p className='names'>Subhash Chandra Bose</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image" src = "https://res.cloudinary.com/dgonqoet4/image/upload/v1713018724/l9_1161540532848_xiztd2.webp" alt = "Indian James Bond" />
                        <p className='names'>Ajith Doval</p>
                    </div>
                    <div className = "profile-container" onClick={gotoChat}>
                        <img className = "profile-image"  src = 'https://res.cloudinary.com/dgonqoet4/image/upload/v1713018150/yogi_ji_udp3n6.jpg' alt = "Yogi" />
                        <p className='names'>Yogi Adithya Nath</p>
                    </div>
                </div>
                
                <div className='bottom-co'>
                    <hr />
                    <button className='try-btn'>Try chandra.ai</button>
                    <div className = "profile-container">
                        <h2 className = "intital">T</h2>
                        <p>Chandra</p>
                    </div>
                </div>
            </div>
            <div>
            <HiMenuAlt2 onClick={hideSidebar}/> 
            {hide ?<RiArrowLeftDoubleLine className={hide ?'arrow':"hideAr"} onClick={hideSidebar}/> : <p></p>}
            </div>
        </div>
      
    )
}

export default LeftSidebar
