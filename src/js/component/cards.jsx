import React from "react";

export const Card = (props)=>{
  return <div class="card" style={{"width": "45rem"}}>
  <img src={props.img}  class="card-img-top" alt="..." height={400}/>
  <div class="card-body">
    <h5 class="card-title">{props.titulo} </h5>
    <p class="card-text">{props.descripcion} </p>
    <a href="#" class="btn btn-info">Ver mas sobre este destino</a>
  </div>
</div>

}
export default Card;