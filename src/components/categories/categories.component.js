import React from 'react'
import Category from './category'
import { Container, Card, Title, Text, FilterListIcon } from './categories.styles'

export const Categories = ({
  courseTypes,
  deliveryMethods,
  subjectArea
}) => (
  <Container>
    <Card>
      <Title>
        <FilterListIcon />
        <Text>Filter Course Results</Text>
      </Title>
    </Card>
    <Category
      index={0}
      title='Course Type'
      options={courseTypes.items}
    />
    <Category
      index={1}
      title='Delivery Type'
      options={deliveryMethods.items}
    />
    <Category
      index={2}
      title='Subject Area'
      options={subjectArea.items}
    />
  </Container>
)
