import React from 'react'
import { Container } from '../assets/css/course-page.styles'
import Categories from '../components/categories'
import Courses from '../components/courses'

import Search from '../components/search'

export const CoursesPage = () => (
  <>
    <Search />
    <Container>
      <Categories />
      <Courses />
    </Container>
  </>
)
