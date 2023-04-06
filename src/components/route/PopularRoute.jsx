import "../route/route.scss";
import { useState, useEffect } from "react";

const data = [
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680681655/image_pmnrdj.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_1_g8xvh2.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_2_k4rprx.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_3_arh1km.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_3_arh1km.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680681655/image_pmnrdj.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680681655/image_pmnrdj.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_1_g8xvh2.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_2_k4rprx.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_3_arh1km.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680682526/image_3_arh1km.png"
    },
    {
        img: "https://res.cloudinary.com/dqccfamas/image/upload/v1680681655/image_pmnrdj.png"
    }
]

function PopularRoute() {
    const [render, setRender] = useState(0);
    const [arr, setArr] = useState([]);
    const [text, setText] = useState("Xem tất cả");
    useEffect(() => {
        let arr1 = []
        if (render == 0) {         
            for (let i = 0; i < data.length / 2; i++) {
                arr1.push(data[i])
            }
            setArr(arr1);
        } else {
            for (let i = 0; i < data.length; i++) {
                arr1.push(data[i])
            }
            setArr(arr1);
        }

    }, [render])

    function handleImg() {
        if (render == 0) {
            setRender(1);
            setText('Thu gọn');
        }else{
            setRender(0)
            setText("Xem tất cả");
        }
    }
    return (
        <div className="route-component">
            <span>Lộ trình phổ biến</span>
            <p>Hơn 10.000 khóa học trực tuyến</p>
            <div className="route-container">

                {arr.map((item, index) => {
                    return (
                        <div className="route" key={index}>
                            <div className="image">
                                <img src={item.img} alt="" />
                                <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680681647/tag_ltf1ox.png" alt="" className="tag" />
                            </div>
                            <div className="route-info">
                                <p>Giới thiệu về Lập trình với Chuyên ngành Python và Java</p>
                                <div className="route-stt">
                                    <div className="stt">
                                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680683845/book_cxzwed.png" alt="" />
                                        <p>6 Khóa</p>
                                    </div>
                                    <div className="stt">
                                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680682091/clock_gsyuuo.png" alt="" />
                                        <p>3h 56m</p>
                                    </div>
                                    <div className="stt">
                                        <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680682091/eye_k2axfy.png" alt="" />
                                        <p>600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="button">
                <button onClick={handleImg}>{text}</button>
            </div>
        </div>
    )
};
export default PopularRoute;