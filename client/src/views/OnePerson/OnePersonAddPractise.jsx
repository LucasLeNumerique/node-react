import { useState } from "react"

const OnePersonAddPractise = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('hello')
    const [liked, setLiked] = useState(true)
    const [form, setForm] = useState({
        firstName: 'Kassandra',
        lastName: 'Cheunet',
        age: 24
    })

    const handleClick = () => {
        setCount(count + 1)
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleChangeBis = (e) => {
        setLiked(e.target.checked)
    }

    return (
        <div className="flex flex-col gap-5">
            <button onClick={handleClick} className="block border rounded-full">
                You clicked {count} times
            </button>

            <input value={text} onChange={handleChange} className="block border" />
            <p>{text}</p>
            <button onClick={() => setText('')} className="block border rounded-full">
                Reset
            </button>
            <input type="checkbox" checked={liked} onChange={handleChangeBis} />
            <p>You {liked ? 'liked' : 'did not liked'} this</p>

            <form>
                <label>
                    First Name
                    <input 
                        value={form.firstName}
                        onChange={e => {
                            setForm({
                                ...form,
                                firstName: e.target.value
                            })
                        }}
                        className="block border"
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        value={form.lastName}
                        onChange={e => {
                            setForm({
                                ...form,
                                lastName: e.target.value
                            })
                        }}
                        className="block border"
                    />
                </label>
                <label>
                    Age
                    <input 
                        type="number"
                        min="1"
                        value={form.age}
                        onChange={e => {
                            setForm({
                                ...form,
                                age: e.target.value
                            })
                        }}
                        className="block border"
                    />
                </label>
            </form>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                {form.age}{' '}
            </p>
        </div>
    )
}

export default OnePersonAddPractise