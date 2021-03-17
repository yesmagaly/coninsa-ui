import styled from 'styled-components'
import DefaultSelect from 'react-select'

const Select = styled(DefaultSelect)`
  & .select__control {
    min-height: 44px;
  }

  & .select__control--is-disabled {
    border-color: #d9dadb !important;
  }

  & .select__control--is-focused {
    border: 1px solid #d9dadb !important;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px rgb(72, 185, 199);
  }
`

Select.defaultProps = {
  classNamePrefix: 'select',
}

export default Select
