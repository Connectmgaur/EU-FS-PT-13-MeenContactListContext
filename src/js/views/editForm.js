import { useContext, useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function EditForm() {
    const { store, actions } = useContext(Context)
    const params = useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()

    useEffect(() => {
        const getUsers = async () => {
            const contact = await actions.getContact(params.id);
            setName(contact.full_name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        };

        getUsers(); // run it, run it
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        const contact = {
            "full_name": name,
            "email": email,
            "agenda_slug": 'meenakshi',
            "address": address,
            "phone": phone
        }
        console.log(contact)
        actions.updateContact(contact, params.id)
        alert('Your contact has been updated')
    }

    return (
        <div className="container-fluid">
            <form>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="container-fluid">
                    <button onClick={(e) => { handleClick(e) }} type="submit" className="btn btn-primary">Save</button>
                    <Link to='/'>Go back to your contacts</Link>
                </div>
            </form>
        </div>
    )
}