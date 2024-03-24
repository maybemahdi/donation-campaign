import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='w-5/6 mx-auto'>
           <Nav/>
           <Outlet/>   
        </div>
    );
};

export default Layout;