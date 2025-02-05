import React, { useEffect, useState } from "react";
import "./Maincontent.modules.css";
import { getArtists } from "../SpotifyService";

function Search() {

    const [search, setSearch] = useState([]);

    useEffect(() => {
        getArtists()
            .then(data => setSearch(data))
            .catch(err => console.error(err));
    }, [])
}

const Maincontent = () => {
    return (
        <div class="playlist-container">
            <div class="result-playlist">
                <div class="playlist">
                    <h1 id="greeting">Boas Vindas</h1>
                    <h2 class="session">Navegar por todas as seções</h2>
                    <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;