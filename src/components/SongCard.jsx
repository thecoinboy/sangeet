import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCard = ({song, isPlaying, data, activeSong, i}) => {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true))
  }
  const handlePause = () =>{
    dispatch(playPause(false))
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group ">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opactiy-70' : 'hidden'}`}>
          <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePause} handlePlay={handlePlay} />
        </div>
        <img src={song.images.coverart} alt="song_img" />
      </div>
      <div className="mt-5 flex flex-col">
        <p className='font-semibold text-lg text-white truncate'> <Link to={`/songs/${song.key}`}> {song.title} </Link> </p>
        <p className='text-gray-400 mt-1 text-sm truncate '> <Link to={song.artists?`/artist/${song.artists.adamid }`:'/top-artists'}> {song.subtitle} </Link> </p>
      </div>
    </div>
  )
}

export default SongCard;