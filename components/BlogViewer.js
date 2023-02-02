import React, { useState, useEffect } from 'react';
import Code from 'react-code-prettify';
import { makeid } from '../modules/Misc';
import { useRouter } from 'next/router';
function BlogViewer({ BlogPost, blog, blogError }) {
    console.log(BlogPost)
    const nxRouter = useRouter();
    const [pageLang, setPageLan] = useState('EN')
    const [BackToBlog, setBackToBlog] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        if (navigator.language.includes('es')) {
            setPageLan('ES')
        } else {
            setPageLan('EN')
        }
    }, []);
    const elementBuilder = (element) => { 
        const underline = element.annotations.underline ? React.createElement("u",{},element.text ) : element.text;
        const italic = element.annotations.italic? React.createElement("i",{},underline ) : underline;
        const bold = element.annotations.bold? React.createElement("strong",{},italic ): italic;
        return element.hasurl? React.createElement("strong",{className:"special-text",key:makeid(6), href:element.url,target:"_blank", rel: "noreferrer" },bold ) : bold;
     }
    const comeBackToBlogs = () => {
        setBackToBlog(true)
        nxRouter.push("/blog")
    }
    useEffect(() => {
        if (blogError) {
            setTimeout(() => {
                nxRouter.push("/blog")
            }, 5000);
        }
    }, [blogError])
    return (
        <>
            {
                blogError ? (
                    <>
                        <section className='total-blog'>
                            <div key={makeid(6)} className='load-percent'>
                                <h3>{pageLang === "ES" ? (<>Este post no existe 😕</>) : (<>This post doesn't exist 😕</>)}</h3>
                            </div>
                        </section>
                    </>
                ) : (
                    <>
                        {
                            BlogPost.length === 0 || BackToBlog ? (
                                <>
                                    <section className='total-blog'>
                                        <div key={makeid(6)} className='load-container'>
                                            <div key={makeid(6)} className='load-circle'></div>
                                        </div>
                                        <div key={makeid(6)} className='load-percent'>
                                            <h3>{pageLang === "ES" ? (<>Cargando Blog...</>) : (<>Loading Blog...</>)}</h3>
                                        </div>
                                    </section>
                                </>
                            ) : (
                                <>
                                    <section className='total-blog'>
                                        <section className="blogposts">
                                            <section className="blog-container">
                                                <article>
                                                    <h2>{`${blog.emoji} ${blog.title}`}</h2>
                                                    <div key={makeid(6)}>
                                                        <img src={`${blog.imgsrc}`} className="blog-image" alt='Post'></img>
                                                    </div>
                                                    {
                                                        BlogPost.map((value) => {
                                                            let jxStringArray = []
                                                            let jxString = undefined
                                                            return (
                                                                <div key={makeid(6)}>
                                                                    {
                                                                        value.paragraph !== null && value.paragraph !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.paragraph.map((element,) => {
                                                                                            // jxString.key=makeid(6)
                                                                                            jxString = elementBuilder(element)
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    jxString = <li key={makeid(6)} >{elementBuilder(childelement)}</li>
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br key={makeid(6)}></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header1 !== null && value.header1 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header1.map((element,) => {
                                                                                            jxString = elementBuilder(element)
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    jxString = <li key={makeid(6)} >{elementBuilder(childelement)}</li>
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header2 !== null && value.header2 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header2.map((element,) => {
                                                                                            jxString = elementBuilder(element)
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    jxString = <li key={makeid(6)} >{elementBuilder(childelement)}</li>
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.header3 !== null && value.header3 !== undefined ? (
                                                                            <p key={makeid(6)}>
                                                                                <>
                                                                                    {
                                                                                        value.header3.map((element,) => {
                                                                                            jxString = elementBuilder(element)
                                                                                            if (element.list) {
                                                                                                if (jxStringArray.length === 0) {
                                                                                                    jxStringArray.push(jxString)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                    jxStringArray.push(<br></br>)
                                                                                                } else {
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                }
                                                                                                element.childs.forEach(childelement => {
                                                                                                    jxString = <li key={makeid(6)} >{elementBuilder(childelement)}</li>
                                                                                                    if (jxStringArray[jxStringArray.length - 1] !== jxString) {
                                                                                                        jxStringArray.push(jxString)
                                                                                                        jxStringArray.push(<br></br>)
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            return jxStringArray.length !== 0 ? jxStringArray : jxString
                                                                                        })
                                                                                    }
                                                                                </>
                                                                            </p>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.image !== null && value.image !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.image.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <img className='blog-inc-img' alt={value.image.caption} src={value.image.url} ></img>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <img className='blog-inc-img' alt="no-caption" src={value.image.url} ></img>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.video !== null && value.video !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.video.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <video className='blog-inc-video' alt={value.video.caption} src={value.video.url} ></video>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <video className='blog-inc-video' alt="no-caption" src={value.video.url} ></video>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.embed !== null && value.embed !== undefined ? (
                                                                            <>
                                                                                {
                                                                                    value.embed.caption !== "" ? (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <embed src={value.embed.url} ></embed>
                                                                                            </div>
                                                                                        </>
                                                                                    ) : (
                                                                                        <>
                                                                                            <div key={makeid(6)}>
                                                                                                <embed src={value.embed.url} ></embed>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                    {
                                                                        value.code !== null && value.code !== undefined ? (
                                                                            <>
                                                                                <Code
                                                                                    codeString={value.code.text}
                                                                                    language={value.code.language}
                                                                                />
                                                                            </>
                                                                        ) : (
                                                                            <></>
                                                                        )
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </article>
                                            </section>
                                            <strong><span style={{ cursor: 'pointer' }} onClick={() => comeBackToBlogs()} > {pageLang === "ES" ? (<>Volver al blog</>) : (<>Back to blog</>)} 🔙</span></strong>
                                        </section>
                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    );
}

export default BlogViewer;
