import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchSection } from './search.component'
import { getLocations, selectLocation } from '../../store/locations/actions'
import { getProfessions, selectProfession } from '../../store/professions/actions'
import { getFilters } from '../../store/filters/actions'
import { fetchCourses } from '../../store/courses/actions'

const SearchContainer = ({
  locations,
  locationLoading,
  getLocations,
  selectLocation,
  locationSelected,
  getProfessions,
  professionsData,
  professionsLoading,
  proessionSelected,
  selectProfession,
  getFilters,
  fetchCourses
}) => {
  useEffect(() => {
    getLocations({ query: {} })
  }, [getLocations])

  return (
    <SearchSection
      locations={locations}
      locationLoading={locationLoading}
      handleSelectLocation={selectLocation}
      locationSelected={locationSelected}
      handleGetProfessions={getProfessions}
      professionsData={professionsData}
      professionsLoading={professionsLoading}
      handleSelectProfession={selectProfession}
      proessionSelected={proessionSelected}
      handleGetFilters={getFilters}
      handleFetchCourses={fetchCourses}
    />
  )
}

const mapStateToProps = ({
  locations: {
    data: locations,
    loading: locationLoading,
    selected: locationSelected
  },
  professions: {
    data: professionsData,
    loading: professionsLoading,
    selected: proessionSelected
  }
}) => ({
  locations,
  locationLoading,
  locationSelected,
  professionsData,
  professionsLoading,
  proessionSelected
})
const mapDispatchToProps = ({
  getLocations,
  selectLocation,
  getProfessions,
  selectProfession,
  getFilters,
  fetchCourses
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
