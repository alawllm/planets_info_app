import { Outlet, Link } from "react-router-dom";

import './navigation.styles.css'
import Footer from "../../components/footer/footer.component";

const Navigation = () => {


    return (
        <>
            <div className='navigation'>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>Your Home</Link>
                    <Link className='nav-link' to='/own-planet'>Find your own planet</Link>
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navigation;