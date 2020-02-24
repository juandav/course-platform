import React from 'react'
import { Label, Input } from 'reactstrap'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './checkbox.styles'

export const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox='0 0 24 24'>
        <circle cx='50%' cy='50%' r='4' />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export const RadioButton = ({ checked, text = 'nothing', code }) => (
  <Label check>
    <Input type='radio' checked={checked} value={code} />
    <span>{text}</span>
  </Label>
)
