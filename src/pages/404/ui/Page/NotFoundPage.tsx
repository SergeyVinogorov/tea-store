import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/shared/ui'

export const NotFoundPage = () => {
  let navigate = useNavigate()
  let handleToMain = () => {
    navigate('/')
  }
  return (
    <div>
      <p>Page not found</p>
      <Button onClick={handleToMain} theme="background">
        На главную
      </Button>
    </div>
  )
}
