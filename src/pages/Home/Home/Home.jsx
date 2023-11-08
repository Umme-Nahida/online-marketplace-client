import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OurValue from "../OurValue/OurValue";

const Home = () => {
    useEffect(()=>{
        document.title = "Entree | Home";
    },[])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <OurValue></OurValue>
        </div>
    );
};
 

export default Home;