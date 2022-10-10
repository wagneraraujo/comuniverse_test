import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { theme } from '../../styles/theme'
export const Search = () => {
  return (
    <SearchComponent>
      <input type="text" placeholder="Faça uma busca" />
      <BiSearch className="iconSearch" />
    </SearchComponent>
  )
}

export const SearchComponent = styled.div`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 8px;
  margin-left: 36px;
  .iconSearch {
    position: absolute;
    z-index: 6;
    right: 6px;
    top: 7px;
    color: ${theme.colors.gray};
    font-size: 1.3rem;
  }
  input {
    background: none;
    border: none;
    outline: none;
  }

  @media (max-width: 780px) {
    max-width: 30px;
    margin-left: 16px;
    background: none;
    border: none;
    input {
      display: none;
    }
    .iconSearch {
      position: absolute;
      z-index: 6;
      right: 6px;
      top: -6px;
      color: ${theme.colors.gray};
      font-size: 1.6rem;
    }
  }
`
