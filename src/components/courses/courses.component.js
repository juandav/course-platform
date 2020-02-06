import React from 'react'
import Course from './course'
import { List } from './courses.styles'

export const Courses = ({ data }) => (
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
)
