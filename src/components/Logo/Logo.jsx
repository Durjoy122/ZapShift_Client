import React from 'react';
import Picture from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='flex items-end'>
            <Link to="/" className="flex items-end">
                <img src={Picture} alt="Logo" />
                <h3 className="text-3xl font-bold -ms-2.5">zapShift</h3>
            </Link>
        </div>
    );
};

export default Logo;