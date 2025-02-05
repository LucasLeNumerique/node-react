import { Link } from 'react-router'
import People from './../components/People'

const PeopleView = () => {
    return (
        <>
            <div className="mb-5 flex justify-between items-center">
                <h1>People List</h1>
                <Link to="add" className='py-1 px-2 flex items-center gap-x-1 text-sm text-white bg-blue-600 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                    Add a person
                </Link>
            </div>
            <People />
        </>
    )
}

export default PeopleView