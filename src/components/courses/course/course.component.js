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

export const Course = ({
  image,
  name,
  price,
  deliveryMethod
}) => (
  <CourseWrapper>
    {
      image && (
        <Photo>
          <img width='200px' height='120px' alt='pictures' src={`https://test.storage.cebroker.com/cebroker/${image}`} />
        </Photo>
      )
    }
    <Content>
      <Title> {name} </Title>
      <Tag> FEATURED </Tag>
      <Type>ONCOURSE LEARNING</Type>
      <Footer>
        <span>
          <FaRegClock /> 2 Hours
        </span>
        <span>
          <FaLaptopCode /> {deliveryMethod}
        </span>
      </Footer>
    </Content>
    <Price>
      <h4>{`$${price}`}</h4>
      <Icon>
        <TiArrowForward size={24} color='#AEABAB' />
      </Icon>
    </Price>
  </CourseWrapper>
)
