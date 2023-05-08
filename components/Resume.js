import { useState, useEffect } from 'react';


function Resume({ coursesPlatzi,
    coursesSena,
    coursesFCC,
    coursesUdea,
    coursesMintic }) {

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
            <>
                <section className='curriculum'>
                    {
                        pageLang === 'ES' ? (
                            <div>
                                <h3>Resume</h3>
                                <p> Aqui puedes ver todos mis certificados, de las diferentes plataformas e instituciones en las que he estudiado. Además, si lo necesitas, puedes ver mi CV aquí.</p>
                                <section className='certs-container '>
                                    <div className='cert' title='CV'>
                                        <a href='./static/cv/cv.pdf' rel='noreferrer' target='_blank' title='CV'>
                                            <img src='./static/images/cv/cv.png' alt='CV' >
                                            </img>
                                            <div className='cert-title'>
                                                <b>CV</b>
                                            </div>
                                        </a>
                                    </div>
                                </section>

                                {coursesSena.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Sena</h4>
                                        <p>El Servicio Nacional de Aprendizaje - SENA es una institución que ofrece educación técnica y tecnológica, además ofrece diferentes cursos complementarios, esto solo en Colombia, tengo un total de {coursesSena.length} certificados de cursos y titulaciones que puedes ver aquí.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesSena.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesUdea.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Udea</h4>
                                        <p>La Universidad de Antioquia es una universidad de Colombia en la cual tuve la oportunidad de estudiar mientras que fui parte del programa MisionTic2022, en esta institución, tengo un total de {coursesUdea.length} certificados de cursos realizados que puedes ver aquí.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesUdea.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesMintic.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Mintic</h4>
                                        <p>El Ministerio de las TIC es una entidad encargada de las tecnologías de la comunicación en Colombia, en esta institución tengo un total de {coursesMintic.length} certificados de cursos realizados que puedes ver aquí.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesMintic.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesPlatzi.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Platzi</h4>
                                        <p>Platzi es una plataforma donde he aprendido bastante de JavaScript y desarrollo de Software en general, tengo un total de {coursesPlatzi.length} certificados de escuelas, carreras y cursos realizados que puedes ver aquí.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesPlatzi.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesFCC.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>FreeCodeCamp</h4>
                                        <p>FreeCodeCamp es una plataforma online donde he podido reforzar y aprender más de JavaScript y de desarrollo Web en general, tengo un total de {coursesFCC.length} certificados de cursos realizados que puedes ver aquí.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesFCC.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div>
                                <h3>Resume</h3>
                                <p> You can here see all my certificates, from the different platforms and institutions where I have studied. Also if you need it, you can see my CV here.</p>
                                <section className='certs-container '>
                                    <div className='cert' title='CV'>
                                        <a href='./static/cv/cv.pdf' rel='noreferrer' target='_blank' title='CV'>
                                            <img src='./static/images/cv/cv.png' alt='CV' >
                                            </img>
                                            <div className='cert-title'>
                                                <b>CV</b>
                                            </div>
                                        </a>
                                    </div>
                                </section>
                                {coursesSena.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Sena</h4>
                                        <p>Servicio Nacional de Aprendizaje - SENA is an institution that offers technical and technological education, it also offers different complementary courses, this only in Colombia, I have a total of {coursesSena.length} certificates of courses and degrees that you can see here.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesSena.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesUdea.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Udea</h4>
                                        <p>The University of Antioquia (Udea) is a Colombian university where I had the opportunity to study while I was part of the MisionTic2022 programme, in this institution, I have a total of {coursesUdea.length} certificates of completed courses that you can see here.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesUdea.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesMintic.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Mintic</h4>
                                        <p>The Ministry of ICT is an entity in charge of communication technologies in Colombia, in this institution I have a total of {coursesMintic.length} certificates of completed courses that you can see here.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesMintic.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesPlatzi.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>Platzi</h4>
                                        <p>Platzi is a platform where I have learned a lot about JavaScript and Software Development in General, I have a total of {coursesPlatzi.length} certificates from schools, careers and courses that you can see here.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesPlatzi.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                                {coursesFCC.length > 0 ? (
                                    <>
                                        <h4 className='special-text'>FreeCodeCamp</h4>
                                        <p>FreeCodeCamp is an Online platform where I have been able to reinforce and learn more about JavaScript and Web development in general, I have a total of {coursesFCC.length} certificates of completed courses that you can see here.</p>
                                        <section className='certs-container'>
                                            {
                                                coursesFCC.map((value) => {
                                                    return (
                                                        <div key={value.certTitle} className='cert' title={value.certTitle}>
                                                            <a href={value.certUrl} rel='noreferrer' target='_blank' title={value.certTitle}>
                                                                <img src={value.certUrl.replace('certs', 'images/certs').replace('pdf', 'png')} alt={value.certTitle} >
                                                                </img>
                                                                <div className='cert-title'>
                                                                    <b>{value.certTitle}</b>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}
                            </div>
                        )
                    }
                </section>
            </>
        </>
    );
}

export default Resume;
