import { useEffect } from "react";

const MyRequests = () => {
    useEffect(()=>{
        document.title = "Entree | My request";
    },[])
    
    return (
        <div>
            this is my request 
        </div>
    );
};

export default MyRequests;