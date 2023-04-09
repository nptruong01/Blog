import React from 'react'
import Logo from "../img/logo.png";

<style></style>

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Blog này được tạo ra từ các bạn ♥️ và <b>Node.JS</b>.
            </span>
        </footer>
    )
}

export default Footer