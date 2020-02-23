import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SearchSection } from './search.component'
import { getLocations, selectLocation } from '../../store/locations/actions'
import { getProfessions, selectProfession } from '../../store/professions/actions'

const SearchContainer = ({
  locations,
  locationLoading,
  getLocations,
  selectLocation,
  locationSelected,
  getProfessions,
  professionsData,
  professionsLoading,
  selectProfession
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
    loading: professionsLoading
  }
}) => ({
  locations,
  locationLoading,
  locationSelected,
  professionsData,
  professionsLoading
})
const mapDispatchToProps = ({
  getLocations,
  selectLocation,
  getProfessions,
  selectProfession
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
