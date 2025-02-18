import { useState } from "react"
import { decrement, increment } from "../features/counter/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const ContactView = () => {
    const [formData, setFormData] = useState({
        firstName: 'Lucas',
        lastName: 'Schrever',
        email: 'lucas.schrever@gmail.com',
    })

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="mx-auto max-w-[325px] lg:max-w-none w-[325px]">
            <h1 className="mb-5">Contact Me!</h1>
            <div className="mb-5">
                <div className="flex justify-between">
                    <label className="mr-2">First Name</label>
                    <input 
                        type="text"
                        value={formData.firstName}
                        onChange={e => {setFormData({
                            ...formData, firstName: e.target.value
                        })}}
                        className="mr-2 border pl-2"        
                    />
                </div>
                <div className="flex justify-between">
                    <label className="mr-2">Last Name</label>
                    <input 
                        type="text"
                        value={formData.lastName}
                        onChange={e => {setFormData({
                            ...formData, lastName: e.target.value
                        })}}
                        className="mr-2 border pl-2"    
                    />
                </div>
                <div className="flex justify-between">
                    <label className="mr-2">Email</label>
                    <input 
                        type="text"
                        value={formData.email}
                        onChange={e => {setFormData({
                            ...formData, email: e.target.value
                        })}}
                        className="mr-2 border pl-2"
                    />
                </div>
            </div>

            <p className="italic">Hi! My name is {formData.firstName} {formData.lastName}!</p>
            <p className="italic">My email address is {formData.email}</p>

            <div className="mt-10 flex justify-center">
                <button onClick={() => {dispatch(increment())}}>
                    Increment
                </button>
                <p className="mx-2 py-2 px-4 bg-gray-400 text-white">{count}</p>
                <button onClick={() => {dispatch(decrement())}}>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default ContactView