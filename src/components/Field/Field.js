import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'react-hook-form'
import { Box, Text, Label } from 'theme-ui'
import { t } from 'auth/located-yup'

export const InlineError = props => (
  <Text as='div' variant='small' color='status-error' {...props} />
)

const Messages = ({ messages }) => {
  return (
    messages &&
    Object.entries(messages).map(([type, message]) => (
      <InlineError key={type}>{`- ${t(message)}`}</InlineError>
    ))
  )
}

Messages.propTypes = {
  messages: PropTypes.shape({}),
}

const Field = React.forwardRef(
  ({ control: Component, children, error, errors, label, sx, ...props }, ref) => {
    return (
      <Box mb='small' sx={sx}>
        {label && <Label>{label}</Label>}
        {Component && <Component ref={ref} {...props} />}
        {children}
        {error && <InlineError>{error.message}</InlineError>}

        {errors && (
          <ErrorMessage errors={errors} name={props.name}>
            {Messages}
          </ErrorMessage>
        )}
      </Box>
    )
  }
)

Field.defaultProps = {
  control: undefined,
  children: undefined,
  name: undefined,
  error: {},
  errors: undefined,
  sx: {},
  label: '',
}

Field.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any,
  sx: PropTypes.shape({}),
  children: PropTypes.node,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  errors: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  name: PropTypes.string,
}

Field.displayName = 'Field'

export default Field
