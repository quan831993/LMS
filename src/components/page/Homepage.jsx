import Footer from "../footer/Footer";
import MainBg from "../main-bg/MainBg";
import Navbar from "../navbar/Navbar";
import NewestCourse from "../newest-course/NewestCourse";
import PopularRoute from "../route/PopularRoute";


function Homepage() {
    return (
        <>
            <Navbar />
            <MainBg />
            <PopularRoute />
            <NewestCourse />
            <Footer />
        </>
    )
};
export default Homepage;