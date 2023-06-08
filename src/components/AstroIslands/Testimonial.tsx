import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import testimonals from '../../assets/js/data/testimonials';
import './styles/Testimonial.scss'

function Testimonial() {
    const [people] = useState(testimonals);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 6000);
        return () => clearInterval(slider)
    }, [index]);

    return (
        <section className='Testimonial'>
            <div className='section-center'>
                {people.map((person: any, personIndex: any) => {
                    const { id, image, name, title, quote } = person;
                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }

                    return (
                        <article key={id} className={position}>
                            <img src={image.src} alt={name} className='person-img' />
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}
                <button title="Previous Testimonial" className='prev' onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button title="Next Testimonial" className='next' onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Testimonial;