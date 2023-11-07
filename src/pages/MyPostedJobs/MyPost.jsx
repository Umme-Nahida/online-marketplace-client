import { useEffect } from "react";

const MyPost = () => {
    useEffect(()=>{
        document.title = "Entree | My posted job";
    },[])
    return (
        <div>
            dispaly the all jobs projects 
        </div>
    );
};

export default MyPost;