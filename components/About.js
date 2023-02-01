import { useState, useEffect } from 'react';

// function About({ topSongs, song }) {
function About() {

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
                            <h1>Sobre mi</h1>
                            <p>Mi nombre es Crihstian, nací y crecí en Cali, Colombia, desde pequeño me gustaban las computadoras, las consolas de videojuegos, y la tecnología en general.</p>
                            <p>Durante la mayor parte de mi niñez fuí muy curioso, me encantaba entender cómo funcionaban las cosas, al punto que deconstruía o destruía las cosas, con el fin de entender su funcionamiento.</p>
                            <p>Hay un dicho/frase que me decían mucho los adultos, y era: <i>"Usted desarma hasta un balín"</i>.</p>
                            <p>En mi adolescencia temprana tuve mi primera computadora, una HP Compaq 6300 MT Pro, recuerdo mucho el modelo porque estaba obsesionado con esa maquina.</p>
                            <p>Tenía 16 Gigabytes de RAM, un procesador i5 2400 y como 1 Terabyte en HDD, eso de 2012 a 2019. Durante un tiempo le tenía gráfica, era una maquinota.</p>
                            <p>En hice como mis primeras lineas de código, lineas de configuración de servidores de Minecraft, configuración de Mods, scripts en JavaScript para "hackear" jueguitos online, entre otras cosas.</p>
                            <p>Recuerdo mucho haber querido aprender a programar para crear Mods para Minecraft, entonces me descargué eclipse y empecé la aventura que no duró más de la semana.</p>
                            <p>Yo quería aprender a programar rápido, no entendía sobre clases, sobre objetos, sobre instancias, yo veía videos y no entendía nada, por lo que desistí de aprender a programar en aquel tiempo.</p>
                            <h3>Vida Profesional</h3>
                            <p>Alrededor del año 2016 mi tío, me pasó un video de la publicidad de un Curso de Programación Básica en Platzi, ya que el quería que yo aprendiera a programar.</p>
                            <p>No aprendí a programar con ese curso, pero, entendí algunas cosas de lado de programación, variables, ciclos, condiciones, y demás. </p>
                            <p>No fue sino hasta 2018 que uno de los compañeros trabajo de mi tío empezó a mentorearme en temas de programación que le agarré más la onda.</p>
                            <p>Tiempo después me inscribí al TPS del SENA, luego conseguí contrato de prácticas con una empresa llamada 3DEV en 2019, y terminé desarrollando aplicaciones con .NET.</p>
                            <p>Básicamente así fue como entré al mundo de la programación.</p>
                            {/* <h3>Que no nos falte el arte</h3>
                            <p>Como lo mencioné antes me encanta la música, durante gran parte de mi niñez, participé en diferentes eventos artisticos del colegio. Presentaciones, peñas e Izadas a la bandera.</p>
                            <p>Eso ultimo gracias a que el colegio en el que estudié la primaria (Institución Educativa Ciudad Córdoba, Sede Ppal) tenía un profesor de canto llamado Armando Córdoba, y tenía un coro escolar.</p>
                            <p>De esa misma institución, y de ese mismo coro, salió Luis Araque, un pelao que le metió mucho empeño al canto y a la música, ganó el Factor X y que hoy por hoy canta para el Grupo Niche</p>
                            <p>En el bachillerato perdí un poco el interés por la música y el canto, perdí un año (séptimo grado), lo recuperé y me cambié de Colegio.</p>
                            <p>Me pasé para la Institución Educativa de Santa Librada, un Colegio que tiene unos 200 años de historia, y que, también tenía un coro y dos profesores de música, Oliva Agudelo y Oscar Montenegro.</p>
                            <p>En ese coro denoté que mi registro ya no era baritono/tenor como en mi niñez, ya tenía una voz más grave por lo que era más bien bajo/baritono.</p>
                            <p>En las prácticas del coro veía al profesor Montenegro tocar la guitarra, por lo que me animé a tocar la guitarra, ver tutoriales en YouTube y a pedirle un par de clases, algún par de cosas aprendí de él.</p>
                            <p>Tiempo después me refirieron con un estudiante del IPC. Hamilton Marin, que de las cosas que aprendí de él, una, es que la música es más una carrera de resistencia, no de velocidad. Eso fue hasta 2018.</p>
                            <p>En 2019 mientras que hacía el último año del bachiller, decidí inscribirme al IPC, para estudiar música, dos veces me inscribí, dos veces no quedé, y me rendí.</p>
                            <p>En su lugar me dediqué de lleno a la programación y al tema de la informatica, ya que los profesores, mi tío y varios compañeros decían que me iba muy bien en ello. No fue una mala decisión.</p>
                            <p>En 2022 cuando logré un trabajo que me daba más tiempo libre comencé a estudiar bien el instrumento que es la guitarra, todavia sigo aprendiendo del instrumento, de teoria y de música.</p>
                            <p>Toca esperar, y venir unos meses más tarde, a ver qué ha cambiado para ese entonces.</p> */}
                        </div>
                    ) : (
                        <div>
                            <h1>About me</h1>
                            <p>My name is Crihstian, I was born and raised in Cali, Colombia, since I was a kid I liked computers, video game consoles, and technology in general.</p>
                            <p>During most of my childhood I was very curious, I loved to understand how things worked, to the point that I deconstructed or destroyed things, in order to understand how they worked.</p>
                            <p>There is a saying/phrase that adults used to tell me a lot, and it was: "You take apart even a pellet".</p>
                            <p>In my early teens I had my first computer, an HP Compaq 6300 MT Pro, I remember the model very well because I was obsessed with that machine.</p>
                            <p>It had 16 Gigabytes of RAM, an i5 2400 processor and about 1 Terabyte in HDD, that from 2012 to 2019. For a while I had graphics on it, it was a machine.</p>
                            <p>I did my first lines of code, lines of Minecraft server configuration, Mods configuration, JavaScript scripts to "hack" online games, among other things.</p>
                            <p>I remember very much wanting to learn how to program to create Mods for Minecraft, so I downloaded eclipse and started the adventure that didn't last more than a week.</p>
                            <p>I wanted to learn to program fast, I didn't understand about classes, about objects, about instances, I watched videos and I didn't understand anything, so I gave up learning to program at that time.</p>
                            <h3>Professional Life</h3>
                            <p>Around 2016 my uncle, passed me a video advertising a Basic Programming Course in Platzi, as he wanted me to learn to program.</p>
                            <p>I didn't learn to program with that course, but, I did understand some things on the programming side, variables, cycles, conditions, and so on.</p>
                            <p>It wasn't until 2018 that one of my uncle's coworkers started mentoring me on programming topics that I got more into it.</p>
                            <p>Some time later I enrolled in SENA's TPS, then got an internship contract with a company called 3DEV in 2019, and ended up developing applications with .NET.</p>
                            <p>Basically that's how I entered the world of programming.</p>
                        </div>
                    )
                }
            </section>
        </>
    );
}

