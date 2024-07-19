import React, { useState, useEffect } from 'react'

const UpdateContact = props => {

    const [currentContact, setCurrentContact] = useState(props.currentContact)

    const handleChange = event => {
        setCurrentContact({...currentContact, [event.target.name] : event.target.value })
    }

    useEffect(()=>{
        setCurrentContact(props.currentContact)
    }, [props])

    return (
        <form
            onSubmit = {event => {
                event.preventDefault()
                props.updateContact(currentContact.id,currentContact)
            }}
        >
            <label>Name</label>
            <input type = "text" name = "name" value = {currentContact.name} onChange = {handleChange} />
            <label>Number</label>
            <input type = "text" name = "number" value = {currentContact.number} onChange = {handleChange} />
            <br/>
            <button>Update contact</button>
            <button onClick={() => props.setEdit(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )

}

export default UpdateContact