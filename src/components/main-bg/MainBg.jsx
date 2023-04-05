import "../main-bg/main-bg.scss";
function MainBg() {
    return (
        <div className="main-bg">
            <div className="main-content">
                <p>Tìm khóa học yêu thích </p>
                <p>và <span>nâng cao trình độ</span> của bạn</p>
                <input type="text" placeholder="Bạn muốn học gì hôm nay?"/>
                <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
};
export default MainBg;