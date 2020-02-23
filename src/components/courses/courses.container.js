import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Courses as CoursesComponent } from './courses.component'
import { fetchCourses } from '../../store/courses/actions'

const CoursesContainer = ({
  data,
  fetchCourses,
  sortField
}) => {
  useEffect(
    () => {
      fetchCourses({
        query: {
          // expand: 'totalItems',
          pageIndex: 10, // pagina actual => siguiente pagina: 1,2,3,4,5,6,7,8,9,......
          pageSize: 10
          // sortField: 'RELEVANCE',
          // profession: 36, // ComboBox 2
          // courseType: 'CD_ANYTIME',
          // isFeatured: true, // 1 // Destacado o no destacado
          // state: 'FL', // 2 ComboBox 1
          // term: 'Family' // 3 // Search term in input
        }
      })
    },
    [fetchCourses]
  )

  return (
    <CoursesComponent
      data={data}
      sortField={sortField}
    />
  )
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
