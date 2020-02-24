import styled from 'styled-components'
import { Label as LabelReactstrap } from 'reactstrap'
import { FaArchive } from 'react-icons/fa'

export const EmptyIcon = styled(FaArchive)`

`

export const Container = styled.div`
  min-width: 0;
  padding: 10px;
  background: white;
  border: 2px;
  border-style: solid;
  border-color: #e6e3e3;
  margin-left: 10px;
  margin-bottom: 100px;

  @media screen and (min-width: 360px) {
    width: 200px;
  }

  @media screen and (min-width: 680px) {
    width: 600px
  } 

  @media screen and (min-width: 1080px) {
    width: 980px;
  }
`

export const ComboBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Label = styled(LabelReactstrap)`
  margin-bottom: 0rem;
  margin-right: 10px;
`

export const SortSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const List = styled.div`
  margin-top: 40px;
`
