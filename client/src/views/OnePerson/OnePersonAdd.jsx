import { useState } from "react"
import { useNavigate } from "react-router"

const OnePersonAdd = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/api/people', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            
            if (!response.ok) {
                throw new Error('Failed to create a person')
            }

            const person = await response.json()
            console.log('Person created: ', person)

            navigate('/people')
        } catch {
            console.error('Error: ', error)
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
                    <input type="submit" value="Create" className="cursor-pointer py-2 w-full border" />
                </div>
            </form>
        </>
    )
}

export default OnePersonAdd