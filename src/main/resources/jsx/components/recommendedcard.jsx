import React from 'react';

export default function RecommendedCard(){
    return (
        <article>
            <img src="https://picsum.photos/384/216" alt="" className='cat-image' />
            <section className='cat-info'>
                <h2>Hotel Name</h2>
                <p className='rating'>
                <span class="desafio desafio-star"></span>
                <span class="desafio desafio-star"></span>
                <span class="desafio desafio-star"></span>
                <span class="desafio desafio-star-half-empty"></span>
                <span class="desafio desafio-star-o"></span>
                <span>7.2</span>
                </p>
                <p>
                    <span class="desafio desafio-map-marker"></span>
                    A 100m del centro <a href="#">Mostrar en el mapa</a>
                </p>
            </section>
        </article>
    )
}