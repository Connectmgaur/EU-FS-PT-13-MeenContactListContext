import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function Home() {
	const { store, actions } = useContext(Context)

	const deleteClick = (e, contact) => {
		e.preventDefault()
		actions.deleteContact(contact.id)
		alert(`${contact.full_name} has been deleted from your Contact List`)
	}


	return (
		<div className="d-flex flex-column">
			{store.contacts.map((contact, id) => (
				<div className="d-flex justify-content-center" id="mainContainer" style={{ border: "1px solid lightgray", width: "60%", margin: "0 auto" }}>
					<div className="container col-3 img-fluid w-25" id='imgContainer'>
					<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdreamworthsolutions.com%2Fgarwarealfa%2Fstudent%2Fdist%2Fimg%2Fuser.png&f=1&nofb=1&ipt=53dcdb1e18554475ea07336bf71c09cc7d10378b52137c7cc53740b486e09124&ipo=images" className="img-thumbnail rounded-circle" alt="..." style={{ width: "180px", Length: "180px",  margin: "15px" }} />
					</div>
					<div className="d-flex flex-column align-items-start col-6"style={{ margin: "10px", padding: "10px" }}>
						<h4> {contact.full_name}</h4>
						<p><FontAwesomeIcon icon={faLocationPin} style={{ marginRight: "10px" }} />{contact.address}</p>
						<p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />{contact.email}</p>
						<p><FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />{contact.phone}</p>
					</div>

					<div className="container col-3 d-flex align-items-center">
						<button onClick={(e) => { deleteClick(e, contact) }} className="btn btn-light mr-2">
							<FontAwesomeIcon icon={faTrash} />
						</button>
						<div className="spacer" style={{ width: "10px" }}></div>
						<Link to={`/edit/${contact.id}`} className="btn btn-light ml-2">
							<FontAwesomeIcon icon={faPen} />
						</Link>
					</div>
				</div>
			))}
		</div>

	)
}