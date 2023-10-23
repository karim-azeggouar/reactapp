import React, { useRef } from 'react'

export default function Cuseref() {

    const nom=useRef();
    const dnom=useRef();

    const loisirs=useRef([]);


const addtoref=(e)=>{

    loisirs.current.push(e);
}

const checkall=()=>{

   for(let i=0;i<loisirs.current.length;i++)
   {
    loisirs.current[i].checked=true;
   }
}


const uncheckall=()=>{

    for(let i=0;i<loisirs.current.length;i++)
    {
     loisirs.current[i].checked=false;
    }
 }

 const selectedvalues=()=>{


    let vals='';
    for(let i=0;i<loisirs.current.length;i++)
    {
     if(loisirs.current[i].checked){
        vals+=loisirs.current[i].value;


     }
    }
    alert(vals)
 }

    const test=()=>{

        alert('nom :'+nom.current.value);
        dnom.current.innerHTML=nom.current.value;
    }
  return (
    <div>
      


      <h1>    Exemple 1 useRef </h1>


Nom : <input type="text"    ref={nom} /> <input  onClick={test} type="button" value="ok" />      
<h2   ref={dnom}>Nom :</h2>


<h1>    Exemple 2 useRef </h1>



loisirs : 

<input type="checkbox" ref={addtoref}   value='sport'/> Sport 

<input type="checkbox" ref={addtoref}  value='music'/> Music 

<input type="checkbox" ref={addtoref}  value='voyage'/> Voyage 


<input type="button"  onClick={checkall} value="check all" />


<input type="button"  onClick={uncheckall} value="uncheck all" />


<input type="button"   onClick={selectedvalues} value="checked values" />

    </div>
  )
}
