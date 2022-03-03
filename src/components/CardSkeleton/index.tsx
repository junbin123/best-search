/**
 * 图表卡片骨架屏
 */
import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

function CardSkeleton() {
  return (
    <Stack spacing={1} className="w-full px-6">
      <Skeleton variant="text" width="auto" height="4rem" animation="wave" />
      <Skeleton
        variant="rectangular"
        width="auto"
        height="12rem"
        animation="wave"
      />
    </Stack>
  )
}
export default CardSkeleton
