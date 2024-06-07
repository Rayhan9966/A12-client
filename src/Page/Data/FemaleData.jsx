import React from 'react';
import UseBIo from '../../Hooks/UseBIo';
import DataCatagory from '../Data/DataCatagory';

const FemaleData = () => {
    const[bdata]=UseBIo();
    const Female=bdata.filter(profile=>profile.BiodataType=== 'Female');
    return (
        <div>
            <DataCatagory bdata={Female}></DataCatagory>
        </div>
    );
};

export default FemaleData;