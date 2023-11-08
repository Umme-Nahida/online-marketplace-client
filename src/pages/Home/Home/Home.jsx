import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OurValue from "../OurValue/OurValue";
import Aboutus from "../About/Aboutus";

const Home = () => {
    useEffect(()=>{
        document.title = "Entree | Home";
    },[])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Aboutus></Aboutus>
            <OurValue></OurValue>
        </div>
    );
};
 

export default Home;