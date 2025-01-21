import { useEffect, useState } from "react";
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


const urlContactList = "https://playground.4geeks.com/contact/agendas/Santiago"



export const Home = () => {

	const [contacts, setContacts] = useState ([]) 

	async function getData() {
		const urlContactList = "https://playground.4geeks.com/contact/agendas/Santiago"
		try {
			const response = await fetch(urlContactList)
			if (!response.ok) {
				throw new Error (`Response status: ${response.status}`);
			}
			const json = await response.json();
			console.log(json.contacts);
		}	catch (error) {
			console.log (error.message);
		}
	}

	// ---> variable que improta la informacion 
	
	useEffect (() => {
		getData();
	}, [])

	// ---> lo que aparece en la pagina 
	return <div className="text-center mt-5">
		{ contacts.map((item) => 
			<div className="" key={contacts} style={{border : "solid"}}>
				<p>Hola</p>
			</div>
		)}
	</div>
};
