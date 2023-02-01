import NavRouter from "../components/NavRouter";
import Index from "../components/Index";
import Skills from "../components/Skills";
import { useState, useEffect } from 'react';

const index = () => {
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const indexHeaderProps = {
        title: "Software Developer",
        description: pageLang == 'ES' ? "Hola, mi nombre es Crihstian Molina, soy Desarrollador de Software con más de dos años de experiencia en el rubro, y este es mi sitio web." : "Hello, my name is Crihstian Molina, I'm Software Developer with more than two years of experience in the field, and this is my website.",
        image: undefined
    }
    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                <Index />
                <Skills />
            </NavRouter>
        </>
    )

}

export default index