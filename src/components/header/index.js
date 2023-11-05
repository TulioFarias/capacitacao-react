import React , {useState}from "react";
import { HeaderContainer, ContainerItens,Imagem, Container} from './style'
import RickMorty from '../../assets/rickMorty.gif'



function Header({onInputChange, inputValue}){


    return (
        <Container>
        <HeaderContainer/>
        <ContainerItens>
            <Imagem src={RickMorty}/>
            <h3>Rick and Morty</h3>
            <label>Pesquise os personagens aqui:</label>
            <input type="text" value={inputValue} onChange={(event) => { onInputChange(event.target.value)}}/>
            <hr></hr>
   
        </ContainerItens>
        </Container>
        
        
        
    )
}

export default Header