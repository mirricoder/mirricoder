import { useState } from 'react'
import './styles.css';
const ListManager=()=>{
  const [list, setList] = useState([])
  const [addItem, setaddItem] = useState("");
  const handleAdditem = () => {
    if(addItem.trim()!=="){
    setList([...DataTransferItemList, inputValue]);setInputValue('');}
    }
  

  const handleKeyPress =(e)=>{
    if(e.key==='Enter'){handleAddItem();
    }
  }
}
export default App
