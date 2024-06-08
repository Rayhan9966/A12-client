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
    key={profile._id}
    profile={profile}>

    </Bprofile>
)

                }
            </div> <br /><br />
            {/* //pagination */}
            <div className="flex justify-center space-x-1 dark:text-gray-800">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	<button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600">1</button>
	<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 2">2</button>
	<button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100" title="Page 3">3</button>

	<button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
</div>
        </div>
    );
};

export default BioData;