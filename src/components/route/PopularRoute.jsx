import "../route/route.scss";
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
    }
]
function PopularRoute() {
    return (
        <div className="route-component">
            <span>Lộ trình phổ biến</span>
            <p>Hơn 10.000 khóa học trực tuyến</p>
            <div className="route-container">
                {data.map((item, index) => {
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
                <button>Xem tất cả</button>
            </div>
        </div>
    )
};
export default PopularRoute;