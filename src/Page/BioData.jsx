import React, { useEffect, useState } from 'react';
import SectionTitle from '../layout/shared/SectionTitle';

import Bprofile from '../layout/shared/Bprofile';
import { Helmet } from 'react-helmet-async';
import UseBIo from '../Hooks/UseBIo';

const BioData = () => {
    const[bdata]=UseBIo();
    // const [bdata,setBdata]=useState([]);
    // useEffect(()=>{
    //     fetch('BData.json')
    //     .then(res=>res.json())
    //     .then(data=>setBdata(data))
    // })
    return (
        <div>
               <Helmet>
    <title>Bd Matrimonial | BIoData</title>
 </Helmet>
            <SectionTitle
            heading={"Biodata"}></SectionTitle>
            <div className='grid  gap-4 grid-cols-3'>
                {
bdata.map(profile=><Bprofile
    key={profile.BiodataId}
    profile={profile}>

    </Bprofile>
)

                }
            </div>
        </div>
    );
};

export default BioData;