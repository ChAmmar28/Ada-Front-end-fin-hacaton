// AddCompany.tsx
import { XCircle } from 'lucide-react'
import styles from '../../styles/AddCompanyStyles.module.scss'
import { useDispatch } from 'react-redux'
import { createCompany } from './CompaniesSlice'
import { useState } from 'react'
import { AppDispatch } from '../../store/store'

interface AddCompanyProps {
   close: (value: boolean) => void
}

const AddCompany: React.FC<AddCompanyProps> = ({ close }) => {
   const [companyName, setCompanyName] = useState('')
   const [companyDescription, setCompanyDescription] = useState('')
   const [companyImage, setCompanyImage] = useState('')
   const dispatch = useDispatch<AppDispatch>()

   const handleAdd = async () => {
      try {
         const response = dispatch(
            createCompany({
               name: companyName,
               description: companyDescription,
               image: companyImage,
            })
         )

         console.log('Response:', response)
      } catch (error) {
         console.error('Error:', error)
      }
   }

   const handleClose = () => {
      close(false)
   }

   return (
      <div className={styles.add_form_container}>
         <div className={styles.add_form}>
            <label>name</label>
            <input
               onChange={(e) => setCompanyName(e.target.value)}
               type="text"
            />
            <label>description</label>
            <input
               onChange={(e) => setCompanyDescription(e.target.value)}
               type="text"
            />
            <label>image</label>
            <input
               onChange={(e) => setCompanyImage(e.target.value)}
               type="file"
            />
            <button onClick={handleAdd} className={styles.addCompanyBtn}>
               Добавить
            </button>
            <button onClick={handleClose} className={styles.closeBtn}>
               <XCircle />
            </button>
         </div>
      </div>
   )
}

export default AddCompany
