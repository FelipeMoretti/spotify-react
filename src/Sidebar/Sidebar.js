import React from "react";
import "./Sidebar.css";
import Logo from "../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                    <img src= {Logo} alt="Logo do Spotify" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span class="icon"><FontAwesomeIcon icon = {faHome}></FontAwesomeIcon></span>
                        <span class="main-text">Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="icon"><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></span>
                        <span class="main-text">Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="library">
            <div class="library__content">
                <button class="library__button">
                    <span class="icon"><FontAwesomeIcon icon = {faBook}></FontAwesomeIcon></span>
                    <span class= "main-text">Sua Biblioteca</span>
                </button>
                <span class="fa fa-plus"></span>
            </div>
            <section class="section-playlist">
                <div class="section-playlist__content">
                    <span class="text title">Crie sua primeira playlist</span>
                    <span class="text subtitle">É fácil, vamos te ajudar</span>
                    <button class="section-playlist__button">
                        <span>Criar Playlist</span>
                    </button>
                </div>
            </section>
            <div class="cookies">
                <a href="">Cookies</a>
            </div>
            <div class="languages">
                <button class="languages__button">
                    <span class="icon-globe"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;