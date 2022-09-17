import { useState, useEffect } from 'react';

function Hobbies({ topSongs, song }) {

    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    return (
        <>
            <section className="freetime">
                {
                    pageLang === 'ES' ? (
                        <div>
                            <h3>Mis hobbies</h3>
                            <p>Suelo ver series y peliculas de suspenso, sci-fi y tecnología.
                                {/* <br />Actualmente me encuentro viendo <a href='https://www.netflix.com/title/80234304' rel='noreferrer' target='_blank' className='special-text'>Gambito de Dama</a> */}
                                <br />
                                <br />Entre las series que recomiendo están:
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80114790' rel='noreferrer' target='_blank' className='special-text'>Dark</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80234484' rel='noreferrer' target='_blank' className='special-text'>The OA</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80025744' rel='noreferrer' target='_blank' className='special-text'>Sense8</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80106554' rel='noreferrer' target='_blank' className='special-text'>Travelers</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80195724' rel='noreferrer' target='_blank' className='special-text'>Black Mirror</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.hbomax.com/co/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ' rel='noreferrer' target='_blank' className='special-text'>Rick And Morty</a>
                                <br />
                                <br />Entre las Peliculas que recomiendo están:
                                <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=fRXxlS48pkQ' rel='noreferrer' target='_blank' className='special-text'>Split</a>
                                <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=ReJ0Gngipfk' rel='noreferrer' target='_blank' className='special-text'>Wanted</a>
                            </p>

                            <p>También suelo escuchar música, creo es lo que más hago en mi día a día.</p>
                            <p>🎧&nbsp;&nbsp;Ahora mismo estoy escuchando...</p>
                            {
                                !song.is_playing ? (
                                    <>
                                        <div className='song-listing'>
                                            <a className='song-listing-a' title="Perfil de Spotify" aria-label="Perfil de Spotify" href="https://open.spotify.com/user/7we4a4d6uxjzfas54y1vp35bb?si=55a9071e60c2466f" rel='noreferrer' target='_blank'>
                                                <svg className='song-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="51.56" y1="61.46" x2="51.988" y2="14.3" gradientUnits="userSpaceOnUse"><stop stopColor="#23cf5f" /><stop offset="1" stopColor="#60ff98" /></linearGradient><linearGradient id="1" gradientUnits="userSpaceOnUse" x1="53.57" y1="62.47" x2="53.798" y2="13.896"><stop stopColor="#2e3436" /><stop offset="1" stopColor="#555753" /></linearGradient></defs><g transform="matrix(.99999 0 0 .99999-28.371-14.278)" enableBackground="new"><circle r="24" cy="38.28" cx="52.37" fill="url(#1)" /><path d="m52.38 14.285c-13.255 0-24 10.745-24 24 0 13.255 10.745 24 24 24 13.255 0 24-10.746 24-24 0-13.255-10.745-24-24-24m-3.522 12.526c7.05 0 14.462 1.45 19.878 4.631.73.413 1.237 1.037 1.237 2.18 0 1.308-1.052 2.249-2.264 2.249-.489 0-.779-.119-1.237-.37-4.344-2.605-11.09-4.04-17.605-4.04-3.254 0-6.56.331-9.587 1.153-.349.088-.789.262-1.231.262-1.28 0-2.263-1.013-2.263-2.293 0-1.304.808-2.036 1.68-2.294 3.421-1.01 7.24-1.478 11.391-1.478m-.489 8.247c6.282 0 12.359 1.565 17.14 4.424.801.459 1.096 1.043 1.096 1.897 0 1.039-.827 1.879-1.871 1.879-.521 0-.848-.21-1.202-.416-3.904-2.317-9.315-3.856-15.24-3.856-3.039 0-5.662.426-7.833 1-.468.129-.73.267-1.168.267-1.032 0-1.875-.841-1.875-1.882 0-1.021.495-1.723 1.493-2 2.698-.741 5.453-1.313 9.463-1.313m.329 7.837c5.252 0 9.932 1.205 13.96 3.619.599.35.951.708.951 1.595 0 .865-.704 1.501-1.493 1.501-.388 0-.653-.135-1.016-.356-3.478-2.104-7.815-3.211-12.418-3.211-2.568 0-5.153.329-7.57.833-.393.085-.888.237-1.183.237-.911 0-1.519-.724-1.519-1.508 0-1.01.582-1.511 1.306-1.649 2.964-.676 5.917-1.061 8.983-1.061" fill="url(#0)" /></g></svg>
                                                <div className='song-listing-a-d'>
                                                    <h5 className="special-text song-title">Nada... pero puedes ver mi perfil acá</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <p>Este mes mi top de canciones es:</p>
                                        <div className='song-list'>
                                            {
                                                topSongs.map((value) => {
                                                    return (
                                                        <div key={value.title} className='song'>
                                                            <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
                                                                <img className='song-svg' src={value.albumImg} alt={value.title} />
                                                                <div className='song-a-d'>
                                                                    <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='song-listing'>
                                            <a className='song-listing-a' title={song != undefined ? song.item.name : ''} aria-label={song != undefined ? song.item.name : ''} href={song != undefined ? song.item.external_urls.spotify : ''} rel='noreferrer' target='_blank'>
                                                <img className='song-svg' src={song != undefined ? song.item.album.images[0].url : ''} alt={song != undefined ? song.item.name : ''} />
                                                <div className='song-listing-a-d'>
                                                    <h5 className="special-text song-title">{song != undefined ? song.item.name : ''} - {song != undefined ? song.item.artists.map((_artist) => _artist.name).join(', ') : ''}</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <p>Este mes mi top de canciones es:</p>
                                        <div className='song-list'>
                                            {
                                                topSongs.map((value) => {
                                                    return (
                                                        <div key={value.title} className='song'>
                                                            <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
                                                                <img className='song-svg' src={value.albumImg} alt={value.title} />
                                                                <div className='song-a-d'>
                                                                    <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    ) : (
                        <div>
                            <h3>Hobbies</h3>
                            <p>I usually watch thriller, sci-fi and techno series and movies.
                                {/* <br />I'm currently watching <a href='https://www.netflix.com/title/80234304' rel='noreferrer' target='_blank' className='special-text'>Queen's Gambit</a> */}
                                <br />
                                <br />Among the series I recommend are:
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80114790' rel='noreferrer' target='_blank' className='special-text'>Dark</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80234484' rel='noreferrer' target='_blank' className='special-text'>The OA</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80025744' rel='noreferrer' target='_blank' className='special-text'>Sense8</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80106554' rel='noreferrer' target='_blank' className='special-text'>Travelers</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80195724' rel='noreferrer' target='_blank' className='special-text'>Black Mirror</a>
                                <br />&nbsp;&nbsp;- <a href='https://www.hbomax.com/co/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ' rel='noreferrer' target='_blank' className='special-text'>Rick And Morty</a>
                                <br />
                                <br />Among the films I recommend are:
                                <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=fRXxlS48pkQ' rel='noreferrer' target='_blank' className='special-text'>Split</a>
                                <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=ReJ0Gngipfk' rel='noreferrer' target='_blank' className='special-text'>Wanted</a>
                            </p>

                            <p>I also listen to music, I think that's what I do most in my day to day life.</p>
                            <p>🎧&nbsp;&nbsp;Right now I'm listening to...</p>
                            {
                                 !song.is_playing  ? (
                                    <>
                                        <div className='song-listing'>
                                            <a className='song-listing-a' title="Spotify Profile" aria-label="Spotify Profile" href="https://open.spotify.com/user/7we4a4d6uxjzfas54y1vp35bb?si=55a9071e60c2466f" rel='noreferrer' target='_blank'>
                                                <svg className='song-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="51.56" y1="61.46" x2="51.988" y2="14.3" gradientUnits="userSpaceOnUse"><stop stopColor="#23cf5f" /><stop offset="1" stopColor="#60ff98" /></linearGradient><linearGradient id="1" gradientUnits="userSpaceOnUse" x1="53.57" y1="62.47" x2="53.798" y2="13.896"><stop stopColor="#2e3436" /><stop offset="1" stopColor="#555753" /></linearGradient></defs><g transform="matrix(.99999 0 0 .99999-28.371-14.278)" enableBackground="new"><circle r="24" cy="38.28" cx="52.37" fill="url(#1)" /><path d="m52.38 14.285c-13.255 0-24 10.745-24 24 0 13.255 10.745 24 24 24 13.255 0 24-10.746 24-24 0-13.255-10.745-24-24-24m-3.522 12.526c7.05 0 14.462 1.45 19.878 4.631.73.413 1.237 1.037 1.237 2.18 0 1.308-1.052 2.249-2.264 2.249-.489 0-.779-.119-1.237-.37-4.344-2.605-11.09-4.04-17.605-4.04-3.254 0-6.56.331-9.587 1.153-.349.088-.789.262-1.231.262-1.28 0-2.263-1.013-2.263-2.293 0-1.304.808-2.036 1.68-2.294 3.421-1.01 7.24-1.478 11.391-1.478m-.489 8.247c6.282 0 12.359 1.565 17.14 4.424.801.459 1.096 1.043 1.096 1.897 0 1.039-.827 1.879-1.871 1.879-.521 0-.848-.21-1.202-.416-3.904-2.317-9.315-3.856-15.24-3.856-3.039 0-5.662.426-7.833 1-.468.129-.73.267-1.168.267-1.032 0-1.875-.841-1.875-1.882 0-1.021.495-1.723 1.493-2 2.698-.741 5.453-1.313 9.463-1.313m.329 7.837c5.252 0 9.932 1.205 13.96 3.619.599.35.951.708.951 1.595 0 .865-.704 1.501-1.493 1.501-.388 0-.653-.135-1.016-.356-3.478-2.104-7.815-3.211-12.418-3.211-2.568 0-5.153.329-7.57.833-.393.085-.888.237-1.183.237-.911 0-1.519-.724-1.519-1.508 0-1.01.582-1.511 1.306-1.649 2.964-.676 5.917-1.061 8.983-1.061" fill="url(#0)" /></g></svg>
                                                <div className='song-listing-a-d'>
                                                    <h5 className="special-text song-title">Nothing... but here is my profile</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <p>This month my top songs are:</p>
                                        <div className='song-list'>
                                            {
                                                topSongs.map((value) => {
                                                    return (
                                                        <div key={value.title} className='song'>
                                                            <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
                                                                <img className='song-svg' src={value.albumImg} alt={value.title} />
                                                                <div className='song-a-d'>
                                                                    <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='song-listing'>
                                            <a className='song-listing-a' title={song != undefined ? song.item.name : ''} aria-label={song != undefined ? song.item.name : ''} href={song != undefined ? song.item.external_urls.spotify : ''} rel='noreferrer' target='_blank'>
                                                <img className='song-svg' src={song != undefined ? song.item.album.images[0].url : ''} alt={song != undefined ? song.item.name : ''} />
                                                <div className='song-listing-a-d'>
                                                    <h5 className="special-text song-title">{song != undefined ? song.item.name : ''} - {song != undefined ? song.item.artists.map((_artist) => _artist.name).join(', ') : ''}</h5>
                                                </div>
                                            </a>
                                        </div>
                                        <p>This month my top songs are:</p>
                                        <div className='song-list'>
                                            {
                                                topSongs.map((value) => {
                                                    return (
                                                        <div key={value.title} className='song'>
                                                            <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
                                                                <img className='song-svg' src={value.albumImg} alt={value.title} />
                                                                <div className='song-a-d'>
                                                                    <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )
                }
            </section>
        </>
    );
}

export default Hobbies;
