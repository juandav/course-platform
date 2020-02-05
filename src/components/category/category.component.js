import React from 'react'
import Checkbox from './checkbox'
import { FaAngleUp } from 'react-icons/fa'
import { 
  Box, 
  Label, 
  Text,
  Item,
  HeaderContainer,
  Title,
  Options
} from './category.styles'

export const Category = () => (
  <Box>
    <HeaderContainer>
      <Title>adadad</Title>
      <FaAngleUp size={20} />
    </HeaderContainer>
    
    <Options>
      <Item>
        <Label>
          <Checkbox 
            checked={true}
          />
          <Text>Label Text</Text>
        </Label>
      </Item>
      <Item>
        <Label>
          <Checkbox 
            checked={false}
          />
          <Text>Label Text</Text>
        </Label>
      </Item>
    </Options>
  </Box>
)
