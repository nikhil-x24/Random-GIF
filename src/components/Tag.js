import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState('');

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect( () => {
    //     fetchData();
    // },[] )

    // calling
    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value)
    }

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black
         flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 
            className='mt-[15px] text-2xl underline font-bold'>
            Random {tag} Gif
            </h1>

            {
                loading ? (<Spinner/>):(<img src= {gif} width="450"/>)
            }

            <input
            className='w-10/12 text-center text-lg py-2 rounded-lg mb-[3px]'
            onChange={changeHandler}
            value={tag}
            />

            <button 
            onClick={clickHandler}
            className='w-10/12 mb-[20px] bg-white opacity-80 text-lg py-2 
            rounded-lg'>
                Genrate
            </button>
        </div>
    )
}

export default Tag