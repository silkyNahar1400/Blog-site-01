import React from 'react';
import Navbar from "../header/Navbar.jsx"

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
           <section className='cs-bg-main mt-5' >
            <div className="container d-flex">
                <h1 className='text-white p-5 mt-5' >Archive</h1>
            </div>
           </section>
           <h1 className='text-center fw-bold my-4' >Blogs</h1>

        </div>
    );
};

export default Header;