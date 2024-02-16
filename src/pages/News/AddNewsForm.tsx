import { useState } from 'react'

const AddNewsForm = ({ submit }) => {
   const [title, setTitle] = useState('')
   const [text, setText] = useState('')
   const [place, setPlace] = useState('')
   const [links, setLinks] = useState('')
   const [date, setDate] = useState('')
   return (
      <div>
         <form>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="text" />
            <input type="text" placeholder="place" />
            <input type="email" placeholder="links" />
            <input type="date" placeholder="date" />
         </form>
         <button
            onClick={() =>
               submit(() => {
                  title, text, place, links, date
               })
            }
         >
            click
         </button>
      </div>
   )
}

export default AddNewsForm
