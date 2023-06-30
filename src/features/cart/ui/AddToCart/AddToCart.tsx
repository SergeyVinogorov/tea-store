import { useAddToCart } from '../../model/useAddToCart'
import styles from './AddToCart.module.css'
import { formatPrice, Product } from 'src/entities/product'
import { Button } from 'src/shared/ui'

interface Props {
  product: Product
}

export const AddToCart = (props: Props) => {
  const { onAddProduct, productInCart, onRemoveProduct } = useAddToCart()
  return (
    <div className={styles.buttonWrapper}>
      <Button onClick={onAddProduct} className={styles.button}>
        <div className={styles.buttonContent}>
          <span>{formatPrice(props.product.price)}</span>
        </div>
      </Button>
    </div>
  )
}
