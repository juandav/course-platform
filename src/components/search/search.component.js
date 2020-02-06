import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Button
} from './search.styles'

export const Search = () => (
  <Container>
    <SearchContainer>
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <SearchInput type='text' placeholder='Search courses' />
    </SearchContainer>
    <Button color='info'> Find Courses</Button>
  </Container>
)
