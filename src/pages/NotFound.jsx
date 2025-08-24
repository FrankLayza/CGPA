import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <div className="min-h-screen bg-neo-blue flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-9xl font-bold text-neo-black">404</h2>
                    <p className="text-3xl font-semibold">Oops, Page not found!</p>

                    <button type='button' onClick={() => navigate('/home')} className="neo-button bg-neo-yellow px-2 py-1 mt-2 cursor-pointer">Back Home</button>
                </div>
            </div>
        </>
     );
}
 
export default NotFound;