export default About;

// <div>
//     <h3>Hobbies</h3>
//     <p>Suelo ver series y peliculas de suspenso, sci-fi y tecnología.
//         {/* <br />Actualmente me encuentro viendo <a href='https://www.netflix.com/title/80234304' rel='noreferrer' target='_blank' className='special-text'>Gambito de Dama</a> */}
//         <br />
//         <br />Entre las series que recomiendo están:
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80114790' rel='noreferrer' target='_blank' className='special-text'>Dark</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80234484' rel='noreferrer' target='_blank' className='special-text'>The OA</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80025744' rel='noreferrer' target='_blank' className='special-text'>Sense8</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80106554' rel='noreferrer' target='_blank' className='special-text'>Travelers</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80195724' rel='noreferrer' target='_blank' className='special-text'>Black Mirror</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.hbomax.com/co/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ' rel='noreferrer' target='_blank' className='special-text'>Rick And Morty</a>
//         <br />
//         <br />Entre las Peliculas que recomiendo están:
//         <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=fRXxlS48pkQ' rel='noreferrer' target='_blank' className='special-text'>Split</a>
//         <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=ReJ0Gngipfk' rel='noreferrer' target='_blank' className='special-text'>Wanted</a>
//     </p>

//     <p>También suelo escuchar música, creo es lo que más hago en mi día a día.</p>
//     <p>🎧&nbsp;&nbsp;Ahora mismo estoy escuchando...</p>

