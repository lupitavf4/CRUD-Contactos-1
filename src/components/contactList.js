import React from 'react'

const ContactList = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.length > 0 ? (
                        props.list.map( item => (
                            <tr key = {item.id}>
                                <td>{item.name}</td>
                                <td>{item.number}</td>
                                <td>
                                    <button onClick = {()=> props.editRow(item) } className = "button muted-button">Edit</button>
                                    <button onClick = {()=> props.deleteContact(item.id) } className = "button muted-button">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr> 
                            <td colSpan={3}>No Contacts!</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default ContactList