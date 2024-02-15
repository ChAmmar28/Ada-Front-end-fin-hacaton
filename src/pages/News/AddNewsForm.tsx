const AddNewsForm = ({ submit }) => {
   return (
      <div>
         <form>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="text" />
            <input type="text" placeholder="place" />
            <input type="email" placeholder="links" />
            <input type="date" placeholder="date" />
         </form>
         <button onClick={() => submit()}>click</button>
      </div>
   )
}

export default AddNewsForm
