import { useEffect, useState } from 'react';

const UseBIo = () => {
    const [bdata,setBdata]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('BData.json')
        .then(res=>res.json())
        .then(data=>{
            setBdata(data);
setLoading(false);
        });
    },[])
    return[bdata,loading]
};

export default UseBIo;