import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const OnePersonEdit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    })

    useEffect(() => {
        const fetchOnePerson = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/people/${id}`)
        
                const person = await response.json()
                setFormData(person)
        
            } catch (error) {
                console.error('Something went wrong')
            }
        }

        fetchOnePerson()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/api/people/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to update person')
            }

            const updatedPerson = await response.json()
            console.log('Person updated: ', updatedPerson)

            navigate('/people')
        } catch {
            console.error('Error updating person: ', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 items-center">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="p-1 border" 
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="p-1 border" 
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <label>Age</label>
                    <input 
                        type="number" 
                        min="1" 
                        className="p-1 border"
                        name="age"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <input type="submit" value="Modify" className="cursor-pointer py-2 w-full border" />
                </div>
            </form>
        </>
        )
}

export default OnePersonEdit