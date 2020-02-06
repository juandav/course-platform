import { connect } from 'react-redux'
import { toggleCategorySection } from '../../../store/meta/actions'
import { Category } from './category.component'

const mapStateToProps = ({
  meta: { sections }
}) => ({
  sections
})

const mapDispatchToProps = ({
  toggleCategorySection
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
