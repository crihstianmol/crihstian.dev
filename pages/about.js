import NavRouter from "../components/NavRouter";
import About from "../components/About";
import { useState, useEffect } from 'react';
// import { getNowPlaying, getTopTracks } from '../lib/spotify';

const about = () => {
// const about = ({ topSongs, song }) => {
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);
    
    const aboutHeaderProps = {
        page:"About",
        title: "About me",
        description: pageLang == 'ES' ? 'Mis hobbies, aquí encontrarás las peliculas y series que he visto y recomiendo, también mi top de canciones del mes.' : 'My hobbies, here you will find the movies and series I have seen and recommend, also my top songs of the month.',
        image: '../static/images/hobbies-img.jpg'
    }
    return (
        <>
            <NavRouter headerprops={aboutHeaderProps}>
                {/* <About topSongs={topSongs} song={song} /> */}
                <About />
            </NavRouter>
        </>
    )

}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     let resSong = await getNowPlaying();
//     let song = null;
//     if (resSong.status === 204 || resSong.status > 400) {
//         song = null;
//     } else {
//         song = await resSong.json();
//     }

//     let resTopSongs = await getTopTracks();
//     let topSongs = [];
//     topSongs = await resTopSongs.json()
//     topSongs = topSongs.items.slice(0, 10).map((track) => ({
//         artist: track.artists.map((_artist) => _artist.name).join(', '),
//         songUrl: track.external_urls.spotify,
//         albumImg: track.album.images[0].url,
//         title: track.name
//     }));
//     // Pass data to the page via props
//     return { props: { topSongs, song } }
// }

export default about
