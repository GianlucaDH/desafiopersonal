import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import CategoryCard from './components/categorycard'
import RecommendedCard from './components/recommendedcard'

const Index = () => {
    return (
        <main className='app'>
            <Header />
            <section className='searcher'>
                <h1>Busca ofertas en hoteles, casas y mucho más</h1>
                <article>
                <select name="location" id="location">
                    <option value="bsas-ar">Buenos Aires, Argentina</option>
                    <option value="mdq-ar">Mar del Plata, Argentina</option>
                    <option value="blch-ar">Bariloche, Argentina</option>
                    <option value="pde-uy">Punta del Este, Uruguay</option>
                    <option value="cds-uy">Colonia del Sacramento, Uruguay</option>
                    <option value="rdj-br">Rio de Janeiro - Brasil</option>
                    <option value="sao-br">Sao Paulo - Brasil</option>
                </select>
                <input type="date" name="checkinout" id="checkinout" />
                <input type="submit" value="Buscar" />
                </article>
            </section>
            <section className='categories'>
                <h2>Buscar por tipo de alojamiento</h2>
                <section className="categories-list">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                </section>
            </section>
            <section className='productRecomendation'>
                <h2>Recomendados</h2>
                <section className="recomendation-list">
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                <RecommendedCard />
                </section>
            </section>
            <Footer />
        </main>
    );
};

export default Index;