import React, { useState } from 'react'

const AddContact = props => {

    const initialBook = {
        id : null,
        name : '',
        number : '' 
    }

    const [contact, setContact] = useState(initialContact)

    const handleChange = event => {
        setContact({...contact, [event.target.name] : event.target.value })
    }

    return (
        <form
            onSubmit = {event => {
                event.preventDefault()
                if( contact.name === '' || contact.number === '' ) return
                props.addContact(contact)
                setContact(initialContact)
            }}
        >
            <label>Name</label>
            <input type = "text" name = "name" value = {contact.name} onChange = {handleChange} />
            <label>Number</label>
            <input type = "text" name = "author" value = {contact.number} onChange = {handleChange} />
            <br/>
            <button>Add new contact</button>
        </form>
    )

} 

export default AddContact;