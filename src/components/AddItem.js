import { useState } from "react"

const AddItem = ({onAdd}) => {
    const [name, setName] = useState('')
    const [id, setId] = useState()
    const [quantity, setQuantity] = useState()

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please add a item')
            return
        }

        onAdd({name,id,quantity})
        setName('')
        setId('')
        setQuantity('')
    }
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Item Name</label>
            <input type='text' placeholder="Add Item Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Item ID</label>
            <input type='number' placeholder="Add Item ID" value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Quantity</label>
            <input type='number' placeholder="Quantity of items" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <input type='submit' value='Save Item'className="btn btn-block" />
      </form>
    </div>
  )
}

export default AddItem
