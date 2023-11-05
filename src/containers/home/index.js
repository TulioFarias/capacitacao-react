import React, { useEffect, useState } from "react";
import {Container} from './style'
import Footer from "../../components/footer";
import Header from "../../components/header";
import ContainerListing from "../../components/containerList";
import axios from "axios";

function SearchRickAndMorty(){

    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [inputValue, setInputValue] = useState('');

  
    useEffect(() => {
      async function loadList() {
        const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character');
        setList(results);
      }
      
      loadList();
    }, []);
  
    useEffect(() => {
      if (inputValue) {
      
        const filtered = list.filter((personagem) =>
        personagem.name.toLowerCase().includes(inputValue.toLowerCase())
      );

        setFilteredList(filtered);
      } else {
        setFilteredList(list);
      }
    }, [list, inputValue]);

    return (
       
        <Container>
        <Header inputValue={inputValue} onInputChange={setInputValue}/>
        <ContainerListing list={filteredList}/>
 
        <Footer/>
        </Container>
       

        
    )
}

export default SearchRickAndMorty