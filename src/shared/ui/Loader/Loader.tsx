import cn from 'classnames'
import styles from './Loader.module.css'

interface Props {
  className?: string
}

export const Loader = ({ className }: Props) => (
  <div className={cn(styles['lds-ellipsis'], className)}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
