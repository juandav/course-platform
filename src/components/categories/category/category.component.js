import React from 'react'
import RadioButton from './checkbox'
import { FaAngleUp } from 'react-icons/fa'
import { SECTIONS } from '../../../constants/meta'
import { 
  Box, 
  Item,
  HeaderContainer,
  Title,
  Options
} from './category.styles'

export const Category = ({
  index = 0,
  toggleCategorySection,
  title,
  options = []
}) => (
  <Box id={SECTIONS[index]}>
    <HeaderContainer>
      <Title>{title}</Title>
      <FaAngleUp 
        size={20} 
        onClick={() => toggleCategorySection(SECTIONS[index])} 
      />
    </HeaderContainer>
    
    <Options>
      {options.map(el => (
        <Item>
          <RadioButton 
            checked={false}
            text={el}
          />
        </Item>
      ))}
    </Options>
  </Box>
)
