import React from 'react';
import "./Footer.modules.css";

const Footer = () => {
    return(
        <div class="disclaimer-premium">
        <div class="text">
            <p class="disclaimer-premium__title">Testar o Premium de graça</p>
            <p class="disclaimer-premium__subtitle">
                Inscreva-se para curtir música ilimitada e Podcasts só com alguns
                Anúncios. Não precisa de cartão de crédito.
            </p>
        </div>
        <div class="button">
            <button type="button">Inscreva-se grátis</button>
        </div>
    </div>
    )
};

export default Footer;