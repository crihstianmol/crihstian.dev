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
                            <h1>Hola Mundo👋</h1>
                            <h2>Dejame <span className='special-text'>presentarme...</span></h2>
                            <p>Soy Crihstian Molina, un Desarrollador de Software Colombiano.</p>
                            <p>Actualmente trabajo como Freelancer en varios proyectos de Software a Medida. Para empresas en Colombia, Argentina y Estados Unidos.</p>
                            <p>Me encanta la música, el café, los videojuegos y el código.</p>
                        </div>
                    </section>
                ) : (
                    <section className='about'>
                        <div className='img-container'>
                            <img src='/static/images/profile-min-modified.png' width='200' height='200' alt='' />
                        </div>
                        <div className='about-reg'>
                            <h1>Hello World👋</h1>
                            <h2>Let me introduce <span className='special-text'>myself...</span></h2>
                            <p>I'm Crihstian Molina, a Colombian Software Developer.</p>
                            <p>I am currently working as a Freelancer in several Custom Software projects. For companies in Colombia, Argentina and the United States.</p>
                            <p>I really love music, coffe, videogames and code.</p>
                        </div>
                    </section>
                )
            }
        </>
    );
}

export default Index;