//     {
//         !song?.is_playing ? (
//             <>
//                 <div className='song-listing'>
//                     <a className='song-listing-a' title="Perfil de Spotify" aria-label="Perfil de Spotify" href="https://open.spotify.com/user/7we4a4d6uxjzfas54y1vp35bb?si=55a9071e60c2466f" rel='noreferrer' target='_blank'>
//                         <svg className='song-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="51.56" y1="61.46" x2="51.988" y2="14.3" gradientUnits="userSpaceOnUse"><stop stopColor="#23cf5f" /><stop offset="1" stopColor="#60ff98" /></linearGradient><linearGradient id="1" gradientUnits="userSpaceOnUse" x1="53.57" y1="62.47" x2="53.798" y2="13.896"><stop stopColor="#2e3436" /><stop offset="1" stopColor="#555753" /></linearGradient></defs><g transform="matrix(.99999 0 0 .99999-28.371-14.278)" enableBackground="new"><circle r="24" cy="38.28" cx="52.37" fill="url(#1)" /><path d="m52.38 14.285c-13.255 0-24 10.745-24 24 0 13.255 10.745 24 24 24 13.255 0 24-10.746 24-24 0-13.255-10.745-24-24-24m-3.522 12.526c7.05 0 14.462 1.45 19.878 4.631.73.413 1.237 1.037 1.237 2.18 0 1.308-1.052 2.249-2.264 2.249-.489 0-.779-.119-1.237-.37-4.344-2.605-11.09-4.04-17.605-4.04-3.254 0-6.56.331-9.587 1.153-.349.088-.789.262-1.231.262-1.28 0-2.263-1.013-2.263-2.293 0-1.304.808-2.036 1.68-2.294 3.421-1.01 7.24-1.478 11.391-1.478m-.489 8.247c6.282 0 12.359 1.565 17.14 4.424.801.459 1.096 1.043 1.096 1.897 0 1.039-.827 1.879-1.871 1.879-.521 0-.848-.21-1.202-.416-3.904-2.317-9.315-3.856-15.24-3.856-3.039 0-5.662.426-7.833 1-.468.129-.73.267-1.168.267-1.032 0-1.875-.841-1.875-1.882 0-1.021.495-1.723 1.493-2 2.698-.741 5.453-1.313 9.463-1.313m.329 7.837c5.252 0 9.932 1.205 13.96 3.619.599.35.951.708.951 1.595 0 .865-.704 1.501-1.493 1.501-.388 0-.653-.135-1.016-.356-3.478-2.104-7.815-3.211-12.418-3.211-2.568 0-5.153.329-7.57.833-.393.085-.888.237-1.183.237-.911 0-1.519-.724-1.519-1.508 0-1.01.582-1.511 1.306-1.649 2.964-.676 5.917-1.061 8.983-1.061" fill="url(#0)" /></g></svg>
//                         <div className='song-listing-a-d'>
//                             <h5 className="special-text song-title">Nada... pero puedes ver mi perfil acá</h5>
//                         </div>
//                     </a>
//                 </div>
//                 <p>Este mes mi top de canciones es:</p>
//                 <div className='song-list'>
//                     {
//                         topSongs.map((value) => {
//                             return (
//                                 <div key={value.title} className='song'>
//                                     <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
//                                         <img className='song-svg' src={value.albumImg} alt={value.title} />
//                                         <div className='song-a-d'>
//                                             <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
//                                         </div>
//                                     </a>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         ) : (
//             <>
//                 <div className='song-listing'>
//                     <a className='song-listing-a' title={song != undefined ? song.item.name : ''} aria-label={song != undefined ? song.item.name : ''} href={song != undefined ? song.item.external_urls.spotify : ''} rel='noreferrer' target='_blank'>
//                         <img className='song-svg' src={song != undefined ? song.item.album.images[0].url : ''} alt={song != undefined ? song.item.name : ''} />
//                         <div className='song-listing-a-d'>
//                             <h5 className="special-text song-title">{song != undefined ? song.item.name : ''} - {song != undefined ? song.item.artists.map((_artist) => _artist.name).join(', ') : ''}</h5>
//                         </div>
//                     </a>
//                 </div>
//                 <p>Este mes mi top de canciones es:</p>
//                 <div className='song-list'>
//                     {
//                         topSongs.map((value) => {
//                             return (
//                                 <div key={value.title} className='song'>
//                                     <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
//                                         <img className='song-svg' src={value.albumImg} alt={value.title} />
//                                         <div className='song-a-d'>
//                                             <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
//                                         </div>
//                                     </a>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
//     <p>I usually watch thriller, sci-fi and techno series and movies.
//         {/* <br />I'm currently watching <a href='https://www.netflix.com/title/80234304' rel='noreferrer' target='_blank' className='special-text'>Queen's Gambit</a> */}
//         <br />
//         <br />Among the series I recommend are:
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80114790' rel='noreferrer' target='_blank' className='special-text'>Dark</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80234484' rel='noreferrer' target='_blank' className='special-text'>The OA</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80025744' rel='noreferrer' target='_blank' className='special-text'>Sense8</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80106554' rel='noreferrer' target='_blank' className='special-text'>Travelers</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.netflix.com/title/80195724' rel='noreferrer' target='_blank' className='special-text'>Black Mirror</a>
//         <br />&nbsp;&nbsp;- <a href='https://www.hbomax.com/co/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ' rel='noreferrer' target='_blank' className='special-text'>Rick And Morty</a>
//         <br />
//         <br />Among the films I recommend are:
//         <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=fRXxlS48pkQ' rel='noreferrer' target='_blank' className='special-text'>Split</a>
//         <br />&nbsp;&nbsp;- <a href='https://play.google.com/store/movies/details?id=ReJ0Gngipfk' rel='noreferrer' target='_blank' className='special-text'>Wanted</a>
//     </p>

