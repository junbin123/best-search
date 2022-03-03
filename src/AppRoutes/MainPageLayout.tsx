import React, { ReactNode } from 'react'
import HeaderBar from '../components/HeaderBar'

interface LayoutProps {
  hasHeader: boolean
  children: ReactNode
}
const MainPageLayout = function (props: LayoutProps) {
  return props.hasHeader ? (
    <div>
      <HeaderBar />
      {props.children}
    </div>
  ) : (
    <>{props.children}</>
  )
}
export default MainPageLayout
