import { useState, useEffect } from 'react';

function Index() {

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
            {
                pageLang === 'ES' ? (
                    <section className='about'>
                        <div className='img-container'>
                            <img src='/static/images/profile-min-modified.png' width='200' height='200' alt='' />
                        </div>
                        <div className='about-reg'>
                            <h1>Hola, soy Crihstian👋</h1>
                            <h2>Dejame <span className='special-text'>presentarme...</span></h2>
                            <p>Soy Crihstian Molina, Desarrollador de Software Colombiano.</p>
                            <p>Actualmente trabajo en <a className='special-text' target='_blank' rel='noreferrer' href='https://n5now.com/'>N5 Now</a> como Desarrollador Full Stack.</p>
                            <p>Me encanta la música, los videojuegos y el código.</p>
                        </div>
                    </section>
                ) : (
                    <section className='about'>
                        <div className='img-container'>
                            <img src='/static/images/profile-min-modified.png' width='200' height='200' alt='' />
                        </div>
                        <div className='about-reg'>
                            <h1>Hi, I'm Crihstian👋</h1>
                            <h2>Let me introduce <span className='special-text'>myself...</span></h2>
                            <p>I'm Crihstian Molina, a Colombian Software Developer.</p>
                            <p>I'm currently working at <a className='special-text' target='_blank' rel='noreferrer' href='https://n5now.com/'>N5 Now</a> as Full Stack Developer.</p>
                            <p>I really love music, videogames and code.</p>
                        </div>
                    </section>
                )
            }
        </>
    );
}

export default Index;
