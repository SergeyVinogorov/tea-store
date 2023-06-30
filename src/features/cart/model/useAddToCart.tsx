import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'src/shared/model'

export const useAddToCart = () => {
  const dispatch = useAppDispatch()
  const productInCart = useAppSelector(
    (state) => {}
    // selectProductInCart(state, props.product.id)
  )

  const handleClick = useCallback(
    (addOne) => {
      if (addOne) {
        // dispatch(addCartProductThunk(props.product))
      } else {
        // dispatch(removeCartProductThunk(props.product))
      }
    },
    [
      // props.product.id,
      // props.showAlertAfterAddAction,
      // productInCart,
      // productInCartQuantity,
    ]
  )

  const onAddProduct = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      handleClick(true)
    },
    [handleClick]
  )

  const onRemoveProduct = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()
      handleClick(false)
    },
    [handleClick]
  )
  return {
    onAddProduct,
    onRemoveProduct,
    productInCart,
  }
}
