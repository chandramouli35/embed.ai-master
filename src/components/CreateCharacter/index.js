
import { FaPencilAlt } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import './index.css'
const CreateCharacter= () => {
    return(
        <div className="create-container">
            <div className="logo">
                <FaPencilAlt  className="pencil"/>
            </div>
            <b>Character name</b>
            <div className="text-area">
                <input className="kk" type="text" placeholder="e.g.Albert Einstein" />
                <p className="number-text">0/20</p>
            </div>
            <b>Tagline</b>
            <div className="text-area">
                <input className="input-text" type="text" placeholder="Add a short tagline of your Character" />
                <p className="number-text">0/50</p>
            </div>
            <b>Description</b>
            <div>
                <textarea name="" id="" cols="150" rows="5" placeholder="How would Character describe themselves"></textarea>
                <p className="number-text">0/500</p>
            </div>
            <b>Greeting</b>
            <div>
                <textarea cols="150" rows='3' placeholder="e.g. Hello, I am Albert. Ask me anything about my scientific contributions."></textarea>
                <p className="number-text">0/2040</p>
            </div>
            <select>
                <option>More options</option>
                <option>Any options</option>
            </select><br />
            <b>Visibility</b>
            <br />
            <select>
            <IoGlobeOutline />
                <option>Public</option>
            </select>
            <div> </div>
        </div>
    )
}

export default CreateCharacter
