import cn from 'classnames'
import { Loader, FlexStack } from 'src/shared/ui'
import styles from './PageLoader.module.css'

interface Props {
  className?: string
}

export const PageLoader = (props: Props) => {
  const { className } = props

  return (
    <FlexStack
      justify="center"
      align="center"
      className={cn(styles.loader, className)}
    >
      <Loader />
    </FlexStack>
  )
}
