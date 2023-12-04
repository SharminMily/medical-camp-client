import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useCamp = () => {
    const axiosPublic = useAxiosPublic()
    //  const [camp, setCamp] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/camps')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCamp(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: camp = [], isPending: loading, refetch} = useQuery({
        queryKey: ['camp'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })
    return  [camp, loading, refetch]
};

export default useCamp;