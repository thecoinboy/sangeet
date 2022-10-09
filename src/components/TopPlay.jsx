import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { useGetTopChartsQuery } from "../redux/shazamApi";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from '../components/PlayPause.jsx'

const TopChartCart = ({ song, i, isPlaying, activeSong, handlePause, handlePlay }) => (
  <div className="flex flex-row items-center hover:bg-[#4c426e] py-2 p-2 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3"> {i + 1}. </h3>
    <div className="flex flex-1 flex-row items-center">
      <img src={song?.images?.coverart} alt="" className="w-16 h-16 rounded-lg" />
      <div className="flex flex-1 flex-col justify-center mx-3">
        <Link className="" to={`/songs/${song.key}`}>
          <p className="text-md text-white font-bold "> {song?.title} </p>
        </Link>
        <Link className="" to={`/artists/${song.artists[0].adamid}`}>
          <p className="text-sm text-gray-300 mt-1"> {song?.subtitle} </p>
        </Link>
      </div>
    </div>
    <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePause} handlePlay={handlePlay} />
  </div>
)

const TopPlay = ({ song, i }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null)
  const topPlays = data?.slice(0, 5)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" })
  })

  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true))
  }
  const handlePause = () => {
    dispatch(playPause(false))
  }
  return (
    <div ref={divRef} className="ml-0 xl:ml-6 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col mt-5">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl text-white font-bold"> Top Charts</h2>
          <Link to='/top-charts'> <p className="text-base text-gray-300 cursor-pointer"> See more </p> </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {
            topPlays?.map((song, i) => <TopChartCart 
            isPlaying={isPlaying} activeSong={activeSong} song={song} key={song.key} i={i} handlePause={handlePause} handlePlay={()=>handlePlay(song, i)} />)
          }
        </div>
      </div>
      <div className="flex flex-col item-center">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl text-white font-bold"> Top Asrtist</h2>
          <Link to='/top-charts'> <p className="text-base text-gray-300 cursor-pointer"> See more </p> </Link>
        </div>
        <Swiper
          className="mt-4"
          slidesPerView={0}
          spaceBetween={20}
          loop={true}
        >
          {
            topPlays?.map((song, i) => {
              return <SwiperSlide key={song.key} style={{ width: "100px", height: "auto" }} className="shadow-lg rounded-full h-auto animate-slideright">
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img src={song?.images.background} alt="" className="rounded-full w-full h-auto object-cover" />
                </Link>
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay;