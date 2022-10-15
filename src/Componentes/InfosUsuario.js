import React from "react";
import Imagem from "../Imagem/KAKASHIPIXELADO.png"

export function InfosUsuario (){
    return(
        <>
        <div className="InformacosUsuario">
            <img className="Imagemkakashi" src={Imagem} />
            <h4>Kakashi Sensei</h4>
            </div>
        </>
    )
}