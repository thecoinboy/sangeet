import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/shazamApi.js'
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
    const dispatch = useDispatch()
    const {data, isFetching, error} = useGetTopChartsQuery();
    const {activeSongs, isPlaying } =  useSelector((state => state.player)) 
    if(isFetching)  return <Loader title="Loding songs....."  />
    if(error) return <Error title="Error"  />

    return (
        <div className="flex flex-col">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-10">
                <h2 className="font-bold text-3xl text-white">Discover</h2>
                <select
                    onChange={() => { }}
                    value=""
                    className="bg-black text-gray-300 rounded-lg outline-none sm:mt-0 mt-5 p-3 text-sm"
                >
                    {
                        genres.map((genre) => <option key={genre.value} value={genre.value}> {genre.title}  </option>)
                    }
                </select>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8 ">
                {
                    data.map((song, i) => (
                        <SongCard 
                        data={data}
                        key={i}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSongs={activeSongs}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Discover;
