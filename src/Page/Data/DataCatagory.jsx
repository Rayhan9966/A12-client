import React from 'react';
import Bprofile from '../../layout/shared/Bprofile';

const DataCatagory = ({bdata}) => {
    return (
        <div className='grid  gap-4 grid-cols-3'>
            {

bdata.map(profile=><Bprofile
    key={profile.BiodataId}
    profile={profile}>

    </Bprofile>
)
            }
        </div>
    );
};

export default DataCatagory;