import React,{useState, useEffect} from 'react'
import './Load.css';
import RingLoader from 'react-spinners/RingLoader';

const Loader = () => {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },4000)
  
    },[])
  return (
    <div className='page'>
    <RingLoader
    color="#e2a205"
    size={250}
    loading={loading}
    />
    </div>
  )
}

export default Loader