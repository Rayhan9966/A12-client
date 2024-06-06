import React from 'react';

const sectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto md:w-3/12 text-center mb-5' >
            <p className='text-green-900 font-bold text-4xl uppercase mt-5'>~~~~~{heading}~~~~~</p>
            <h3>{subHeading}</h3>
        </div>
    );
};

export default sectionTitle;