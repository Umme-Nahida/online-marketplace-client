import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    useEffect(()=>{
        document.title = "Entree | Home";
    },[])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};
 

export default Home;