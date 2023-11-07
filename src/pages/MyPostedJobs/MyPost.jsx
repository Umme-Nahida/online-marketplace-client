import { useEffect } from "react";

const MyPost = () => {
    useEffect(()=>{
        document.title = "Entree | My posted job";
    },[])
    return (
        <div>
            thsi is post job
        </div>
    );
};

export default MyPost;