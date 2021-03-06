import React from 'react'
import { Input } from 'reactstrap'
import Course from './course'
import {
  Container,
  SortSection,
  ComboBox,
  Label,
  List,
  EmptyIcon,
  ViewMoreContainer,
  ViewMoreButton
} from './courses.styles'

export const Courses = ({
  data,
  sortField = [],
  handleFetchCourses,
  profession,
  expand,
  pageIndex,
  pageSize
}) => (
  <Container>
    {(data.lenght > 0)
      ? <EmptyIcon size={128} />
      : (
        <>
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
        </>
      )}
    <ViewMoreContainer>
      <ViewMoreButton
        onClick={() => {
          handleFetchCourses({
            query: {
              expand,
              pageIndex,
              pageSize,
              profession
            },
            type: 'more'
          })
        }}
      >
        View more
      </ViewMoreButton>
    </ViewMoreContainer>
  </Container>
)
