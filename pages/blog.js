import NavRouter from "../components/NavRouter";
import BlogList from "../components/BlogList";
import { getBlogs } from '../modules/GraphQuerys';
import { useState, useEffect } from 'react';

const Blog = () => {
    const [pageLang, setPageLan] = useState('EN')
    const [loader, setloader] = useState(true)
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        TukiTuki()
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);

    const TukiTuki = async () => {
        getBlogs().then((val) => {
            setBlogs(val)
            setloader(false)
        })
    }

    const indexHeaderProps = {
        page: "Blog",
        title: "Blog",
        description: pageLang == 'ES' ? 'Este es mi Blog, aquí podrás encontrar algunas de mis ideas, información y consejos acerca de desarrollo, programación y crecimiento profesional.' : 'This is my Blog, here you can find some of my ideas, information and tips about development, programming and professional growth.',
        image: '../static/images/blog-img.jpg'
    }
    return (
        <>
            <NavRouter headerprops={indexHeaderProps}>
                {loader ? (<div className='total-blog'>
                    {pageLang === "ES" ? (<>
                        <section className="blogposts">
                            <h3 >Blog</h3>
                        </section>
                    </>) : (<>
                        <section className="blogposts">
                            <h3 >Blog</h3>
                        </section>
                    </>)}
                    <div className='load-container'>
                        <div className='load-circle'></div>
                    </div>
                    <div className='load-percent'>
                        <h3>{pageLang === "ES" ? (<>Cargando Blog</>) : (<>Loading Blog</>)}</h3>
                    </div>
                </div>) : (<BlogList blogs={blogs}></BlogList>)}
            </NavRouter>
        </>
    )

}

export default Blog