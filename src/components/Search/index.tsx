import { FormEvent, useState } from 'react';
import { HeaderContainer, Form, CardContainer, Footer } from './styles';
import api from '../../services/api';

import rickMortyLogo from '../../assets/rick-morty-logo.png';

interface Character {
  id: number;
  name: string;
  gender: string;
  image: string;
  species: string;
  status: 'Alive' | 'unknown' | 'Dead';
}

function Search() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

  async function handleSearch(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`?name=${search}`);

    const character = response.data.results[0];

    setCharacters([...characters, character]);
    setSearch('');
  }

  return (
    <>
      <HeaderContainer>
        <img src={rickMortyLogo} alt="Rick and Morty Logo" />
      </HeaderContainer>

      <Form onSubmit={handleSearch}>
        <input
          value={search}
          required
          onChange={event => setSearch(event.target.value)}
          type="text"
          placeholder="Personagem"
        />
        <button type="submit">Buscar</button>
      </Form>

      {characters.map(character => (
        <CardContainer key={character.id} className={character.status}>
          <img src={character.image} alt={character.name} />
          <div className="info">
            <strong>STATUS: {character.status}</strong>
            <strong>NAME: {character.name}</strong>
            <strong>SPECIES: {character.species}</strong>
            <strong>GENDER: {character.gender}</strong>
          </div>
        </CardContainer>
      ))}

      <Footer>
        <p>Dari Alves - 2021</p>
      </Footer>
    </>
  );
}

export default Search;
