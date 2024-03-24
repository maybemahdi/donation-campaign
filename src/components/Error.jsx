import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center my-16 gap-5">
            <h3 className="text-2xl">Oops!!! Page Not Found</h3>
            <Link to={'/'}>
            <button className="btn p-3 bg-[#e0475edd]">Back To Home</button></Link>
        </div>
    );
};

export default Error;