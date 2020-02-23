import React from 'react'
import { Input } from 'reactstrap'
import Course from './course'
import {
  Container,
  SortSection,
  ComboBox,
  Label,
  List
} from './courses.styles'

export const Courses = ({
  data,
  sortField = []
}) => (
  <Container>
    <SortSection>
      <h4>Page 1 of 1786 results</h4>
      <ComboBox>
        <Label for='filterField'>Sorted by: </Label>
        <Input type='select' name='select' id='filterField'>
          <option key='defaultSortField' value='NA'>Please select a filter</option>
          {sortField.map(item => <option key={item} value={item}>{item}</option>)}
        </Input>
      </ComboBox>
    </SortSection>
    <List>
      {data.map(item => (
        <Course
          key={item.id}
          name={item.course.name}
          image={item.course.featuredBanner}
          price={item.price}
          deliveryMethod={item.course.deliveryMethod.description}
        />
      ))}
    </List>
  </Container>
)
