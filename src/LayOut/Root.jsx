import { Outlet } from "react-router-dom";
import Navber from "../SharePages/Header/Navber";
import Footer from "../SharePages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-[1345px] mx-auto">
                <Navber></Navber>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;