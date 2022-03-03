import React from 'react'
import { ProductTrendsProps, SearchMsvProps } from '../../types/index'
import ReactECharts from 'echarts-for-react'

function CardItem(props: ProductTrendsProps) {
  function formateOption(list: SearchMsvProps[]) {
    const yData = list.map((item) => item.sv)
    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [],
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          data: yData,
          type: 'line',
          smooth: true,
          symbol: 'none',
          splitLine: {
            show: false,
          },
          areaStyle: {},
        },
      ],
      grid: {
        x: 0,
        x2: 0,
        y2: 0,
      },
      color: '#FEC34D',
    }
    return option
  }
  function onChartReady() {
    console.log('1')
  }
  return (
    <div className="w-full h-full pt-4 rounded border border-gray-200 shadow-lg shadow-indigo-500/40 overflow-hidden">
      <div className="px-6 text-xl flex w-full justify-between align-center">
        <div className="">
          <div className="text-normal font-bold text-2xl">{props.name}</div>
          <div className="text-grey text-sm">
            {props.group + ' / ' + props.update_dt}
          </div>
        </div>
        <div className="text-orange font-bold text-4xl">
          {props.growth + '%'}
        </div>
      </div>
      <ReactECharts
        style={{ height: '14rem' }}
        option={formateOption(props.search_msv)}
        notMerge={true}
        lazyUpdate={true}
        onChartReady={onChartReady}
      />
    </div>
  )
}

export default CardItem
