import React from 'react';
import DataCatagory from '../Data/DataCatagory';
import UseBIo from '../../Hooks/UseBIo';

const MaleData = () => {
    const[bdata]=UseBIo();
    const Male=bdata.filter(profile=>profile.BiodataType=== 'Male');
    return (
        <div>
            <DataCatagory bdata={Male}></DataCatagory>
        </div>
    );
};

export default MaleData;