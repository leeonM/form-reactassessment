import { useState } from 'react'
import styles from './Form.module.css'
import axios from 'axios'

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
    })

    const handleChange = (e) => {
        setUser((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user){
            alert('Please fill out all the required fields')
        }
        try {
            await axios.post(`https://32f650ee-b6e9-4139-9784-be49f1ae8275.mock.pstmn.io/register`, user)
            alert("User registered successfully")
            setUser({
            name: '',
            email: '',
            phone: '',
            dob: '',
            }) 
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.container}>
        <label>Name<span>*</span></label>
        <input type="text" name="name" value={user.name} placeholder='name' required 
        onChange={handleChange}
        />
        <label>Email<span>*</span></label>
        <input type="email" name="email" placeholder='E-mail' value={user.email} required 
         onChange={handleChange}
        />
        <label>Phone<span>*</span></label>
        <div className={styles.phoneContainer}>
        <input type="tel" name="phone" placeholder='Phone number'
        value={user.phone}
        required maxLength={11} minLength={10} 
        onChange={handleChange}
         /><p>Format: (0)2031223033/(0)7933292883</p>
        </div>
        <label>Date of Birth (dd/mm/yyyy)<span>*</span></label>
        <input type="date" name="dob" placeholder="Date of birth" max='2005-10-13'
        value={user.dob} required
        onChange={handleChange} />
        <button className={styles.button} type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default Form