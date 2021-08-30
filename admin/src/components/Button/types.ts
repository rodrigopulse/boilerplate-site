export interface ButtonProps {
  label: string
  full?: boolean
  onClick?: (e: any) => void
  type?: 'submit' | 'button'
  icon?: boolean
}