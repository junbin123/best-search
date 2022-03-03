//
export interface ProductTrendsProps {
  name: string
  search_msv: SearchMsvProps[]
  growth: number
  group: string
  update_dt: string
}

export interface SearchMsvProps {
  date: string
  sv: number
}
export interface StoreProps {
  productTrends: ProductTrendsProps[]
}
