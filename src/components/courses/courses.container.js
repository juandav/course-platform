import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Courses as CoursesComponent } from './courses.component'
import { fetchCourses } from '../../store/courses/actions'

const CoursesContainer = ({
  data,
  fetchCourses
}) => {
  useEffect(
    () => {
      fetchCourses({
        expand: 'totalItems',
        pageIndex: 1,
        pageSize: 10,
        sortField: 'RELEVANCE',
        state: 'FL',
        profession: 36,
        courseType: 'CD_ANYTIME',
        isFeatured: true
      })
    },
    [fetchCourses]
  )

  return (
    <CoursesComponent data={data} />
  )
}

const mapStateToProps = ({
  courses: { data }
}) => ({
  data
})
const mapDispatchToProps = ({ fetchCourses })

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
