import "../navbar/navbar.scss";
import { useEffect, useState } from "react";
function Navbar() {
    let [avatar, setAvatar]= useState("https://res.cloudinary.com/dqccfamas/image/upload/v1680667229/Rectangle_190_o429ft.png")
    function handleImg() {
        setAvatar('https://res.cloudinary.com/dqccfamas/image/upload/v1678761199/cld-sample-4.jpg')
    }

    return (
        <div className="header">
            <i className="fa-solid fa-list"></i>
            <div className="header-left">
                <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680664513/LOGO_RIKKEI_ACADEMY_2022-01_2_rpym4y.png" alt="" />
            </div>
            <div className="header-right">
                <div className="header-right1">
                    <div className="menu">
                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680664513/Union_zjybwk.png" alt="" />
                        <p>Trang chủ</p>

                    </div>
                    <div className="menu">
                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680664513/Union2_jqhvr0.png" alt="" />
                        <p>Lộ trình</p>
                    </div>
                    <div className="menu">
                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680664513/Union3_thpx6j.png" alt="" />
                        <p>Khóa học</p>
                    </div>
                    <div className="menu">
                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680664513/Union4_bgbwd9.png" alt="" />
                        <p>Bảng điều khiển</p>
                    </div>
                </div>
                <div className="header-right2">
                    <div className="search-box">
                        <input type="text" placeholder="Bạn muốn học gì hôm nay?" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <img onClick={handleImg} src={avatar} alt="" />
                </div>
            </div>
            <img className="sub-ava" src="https://res.cloudinary.com/dqccfamas/image/upload/v1680667229/Rectangle_190_o429ft.png" alt="" />
        </div>
    )
};
export default Navbar;