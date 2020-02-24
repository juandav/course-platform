import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Categories } from './categories.component'
import { getFilters } from '../../store/filters/actions'
import { getAsyncFilters } from './categories.filters'

const CategoriesContainer = ({
  getFilters,
  selected,
  courseTypes,
  deliveryMethods,
  subjectArea
}) => {
  useEffect(() => {
    getFilters(getAsyncFilters(selected))
  }, [getFilters])
  return (
    <Categories
      courseTypes={courseTypes}
      deliveryMethods={deliveryMethods}
      subjectArea={subjectArea}
    />
  )
}

const mapStateToProps = ({
  professions: { selected },
  filters: {
    courseTypes,
    deliveryMethods,
    subjectArea
  }
}) => ({
  selected,
  courseTypes,
  deliveryMethods,
  subjectArea
})
const mapDispatchToProps = ({
  getFilters
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
