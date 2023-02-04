import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardHorizontal = (props) => {
const { store, actions } = useContext(Context);
const params = useParams();
	console.log(params.theid); 
	console.log(params);

      useEffect (()=>{
            actions.loadinfoPersonajes(params.theid);
      },[])


    return (
<div className="container card  text-center  m-auto p-auto" style={{maxWidth: "auto"}}>
        <div className="row">
          <div className="col-12 col-md-6 m-auto p-auto">
          <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} className="m-3 auto img-fluid " style={{width: "250px"}}/>
          </div>
          <div className="col-12 col-md-6 m-auto p-auto">
            <div className="card-body">
              <h1 className="fs-1">{props.nombre}</h1>
              <p className="card-text">{props.descripcion}</p>       
              </div>
        </div>
        <span className="border border-warning"></span>
        </div>
              <div className="row text-center text-white mb-3 border-top-warning">               
                <div className="col-xs-4 col-md-2">Name <br />{props.nombre} </div>
                <div className="col-xs-4 col-md-2">Birth Year <br />{props.nacimiento}</div>
                <div className="col-xs-4 col-md-2">Gender <br />{props.sexo}</div>
                <div className="col-xs-4 col-md-2">Height <br />{props.altura}</div>
                <div className="col-xs-4 col-md-2">Skin Color <br />{props.pelo}</div>
                <div className="col-xs-4 col-md-2">Eye Color <br />{props.ojos}</div>
            </div>
            <div className="row">
				<Link to="/">
					<span className="btn btn-outline-warning" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
          </div>  
	);
};
