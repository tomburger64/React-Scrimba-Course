import './style/header.css';
import logo from '../assets/troll-face.png'

export default function Header(){
    return(
        <div className="header w-100 d-flex justify-content-left align-items-center">
            <span className="d-flex align-items-center px-5 gap-3">
                <img className="logo" src={logo} alt="" />
                <h1 className="app-title">Meme Generator</h1>
            </span>
        </div>
    )
}