import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Bprofile from '../../layout/shared/Bprofile';
import UseBIo from '../../Hooks/UseBIo';
import DataCatagory from './DataCatagory';
import BioData from '../BioData';

const AllData = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const[bdata]=UseBIo();
    const Male=bdata.filter(profile=>profile.BiodataType=== 'Male');
    const Female=bdata.filter(profile=>profile.BiodataType=== 'Female');
    return (
        <div>
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>All Data</Tab>
    <Tab>Male Data</Tab>
    <Tab>Female Data</Tab>
  </TabList>
  <TabPanel>
  <div>
    
           <BioData></BioData>
        </div>
  </TabPanel>
  <TabPanel>
  <div>
   <div>
    <h1 className='text-3xl font-bold text-center'>~~~Total Male:{Male.length}~~~</h1>
   </div><br /><br />
            <DataCatagory bdata={Male}></DataCatagory>
        </div>
  </TabPanel>
  <TabPanel>
  <div>
    <h1 className='text-3xl font-bold text-center'>~~~Total Female:{Female.length}~~~</h1>
   </div><br /><br />
  <DataCatagory bdata={Female}></DataCatagory>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default AllData;