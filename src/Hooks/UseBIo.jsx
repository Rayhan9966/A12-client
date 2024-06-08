import { useEffect, useState } from 'react';

const UseBIo = () => {
    const [bdata,setBdata]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/biodata')
        .then(res=>res.json())
        .then(data=>{
            setBdata(data);
setLoading(false);
        });
    },[])
    return[bdata,loading]
};

export default UseBIo;