//     <p>I also listen to music, I think that's what I do most in my day to day life.</p>
//     <p>🎧&nbsp;&nbsp;Right now I'm listening to...</p>
//     {
//          !song?.is_playing  ? (
//             <>
//                 <div className='song-listing'>
//                     <a className='song-listing-a' title="Spotify Profile" aria-label="Spotify Profile" href="https://open.spotify.com/user/7we4a4d6uxjzfas54y1vp35bb?si=55a9071e60c2466f" rel='noreferrer' target='_blank'>
//                         <svg className='song-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="51.56" y1="61.46" x2="51.988" y2="14.3" gradientUnits="userSpaceOnUse"><stop stopColor="#23cf5f" /><stop offset="1" stopColor="#60ff98" /></linearGradient><linearGradient id="1" gradientUnits="userSpaceOnUse" x1="53.57" y1="62.47" x2="53.798" y2="13.896"><stop stopColor="#2e3436" /><stop offset="1" stopColor="#555753" /></linearGradient></defs><g transform="matrix(.99999 0 0 .99999-28.371-14.278)" enableBackground="new"><circle r="24" cy="38.28" cx="52.37" fill="url(#1)" /><path d="m52.38 14.285c-13.255 0-24 10.745-24 24 0 13.255 10.745 24 24 24 13.255 0 24-10.746 24-24 0-13.255-10.745-24-24-24m-3.522 12.526c7.05 0 14.462 1.45 19.878 4.631.73.413 1.237 1.037 1.237 2.18 0 1.308-1.052 2.249-2.264 2.249-.489 0-.779-.119-1.237-.37-4.344-2.605-11.09-4.04-17.605-4.04-3.254 0-6.56.331-9.587 1.153-.349.088-.789.262-1.231.262-1.28 0-2.263-1.013-2.263-2.293 0-1.304.808-2.036 1.68-2.294 3.421-1.01 7.24-1.478 11.391-1.478m-.489 8.247c6.282 0 12.359 1.565 17.14 4.424.801.459 1.096 1.043 1.096 1.897 0 1.039-.827 1.879-1.871 1.879-.521 0-.848-.21-1.202-.416-3.904-2.317-9.315-3.856-15.24-3.856-3.039 0-5.662.426-7.833 1-.468.129-.73.267-1.168.267-1.032 0-1.875-.841-1.875-1.882 0-1.021.495-1.723 1.493-2 2.698-.741 5.453-1.313 9.463-1.313m.329 7.837c5.252 0 9.932 1.205 13.96 3.619.599.35.951.708.951 1.595 0 .865-.704 1.501-1.493 1.501-.388 0-.653-.135-1.016-.356-3.478-2.104-7.815-3.211-12.418-3.211-2.568 0-5.153.329-7.57.833-.393.085-.888.237-1.183.237-.911 0-1.519-.724-1.519-1.508 0-1.01.582-1.511 1.306-1.649 2.964-.676 5.917-1.061 8.983-1.061" fill="url(#0)" /></g></svg>
//                         <div className='song-listing-a-d'>
//                             <h5 className="special-text song-title">Nothing... but here is my profile</h5>
//                         </div>
//                     </a>
//                 </div>
//                 <p>This month my top songs are:</p>
//                 <div className='song-list'>
//                     {
//                         topSongs.map((value) => {
//                             return (
//                                 <div key={value.title} className='song'>
//                                     <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
//                                         <img className='song-svg' src={value.albumImg} alt={value.title} />
//                                         <div className='song-a-d'>
//                                             <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
//                                         </div>
//                                     </a>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         ) : (
//             <>
//                 <div className='song-listing'>
//                     <a className='song-listing-a' title={song != undefined ? song.item.name : ''} aria-label={song != undefined ? song.item.name : ''} href={song != undefined ? song.item.external_urls.spotify : ''} rel='noreferrer' target='_blank'>
//                         <img className='song-svg' src={song != undefined ? song.item.album.images[0].url : ''} alt={song != undefined ? song.item.name : ''} />
//                         <div className='song-listing-a-d'>
//                             <h5 className="special-text song-title">{song != undefined ? song.item.name : ''} - {song != undefined ? song.item.artists.map((_artist) => _artist.name).join(', ') : ''}</h5>
//                         </div>
//                     </a>
//                 </div>
//                 <p>This month my top songs are:</p>
//                 <div className='song-list'>
//                     {
//                         topSongs.map((value) => {
//                             return (
//                                 <div key={value.title} className='song'>
//                                     <a className='song-a' title={value.title} aria-label={value.title} href={value.songUrl} rel='noreferrer' target='_blank'>
//                                         <img className='song-svg' src={value.albumImg} alt={value.title} />
//                                         <div className='song-a-d'>
//                                             <h5 className="special-text song-title">{value.title} - {value.artist}</h5>
//                                         </div>
//                                     </a>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// </div>