import React from 'react'
import { connect } from 'react-redux'
import { Courses as CoursesComponent } from './courses.component'
import { fetchCourses } from '../../store/courses/actions'

const CoursesContainer = ({
  data,
  sortField
}) => {
  const Component = (
    <CoursesComponent
      data={data}
      sortField={sortField}
    />
  )

  console.log(!(data.lenght > 0))
  return Component
}

const mapStateToProps = ({
  courses: { data },
  filters: { sortField }
}) => ({
  data,
  sortField
})
const mapDispatchToProps = ({ fetchCourses })

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
