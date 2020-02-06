import styled from 'styled-components'
import { Card as CardReactstrap } from 'reactstrap'
import { MdFilterList } from 'react-icons/md'

export const Container = styled.div`
  margin-bottom: 100px;
`
export const Card = styled(CardReactstrap)`
  padding: 10px;
  width: 300px;
`

export const Title = styled.span`
  display: flex;
`

export const FilterListIcon = styled(MdFilterList)`
  margin-top: 2px;
`

export const Text = styled.h6`
  font-weight: bold;
`
