import Item from './Item'

const Items = ({items, onDelete}) => {
    return (
      
        <div>
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={onDelete}/>))}
        </div>
      )
}

export default Items
