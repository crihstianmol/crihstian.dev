import NavRouter from "../components/NavRouter";
import Contact from "../components/Contact";
import { useState, useEffect } from 'react';


const contact = () => {
    const [pageLang, setPageLan] = useState('EN')
    useEffect(() => {
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const contactHeaderProps = {
        page:"Contact",
        title: "Contact",
        description: pageLang == 'ES' ? 'Aquí podrás encontrar mi información de contacto.' : 'Here you can find my contact information.',
        image: '../static/images/contact-img.jpg'
    }

    return (
        <>
            <NavRouter headerprops={contactHeaderProps}>
                <Contact />
            </NavRouter>
        </>
    )

}

export default contact
