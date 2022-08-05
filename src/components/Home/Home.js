import React from "react";
import './Home.css';

import paintImg from '../../assets/withlove.jpg';
import Card from "../Card/Card";
import handworkImg from '../../assets/handwork.jpg';
import creativeImg from '../../assets/creative.jpg';
import trustImg from '../../assets/trust.jpg';
import Case from '../Case/Case';
import promax from '../../assets/13promax.jpg';
import iphoneeleven from '../../assets/iphone11pro.jpg';
import iphonetwelve from '../../assets/iphone13.jpg';

import logoImg from '../../assets/logo.png';

const Home = () => {
    return(
        <div className="home">

        <div className="header">
            <div className="header-content container">
                <div className="logo-block">
                    <img className="logo-img" src={logoImg} alt="logo" />
                    <h1 className="logo">Anorcase</h1>
                </div>
                <a href="tel:+998903552060" className="btn">Позвонить</a>
            </div>
        </div>
            
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Anorcase</h1>
                        <p className="hero-description">Мы предоставляем Вашему вниманию премиальный чехол с ручной росписью</p>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about__info">
                            <h1 className="about__info-title">
                                Вам надоели однотипные чехлы?
                            </h1>
                            <p>
                            Мы предоставляем Вашему вниманию премиальный чехол с ручной росписью. Неповторимость, эксклюзивность изделия придают особую ценность, уникальность. Как в природе, нет абсолютных повторов, так и у тут — точной копии не может быть. Каждый чехол Anorcase создаётся с любовью. Каждый раз, беря свой смартфон в руки восхищайтесь красотой живописи!
                            </p>
                        </div>
                        <div className="about__picture">
                            <img className="about__picture-img" src={paintImg} alt="paint" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="offer">
                <div className="container">
                    <div className="offer-content">
                        <h1 className="offer-title">Что мы предлагаем?</h1>
                        
                        <div className="offer-carousel">
                            <div className="offer-carousel-item">
                                <Card img={handworkImg} title="Ручная работа" text="В основном вещи ручной работы делаются уникальными и редко повторяются. Это либо изготовленная на заказ вещь по пожеланиям клиента, либо единичная работа мастера." />
                            </div>
                            <div className="offer-carousel-item">
                                <Card img={creativeImg} title="Креативный подход" text="Креативность делает жизнь бесконечно разнообразной. Мы к каждому чехлу Anorcase уделяем особое внимание." />
                            </div>
                            <div className="offer-carousel-item">
                                <Card img={trustImg} title="Безопасность" text="К стилю мы приложили и качество. Наденьте чехол от Anorcase и забудьте о царапинах на телефоне. Доверьте нам защиту вашего смартфона." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio">
                <div className="container">
                    <div className="portfolio-title">
                        Наши работы
                    </div>

                    <div className="portfolio-carousel">
                        <div className="portfolio-carousel-item"><Case caseImage={promax} actionTitle="Iphone 13 Pro Max" titleDescription="ASdsad" /></div>
                        <div className="portfolio-carousel-item"><Case caseImage={iphoneeleven} actionTitle="Iphone 11 Pro" titleDescription="ASdsad" /></div>
                        <div className="portfolio-carousel-item"><Case caseImage={iphonetwelve} actionTitle="Iphone 12" titleDescription="ASdsad" /></div>
                    </div>

                    <h3 className="portfolio-link">Больше наших работ вы можете посмотреть на нашем <span><a className="instagram-link" href="https://www.instagram.com/anorcase/">Instagram</a></span></h3>
                    
                </div>
            </section>

            <section className="contact">
                <div className="container">
                    <div className="contact-title">
                        Как с нами связаться?
                    </div>

                    <div className="contact-content">
                        <div className="contact-sidebar">
                            <h1 className="contact-sidebar-title">Напишите нам</h1>
                            <p className="contact-text">Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.</p>
                        </div>

                        <div className="contact-form">
                            <form action="" className="contact-inputs">
                                <input placeholder="Имя" type="text" required className="contact-inputs__input" />
                                <input placeholder="Телефон" type="text" required className="contact-inputs__input" />
                                <button type="submit" className="btn btn-submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="footer">
                <div className="container">
                    <p className="footer__label">Anorcase &#169;</p>
                
                </div>
            </section>

        </div>
    );
}

export default Home;