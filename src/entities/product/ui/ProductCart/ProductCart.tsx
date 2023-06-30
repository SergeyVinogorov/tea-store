import { type ReactNode } from 'react'
import cn from 'classnames'
import { formatPrice } from '../../lib/formatPrice'
import styles from './ProductCart.module.css'
import { Product } from '../../api/getProductApi'

type Props = {
  product: Product
  actionSlot?: ReactNode
}

export const ProductCard = (props: Props) => {
  const { product, actionSlot } = props
  const { price, image, desc, name, rating } = product

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        </div>
        <div className={cn(styles.title, 'text_lg')}>{name}</div>
        <div className={cn(styles.desc, 'text_base')}>{desc}</div>
        {/*<div className={cn(styles.price, 'text_bold')}>*/}
        {/*  {formatPrice(price)}*/}
        {/*</div>*/}
        <div className={`${styles.rating} text_bold`}>{rating}</div>
      </div>
      {actionSlot && <div className={styles.contentActions}>{actionSlot}</div>}
    </div>
  )
}
