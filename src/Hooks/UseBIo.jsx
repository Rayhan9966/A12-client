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
// 
// const axiosSecure = useAxiosSecure();
// const { user} = useAuth();
// const { refetch, data: bdata = [] } = useQuery({
//     queryKey: ['bdata', user?.email],
//     queryFn: async() => {
//         const res = await axiosSecure.get(`/biodata?email=${user.email}`);
//         return res.data;
//     }
// })

// return [bdata, refetch]
// };
};

export default UseBIo;