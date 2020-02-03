import React from 'react'
import { 
  Course as CourseWrapper,
  Photo,
  Content,
  Price
} from './course.styles'

export const Course = ({ image }) => ( 
  <CourseWrapper>
    {
      image && (
        <Photo>
          <img alt="pictures" src={image} />
        </Photo>
      )
    }
    <Content>
      <h1>Contenido</h1>
    </Content>
    <Price>
      <h1>Precio</h1>
    </Price>
  </CourseWrapper>
)