import styled from 'styled-components'

export const Container = styled.div`
background: linear-gradient(71deg, rgba(0,0,0,1) 76%, rgba(2,17,0,1) 95%);
`

export const ContainerList = styled.div`
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 20% 20% 20% 20%;
        margin-top: 20px;
        gap: 20px;
        max-height: max-content;
        width: 100vw;

`

export const ContainerPersonagens = styled.div`
        width: max-content;
        border-radius: 10px;
        box-shadow: rgba(204,204,204,1)0px 3px 8px;
        padding: 10px;
        background: rgba(64,64,64, 100);
        backdrop-filter: blur(10px);

       &:hover{
        transform: scale(1.05);
        transition: 0.4s all ease-in-out;
        cursor: pointer;

       }



        p{
                padding-left: 2px;
                color: #d0d0d0;
                font-size: 18px;
        }

        label{
                padding-left: 2px;
                color: #d0d0d0;
                font-size: 18px;
        }

        

`






