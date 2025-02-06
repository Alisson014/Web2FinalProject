import React from 'react';
import '../styles/HeroInfo.css';

function CardInfo(){
    return(
        <section className="HeroInfo">
        <div className="TextoInfo">
            <h1>O que está afetando nossa população</h1>
            <p>Em 2023, fortaleza foi declarada a terceira capital com maior número de pessoas sedentárias, um problema
                grave e preocupante. Dessa forma a prefeitura de Fortaleza está elaborando uma série de atividades que 
                buscam motivar, conscientizar e engajar a população no combate a essa problemática. 

            </p>
            
            <p> 
                <button className="Botao">Saiba Mais</button> &nbsp; 
                <button className="Botao2">Outros</button>
            </p>
        </div>

        <div className="imagemInfo">
            <img src="img/al03.jpg"/>
        </div>
    </section>
    );
}

export default CardInfo;