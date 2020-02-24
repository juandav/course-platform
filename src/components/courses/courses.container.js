import React from 'react'
import { connect } from 'react-redux'
import { Courses as CoursesComponent } from './courses.component'
import { fetchCourses } from '../../store/courses/actions'

const CoursesContainer = ({
  data,
  sortField,
  fetchCourses,
  profession,
  expand,
  pageIndex,
  pageSize
}) => {
  const Component = (
    <CoursesComponent
      data={data}
      sortField={sortField}
      handleFetchCourses={fetchCourses}
      profession={profession}
      expand={expand}
      pageIndex={pageIndex}
      pageSize={pageSize}
    />
  )
  return Component
}

const mapStateToProps = ({
  courses: {
    data,
    expand,
    pageIndex,
    pageSize
  },
  filters: { sortField },
  professions: { selected: profession }
}) => ({
  data,
  sortField,
  profession,
  expand,
  pageIndex,
  pageSize
})
const mapDispatchToProps = ({ fetchCourses })

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
