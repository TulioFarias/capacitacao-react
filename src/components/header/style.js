import styled from 'styled-components'

export const Container = styled.div`


`

export const HeaderContainer = styled.div`


`

export const ContainerItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: max-content;
    

   h3{
        margin-top: 12px;
        font-size: 30px;
        margin-bottom: 5px;
        font-style: italic;
        color: #d0d0d0;
        
   }
    label{
        margin-top: 12px;
        font-size: 18px;
        margin-bottom: 5px;
        font-style: italic;
        color: #d0d0d0
    }

    input{
        width: 350px;
        height: 10px;
        padding: 20px;
        background-color: #d0d0d0;
        border: none;
        border-radius: 10px;
        font-size: 16px;
    }
    
    hr{
        margin-top: 5px;
        color: gray;
        width: 100vw;
    }

   
    
`

export const Imagem = styled.img`
    border-radius: 20px;
    width: 350px;
    height: 200px;
    
    `



