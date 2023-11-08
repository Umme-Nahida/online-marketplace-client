import { Link, useRouteError } from 'react-router-dom';
import img from "../../../public/image/404.gif"
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='text-center max-w-3xl mx-auto'>
            <img src={img} alt=""  />
            <p>{error.statusText || error.message}</p>
            <Link to ="/"><button className='btn mt-5'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;