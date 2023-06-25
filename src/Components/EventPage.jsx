import React from 'react'
import { Link } from 'react-router-dom'

const EventPage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow-md">
                    {/* Product Card 1 */}
                    <h2 className="text-xl font-bold">Kyurogi</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                        <Link to='/competition' >Select</Link>
                    </button>
                </div>

                <div className="bg-white p-4 shadow-md">
                    {/* Product Card 2 */}
                    <h2 className="text-xl font-bold">Poomsae</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"> <Link to='/poomsae' >Select</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventPage