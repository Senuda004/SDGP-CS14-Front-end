import { Line, Circle } from 'rc-progress';
import React from 'react'

export default function CircularBarCode() {
  return (
    <div style={{margin:200, height:500, width:500}}>

       <Circle percent={10}  strokeWidth={2} strokeColor="black" trailColor='pink'className='CircBar'/> 
   
      
    </div>
  )
}



       