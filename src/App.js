import React, { useState } from 'react'
import UpdateContact from './components/updateContact'
import ContactList from './components/contactList'
import AddContact from './components/addContact'

const App = () => {

  const initialList = [
    { id : 1, name : 'Lisa Simpson', number: '6146000000' },
    { id : 2, name : 'Homer Simpson', number : '6146000001' },
    { id : 3, name : 'Bart Simpson', number : '6146000002' }
  ]

  const initialContact = {id : null, name : '', number : ''}

  const [contactList, setContactList] = useState(initialList)
  const [isEditMode, setEdit] = useState(false)
  const [currentContact, setCurrentContact] = useState(initialContact)
  const [listLength, setContactListLength] = useState(3)

  const deleteContact = contactId => {
    setEdit(false)
    setContactList(setContactListLengthList.filter(item => item.id !== contactId))
  }

  const updateContact = (id, contact) => {
    setEdit(false)
    setContactList(contactList.map( item => (item.id === id ? contact : item )))
  }

  const editRow = contact => {
    setEdit(true)
    setCurrentContact({id: contact.id, name : contact.name, number : contact.number})
  }

  const addContact = contact => {
    contact.id = listLength+1
    setContactListLength(contact.id)
    setContactList([...contactList, contact])
  }

  return (
    <div className="container">
      <h1>Reactive Contact Book</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>{ isEditMode ? "Edit" : "Add" } Contact</h2>
          {
            ( !isEditMode ? (  
              <AddContact addContact = {addContact} />
            ) : (
              <UpdateContact updateContact = {updateContact} currentContact = {currentContact} setEdit = {setEdit} />
            ))
          }
        </div>
        <div className="flex-large">
          <h2>View Contact</h2>
          <ContactList editRow = {editRow} list = {contactList} deleteContact = {deleteContact} />
        </div>
      </div>
    </div>
  )

}

export default App