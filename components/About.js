import { useState, useEffect } from 'react';

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
            {
                pageLang === 'ES' ? (
                    <section className='about'>
                        <div className='img-container'>
                            <img src='/static/images/profile-min-modified.png' width='200' height='200' alt='' />
                        </div>
                        <div className='about-reg'>
                            <h3>Hola mundo!</h3>
                            <h3>Soy <span className='special-text'>Crihstian Molina</span></h3>
                            <p>Soy Desarrollador de Software con más de dos años de experiencia en el sector de Tecnología, trabajando para pequeñas y medianas empresas.</p>
                            <p>Soy egresado del <a className='special-text' target='_blank' rel='noreferrer' href='https://www.sena.edu.co/'>SENA</a> y estudiante activo de <a className='special-text' target='_blank' rel='noreferrer' href='https://platzi.com/p/crihstianmol'>Platzi</a>, también soy egresado del programa del Ministerio de las TIC en <a className='special-text' target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Colombia/@4,-72z/'>Colombia 🇨🇴</a>, llamado <a className='special-text' target='_blank' rel='noreferrer' href='https://www.misiontic2022.gov.co/portal/'>MisionTIC2022</a>.</p>
                        </div>
                    </section>
                ) : (
                    <section className='about'>
                        <div className='img-container'>
                            <img src='/static/images/profile-min-modified.png' width='200' height='200' alt='' />
                        </div>
                        <div className='about-reg'>
                            <h3>Hello world!</h3>
                            <h3>I'm <span className='special-text'>Crihstian Molina</span></h3>
                            <p>I am a Software Developer with more than two years of experience in the Technology sector, working for small and medium sized companies.</p>
                            <p>I am a graduate of <a className='special-text' target='_blank' rel='noreferrer' href='https://www.sena.edu.co/'>SENA</a> and an active student of <a className='special-text' target='_blank' rel='noreferrer' href='https://platzi.com/p/crihstianmol'>Platzi</a>, I am also a graduate of the programme of the Ministry of ICT in <a className='special-text' target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Colombia/@4,-72z/'>Colombia 🇨🇴</a>,  <a className='special-text' target='_blank' rel='noreferrer' href='https://www.misiontic2022.gov.co/portal/'>MisionTIC2022</a>.</p>
                        </div>
                    </section>
                )
            }
        </>
    );
}

export default About;
