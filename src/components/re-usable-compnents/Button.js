import React from 'react';

const Button = ({children,btn_class}) => {
    return (
        <>
            <button  className={`bg-orange-300 px-3 py-1 rounded mt-3 text-white ${btn_class}`}>
                {children}
            </button>
        </>
    );
};

export default Button;