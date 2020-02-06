import React from 'react'
import Category from './category'
import { Container, Card, Title, Text, FilterListIcon } from './categories.styles'

export const Categories = () => (
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
      options={[
        'Self Placed',
        'Live'
      ]}
    />
    <Category
      index={1}
      title='Delivery Type'
      options={[
        'Any delivery type',
        'Computer-Based Training',
        'Correspondence',
        'Mailed Material'
      ]}
    />
    <Category
      index={2}
      title='Subject Area'
      options={[
        'Any subject area',
        'HIV/AIDS',
        'End-of-Life and Palliative Health Care',
        'Domestic Violence'
      ]}
    />
  </Container>
)
