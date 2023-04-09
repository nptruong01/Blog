import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>NGHỆ THUẬT</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>KHOA HỌC</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>CÔNG NGHỆ</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>PHIM ẢNH</h6>
                    </Link>
                    {/* <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link> */}
                    <Link className="link" to="/?cat=food">
                        <h6>ẨM THỰC</h6>
                    </Link>
                    <span>Tên User:{currentUser?.username}</span>
                    {
                        currentUser ? (<span onClick={logout}>Đăng Xuất</span>) : (<Link className="link" to="/login">Login</Link>)
                    }
                    <span className="write">
                        <Link className="link" to="/write" >Viết</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar