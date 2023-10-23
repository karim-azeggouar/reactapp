import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"; 

export default function Cradiosel() {
    const[sexe,setSexe]=useState('M')


    const [ville,setVille]=useState('');
    const [villes,setVilles]=useState(['Tanger','Tetouan','Al houceima']);


    const addcity=()=>{

        let nvilles=[...villes,ville];

        setVilles(nvilles);
    }
  return (

   
    <div>

<h1>         Valeur sexe: {sexe}</h1>



<input type="radio"  onClick={(e)=>setSexe(e.target.value)} name="se"   value='M' /> M
<input type="radio" onClick={(e)=>setSexe(e.target.value)} name="se"   value='F' /> F




<br />   <br />

Ajouter une Ville : <input type="text"   onChange={(e)=>setVille(e.target.value)} />

<input type="button" value="Ajouter"  onClick={addcity} />

<br />

Choisir une ville : 

<select name="" id="">

       {
       villes.map((e,inde)=>{


        return   <option  key={uuidv4()} value={e}>
{e}
         


        </option>
       })




       }




</select>

<br />  <br />  <br />

    </div>
  )
}
