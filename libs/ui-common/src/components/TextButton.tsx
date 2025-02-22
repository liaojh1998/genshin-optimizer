import type { ButtonProps } from '@mui/material'
import { Button, styled } from '@mui/material'

const DisabledButton = styled(Button)(({ theme }) => ({
  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.secondary,
  },
}))

export function TextButton({ children, disabled, ...props }: ButtonProps) {
  return (
    <DisabledButton {...props} disabled>
      {children}
    </DisabledButton>
  )
}
