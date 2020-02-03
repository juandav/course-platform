import React from 'react'
import { Router as Routes } from "@reach/router"
import { Courses } from './pages/courses'

export const Router = () => (
  <Routes>
    <Courses path="/" />
  </Routes>
)
