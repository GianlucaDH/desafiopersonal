import React from 'react';

export default function CategoryCard(){
    return (
        <article>
            <img src="https://picsum.photos/384/216" alt="" className='cat-image' />
            <section className='cat-info'>
                <h2>Hotel Category</h2>
                <h4>4.567 hotels</h4>
            </section>
        </article>
    )
}