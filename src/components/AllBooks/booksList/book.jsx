import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './book.css'
const Book = (props) => {
    
    const [showIcons, setShowIcons] = useState(false);

    const handleMouseEnter = () => {
        setShowIcons(true);
    };

    const handleMouseLeave = () => {
        setShowIcons(false);
    };

    return (
        <div className="book-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="book-image-container ">
                <img className="book-image " src={props.thumbnailUrl} alt="book image" />
                {showIcons && (
                    <div className="overlay-icons">
                        <BsFillHeartFill className="icon" />
                       <ShoppingCartIcon className="icon"></ShoppingCartIcon>
                        <RemoveRedEyeIcon className="icon" />
                    </div>
                )}
            </div>
            <div className="book-info">
                <p style={{color:'#9a43b7'}}>{props.title}</p>
                
            </div>
        </div>
    );
}

export default Book;
