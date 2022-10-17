import React from 'react';
import '../App.css';

const Sandalfirst=({sandalhead,sandalsec,sandaltags,sandalimg}) =>{
  return (
  <>
    <div className="blocks">
    <div className="sandalwood1"  style={{backgroundImage:`url(${sandalimg})`}}/>
    <div className="chikka">
    <h3 className="punith1">{sandalhead}</h3>
        <p className="punith2">{sandalsec}</p>
        {sandaltags.map((item4,index4)=>{
                    return(
                        <span className="travel" key={index4}>{item4}</span>
                    )
                })}
    </div>
    </div>   
    <hr className="hr47"/>
  </>
  )
}
export default Sandalfirst;
