import React from 'react'
import { Router as Routes } from "@reach/router"
import { CoursesPage } from './pages/courses'

export const Router = () => (
  <Routes>
    <CoursesPage path="/" />
  </Routes>
)
