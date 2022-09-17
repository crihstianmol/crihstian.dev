import NavRouter from "../components/NavRouter";
import Curriculum from "../components/Curriculum";
import { getCerts } from "../modules/GraphQuerys";
import { useState, useEffect } from 'react';

const curriculum = ({ coursesPlatzi, coursesSena, coursesFCC, coursesUdea, coursesMintic }) => {
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const curriculumHeaderProps = {
        title: "Curriculum",
        description: pageLang == 'ES' ? 'Mi curriculum, esta es básicamente una forma de mostrar los conocimientos y la experencia que he adquirido durante mi carrera.' : 'My curriculum, this is basically a way of showing the knowledge and experience I have acquired during my career.',
        image: '../static/images/curriculum-img.jpg'
    }
    return (
        <>
            <NavRouter headerprops={curriculumHeaderProps}>
                <Curriculum coursesPlatzi={coursesPlatzi}
                    coursesSena={coursesSena}
                    coursesFCC={coursesFCC}
                    coursesUdea={coursesUdea}
                    coursesMintic={coursesMintic}
                />
            </NavRouter>
        </>
    )

}

export async function getServerSideProps() {
    // Fetch data from external API
    let coursesPlatzi = await getCerts('Platzi')
    let coursesSena = await getCerts('SENA')
    let coursesFCC = await getCerts('FCC')
    let coursesUdea = await getCerts('Udea')
    let coursesMintic = await getCerts('Mintic')
    // Pass data to the page via props
    return {
        props: {
            coursesPlatzi,
            coursesSena,
            coursesFCC,
            coursesUdea,
            coursesMintic
        }
    }
}

export default curriculum
