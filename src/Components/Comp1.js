import React, { useState } from 'react'
import './st.css'

export default function Comp1() {

const [toogle,setToogle]=useState(true);


const elmt= toogle ? <h1>Hello True</h1>:<h1>Hi false</h1>


  return (
    <div>
      <h1 className={toogle ? 'c1' : 'c2'}>   Hello From GIT HUB2</h1>
              {elmt}

              <input type="button"   onClick={()=>setToogle(!toogle)} value="toogle" />
    </div>
  )
}

