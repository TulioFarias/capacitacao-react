import React from "react";
import {Container, ContainerList, ContainerPersonagens, } from './style'



function ContainerListing({list}){

  
    
    return (
       
        <Container>

            
        <ContainerList>
        
           {list && 
           list.map( personagens => (
                <ContainerPersonagens key={personagens.id}>

                    <div>
                    <img src={personagens.image}/>
                    <p>Nome: {personagens.name}</p>
                    <p>Status: {personagens.status}</p>

                    <label>Ultima localização:</label>
                    <p>{personagens.location.name}</p>

                    </div>

            
                  
                    
                    
                </ContainerPersonagens>
           ))}
        </ContainerList>

        
        </Container>
       

        
    )
}

export default ContainerListing