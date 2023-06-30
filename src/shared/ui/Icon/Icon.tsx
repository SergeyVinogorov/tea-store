import React from 'react'
import styles from './Icon.module.css'
import cn from 'classnames'

export type IconType = 'cart' | 'cartAdded' | 'loader' | 'x' | 'chevronDown'

export type Props = {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  type: IconType
}

export const Icon = (props: Props) => {
  return (
    <div
      className={cn(
        styles.iconWrapper,
        { [styles.clickable]: Boolean(props.onClick) },
        props.className
      )}
      onClick={props.onClick}
    >
      <div
        className={styles.icon}
        style={{ backgroundImage: `url("/images/${props.type}.svg")` }}
      />
    </div>
  )
}
