import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  loading: boolean
  fullWidth?: boolean
  variant?: Variant
}

export type Variant = 'standard' | 'filled'
