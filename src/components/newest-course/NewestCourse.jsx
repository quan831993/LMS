import "../newest-course/newest-course.scss";
const data = [
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_jyfqf7.png",
        title: "Giới thiệu về Lập trình với Chuyên ngành Python và Java"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_1_qsh7pn.png",
        title: "Lập trình Java: Giải quyết vấn đề với phần mềm"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_2_gutkz9.png",
        title: "Giới thiệu về Lập trình với Chuyên ngành Python và Java"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_3_pjriqa.png",
        title: "Lập trình Java: Giải quyết vấn đề với phần mềm"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_4_zex5io.png",
        title: "Giới thiệu về Lập trình với Chuyên ngành Python và Java"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_5_eldqrc.png",
        title: "Lập trình Java: Giải quyết vấn đề với phần mềm"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686517/Rectangle_263_6_vsrxm3.png",
        title: "Giới thiệu về Lập trình với Chuyên ngành Python và Jav"
    },
    {
        image: "https://res.cloudinary.com/dqccfamas/image/upload/v1680686516/Rectangle_263_jyfqf7.png",
        title: "Lập trình Java: Giải quyết vấn đề với phần mềm"
    }
]
function NewestCourse() {
    return (
        <div className="course-component">
            <p>Những khóa học mới nhất</p>
            <span>Hơn 10.000 khóa học trực tuyến</span>
            <div className="course-container">
                {data.map((item, index) => {
                    return (
                        <div className="course" key={index}>
                            <div className="course-header">
                                <div className="lv">
                                    <div className="lv-bar">
                                        <div className="lv1" id="green"></div>
                                        <div className="lv1"></div>
                                        <div className="lv1"></div>
                                    </div>
                                    <p>Beginner</p>
                                </div>
                                <img src={item.image} alt="" />
                            </div>
                            <div className="course-info">
                                <p>{item.title}</p>
                                <span>Mô tả các khái niệm lập trình Python cốt lõi, bao gồm cách định cấu hình ...</span>
                            </div>
                            <div className="course-stt">
                                <div className="menu">
                                    <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680688679/calendar-2_jtzhwx.png" alt="" />
                                    <p>24/05/2022</p>
                                </div>
                                <div className="menu">
                                    <img src="https://res.cloudinary.com/dqccfamas/image/upload/v1680682091/clock_gsyuuo.png" alt="" />
                                    <p>3h 56m</p>
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
export default NewestCourse;