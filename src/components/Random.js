import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect( () => {
    //     fetchData();
    // }, [])

    // calling hook custom
    const {gif, loading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }


    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black
         flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 
            className='mt-[15px] text-2xl underline font-bold'>
            A Random Gif
            </h1>

            {
                loading ? (<Spinner/>):(<img src={gif} width="450"/>)
            }

            <button 
            onClick={clickHandler}
            className='w-10/12 mb-[20px] bg-white opacity-80 text-lg py-2 
            rounded-lg'>
                Genrate
            </button>
        </div>
    )
}

export default Random