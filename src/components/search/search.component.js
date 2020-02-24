import React from 'react'
import { Input, Spinner } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import {
  ComboContainer,
  ComboTitle,
  ComboBox,
  ComboLabel,
  Container,
  SearchBox,
  Search,
  SearchIcon,
  SearchInput,
  Button
} from './search.styles'
import { getAsyncFilters } from '../categories/categories.filters'

export const SearchSection = ({
  locations = [],
  locationLoading,
  handleSelectLocation,
  locationSelected,
  handleGetProfessions,
  professionsData,
  professionsLoading,
  handleSelectProfession,
  handleGetFilters,
  handleFetchCourses
}) => (
  <Container>
    <ComboContainer>
      <ComboTitle> Find CE for a </ComboTitle>
      <ComboBox>
        <ComboLabel for='locations'>
          Locations {locationLoading && <Spinner type='grow' color='primary' size='sm' />}
        </ComboLabel>
        <Input
          id='locations'
          type='select'
          name='select'
          onChange={event => {
            handleSelectLocation(event.target.value)
            handleGetProfessions({
              query: {
                stateCode: event.target.value
              }
            })
          }}
          disabled={(!(locations.length > 0))}
        >
          <option key='defaultLocation' value='NA'>Please select a location</option>
          {locations.map(item => <option key={item.id} value={item.code}>{item.name}</option>)}
        </Input>

      </ComboBox>
      <ComboBox>
        <ComboLabel for='professions'>
          Professions {professionsLoading && <Spinner type='grow' color='primary' size='sm' />}
        </ComboLabel>
        <Input
          type='select'
          name='select'
          id='professions'
          onChange={event => {
            handleSelectProfession(event.target.value)
            handleGetFilters(getAsyncFilters(event.target.value))
          }}
          disabled={locationSelected === '' || professionsLoading || !(professionsData.length > 0)}
        >
          <option key='defaultProfessions' value='NA'>Please select a professions</option>
          {professionsData.map(item => <option key={item.code} value={item.id}>{item.name}</option>)}
        </Input>
      </ComboBox>
    </ComboContainer>
    <SearchBox>
      <Search>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchInput type='text' placeholder='Search courses' />
      </Search>
      <Button
        color='info'
        onClick={() =>
          handleFetchCourses({
            path: '/offerings',
            query: {}
          })}
      > Find Courses
      </Button>
    </SearchBox>
  </Container>
)
