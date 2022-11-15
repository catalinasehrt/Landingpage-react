import React from "react";

//include images into your bundle


import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";
import Footer from "./footer.jsx";


import { objectOf } from "prop-types";



//create your first component
const Home = () => {
	const datos = [{

		titulo: "San Pedro de Atacama",
		descripcion: "Culturas ancestrales y viajeros de todo el mundo se mezclan en este antiguo pueblo con calles de tierra y casas de adobe",
		img: "https://images.unsplash.com/photo-1650190496612-46fb87004f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

	},
	
    {
		titulo: "Valparaiso, Viña del Mar",
		descripcion: "Piérdete en los cerros de la ciudad puerto de Valparaíso para una experiencia única y luego refréscate en las playas de Viña del Mar o Reñaca.",
		img: "https://images.unsplash.com/photo-1617173205830-95d15d469996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

	},
	{
		titulo: "Rapa Nui",
		descripcion: "Explora Rapa Nui, su abundante arqueología, los volcanes y praderas que la componen, y sus casi 1.000 moai que fueron testigos silenciosos de una compleja sociedad.",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/AhuTongariki15Moais.jpg/1280px-AhuTongariki15Moais.jpg",

	},
	{
		titulo: "Pucón y Villarica",
		descripcion: "Practica rafting, canopy, canyoning y trekking entre sus magníficos volcanes, ríos y lagos. En las empinadas pistas de sus montañas disfruta del snowboard y parques nacionales",
		img: "https://images.unsplash.com/photo-1548167390-863d815de934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80",

	},
	{
		titulo: "Chiloé",
		descripcion: "Tierra de mitos, leyendas, tradiciones y una gastronomía incomparable. Chiloé es una isla de sorprendente riqueza cultural y natural.",
		img: "https://c0.wallpaperflare.com/preview/846/725/277/chiloe-palafitos-architecture-chile.jpg",

	},
	
	{
		titulo: "Torres del Paine",
		descripcion: "Prepara tu mochila y tus zapatillas y aventúrate al trekking en el enorme Parque Nacional Torres del Paine..",
		img: "https://images.unsplash.com/photo-1540028317582-ab90fe7c343f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

	},
	


]
	return (
		<div className="container-fluid">
			<Navbar/>			
			<div className="container-fluid my-10">
				<Jumbotron/>
			</div>	

			<div className="row my-5 ps-5  ">
				{datos.map((objecto, posicion)=> {
					return <Card titulo={objecto.titulo} descripcion={objecto.descripcion} img={objecto.img} />					
				
				})}		
				
				
			</div>
			
			<Footer/>
			
					
		</div>


	);
};

export default Home;
