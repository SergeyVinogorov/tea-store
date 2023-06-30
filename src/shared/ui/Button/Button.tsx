import { type ReactNode } from 'react'
import cn from 'classNames'
import { Icon } from 'src/shared/ui'
import styles from './Button.module.css'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
  type?: 'submit'
  isLoading?: boolean
  disabled?: boolean
  className?: string
}

export const Button = ({
  onClick,
  children,
  isLoading,
  disabled,
  type,
  className,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(styles.root, disabled && styles.buttonDisabled, className)}
      onClick={onClick}
    >
      {isLoading ? <Icon className={styles.loader} type="loader" /> : children}
    </button>
  )
}
