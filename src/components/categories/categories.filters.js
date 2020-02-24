export const getAsyncFilters = (
  professionId = 36,
  courseType = 'CD_ANYTIME'
) => ([
  {
    path: '/course-types',
    query: {
      professionId
    }
  },
  {
    path: '/delivery-methods',
    query: {
      professionId,
      courseType
    }
  },
  {
    path: '/subject-areas',
    query: {
      professionId,
      isAvailableInCourseSearch: true
    }
  }
])
