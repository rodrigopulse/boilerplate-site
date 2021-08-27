export interface InputProps {
  placeholder?: string
  value?: string
  onChange: (e: any) => void
  type?: 'text' | 'number' | 'password'
}