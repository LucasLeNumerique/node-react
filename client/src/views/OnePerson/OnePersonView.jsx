import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router'

const OnePersonView = () => {
    const [onePerson, setOnePerson] = useState([])
    const { id } = useParams()
    
      useEffect(() => {
        const fetchOnePerson = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/people/${id}`)
      
            const person = await response.json()
            setOnePerson(person)
    
          } catch (error) {
            console.error('Something went wrong')
          }
        }
    
        fetchOnePerson()
      }, [])

    return (
        <>
          <h1 className='font-medium'>{onePerson.name}</h1>
          <h2>{onePerson.email}</h2>
          <h2>{onePerson.age} years old</h2>
          <div>
            <NavLink to='/people' className="block py-2 w-full text-center border">Go back to People page</NavLink>
          </div>
        </>
    )
}

export default OnePersonView