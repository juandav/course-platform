import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  fill: #87CEEB;
  stroke: #87CEEB;
  stroke-width: 8px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-color: ${props => (props.checked ? '#87CEEB' : '#8080806b')};
  border-style: solid;
  border-radius: 10px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #87CEEB38;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`