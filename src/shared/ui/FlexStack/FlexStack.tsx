import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './FlexStack.module.css'

type FlexJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse'

const justifyClasses: Record<FlexJustify, string> = {
  'flex-start': styles['justify-start'],
  center: styles['justify-center'],
  'flex-end': styles['justify-end'],
  'space-between': styles['justify-between'],
  'space-around': styles['justify-around'],
}

const alignClasses: Record<FlexAlign, string> = {
  'flex-start': styles['align-start'],
  center: styles['align-center'],
  'flex-end': styles['align-end'],
  stretch: styles['align-stretch'],
  baseline: styles['align-baseline'],
}

const directionClasses: Record<FlexDirection, string> = {
  column: styles['direction-column'],
  'column-reverse': styles['direction-column-reverse'],
  row: styles['direction-row'],
  'row-reverse': styles['direction-row-reverse'],
}

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

interface Props extends DivProps {
  spacing?: number
  direction?: FlexDirection
  align?: FlexAlign
  justify?: FlexJustify
  max?: boolean
  wrap?: boolean
  className?: string
}

export const FlexStack = (props: Props) => {
  const {
    spacing,
    direction = 'row',
    align = 'center',
    justify = 'flex-start',
    max,
    wrap,
    className,
    children,
  } = props

  const mods = { [styles.max]: max, [styles.wrap]: wrap }
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
  ]

  return (
    <div style={{ gap: spacing }} className={cn(styles.flex, mods, classes)}>
      {children}
    </div>
  )
}
