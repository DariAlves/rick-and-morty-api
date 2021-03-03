import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: transparent;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 450px;
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  /* max-width: 780px; */
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  input,
  button {
    height: 2.5rem;
    border: 0;
    outline: none;
    text-transform: uppercase;
    padding: 0 1rem;
  }

  input {
    width: 25rem;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 7rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    color: #316759;
    background: #63cbfb;
    transition: background 0.2s;

    &:hover {
      background: #53abee;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  border-radius: 5px;
  background: #316759;
  background: transparent;

  &.Alive {
    border: 2px solid #00bd56;
  }

  &.Dead {
    border: 2px solid #cc3232;
  }

  &.unknown {
    border: 2px solid #e7b416;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  div {
    flex: 1;
    margin-left: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      width: 100%;
      margin: 1rem 0;
      font-size: 1.2rem;
      padding: 0.5rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  color: #fff;
  font-size: 1.2rem;
  margin-top: auto;
  padding: 1rem 0;
`;
