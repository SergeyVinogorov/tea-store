import React from 'react'
import { ProductCard, useFetchProductsQuery } from 'src/entities/product'
import { AddToCart } from 'src/features/cart'

import styles from './ProductList.module.css'

export const ProductList = () => {
  let { data = [], isLoading } = useFetchProductsQuery()

  if (Boolean(isLoading) && data.length === 0) {
    return <div className={styles.root}>Loading...</div>
  }

  return (
    <div className={styles.root}>
      {data.map((product) => (
        <ProductCard
          actionSlot={<AddToCart product={product} />}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}
