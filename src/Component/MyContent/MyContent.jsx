import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './MyContent.css'
const MyContent = () => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/66fd6a4e-5c19-4eb7-956c-1ec6c7dade04")
            .then(response => setcourse(response.data))
            .catch(error => console.log("erroe"));
    }, [])
    const Scroll = useRef(null);
    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <div className='yyy' >
                {
                    course.map((course) => (
                        <div key={course.id} className='big' ref={Scroll}>
                            <div className="container">
                                <div className="image">
                                    <img src={course.image} alt="logo" />
                                </div>
                                <section>
                                    <p>{course.title}</p>
                                    <p>{course.duration}</p>
                                    <span>{course.price}</span>
                                    <span>{course.instructor}</span>
                                </section>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={scroll} className='top'>TOP</button>
        </>
    )
}

export default MyContent