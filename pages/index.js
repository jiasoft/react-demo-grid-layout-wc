
import styles from '@/styles/Home.module.css'
import {GridLayoutWc} from "grid-layout-wc";
import React, { useLayoutEffect, useRef } from 'react';
import * as echarts from 'echarts';
customElements.define('grid-layout-wc', GridLayoutWc);
export default function Home() {

  const dataList = [{w:50,h:30,x:1,y:1,id:1,slot:"1"}];
  const chartsNode = useRef(null);
  const gridLayout = useRef(null);
  useLayoutEffect(()=>{
    gridLayout.current.edit = true;
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      const chart = chartsNode.current && echarts.init(chartsNode.current);
      chart && chart.setOption(option);
    
  },[])
    

  return (
    <>
      <main className={`${styles.main}`}>
        <grid-layout-wc ref={gridLayout} layoutData={JSON.stringify(dataList)}>
          <div className={`${styles.echarts}`} ref={chartsNode} slot="1"></div>
        </grid-layout-wc>
      </main>
    </>
  )
}
