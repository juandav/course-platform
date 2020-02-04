import React from 'react'
import { TiArrowForward } from 'react-icons/ti'
import { FaRegClock, FaLaptopCode } from 'react-icons/fa'
import { 
  Course as CourseWrapper,
  Photo,
  Content,
  Price,
  Title, Tag, Type, Icon, Footer
} from './course.styles'

export const Course = ({ image }) => ( 
  <CourseWrapper>
    {
      image && (
        <Photo>
          <img width="200px" height="120px" alt="pictures" src={image} />
        </Photo>
      )
    }
    <Content>
      <Title> Preventing Medical Errors For Physicians - Florida Requirement </Title>
      <Tag> FEATURED </Tag>
      <Type>ONCOURSE LEARNING</Type>
      <Footer>
        <span>
          <FaRegClock /> 2 Hours
        </span>
        <span>
          <FaLaptopCode /> Computed-Based Training
        </span> 
      </Footer>
    </Content>
    <Price>
      <h3>$24</h3>
      <Icon>
        <TiArrowForward size={24} color="#AEABAB" /> 
      </Icon>
    </Price>
  </CourseWrapper>
)