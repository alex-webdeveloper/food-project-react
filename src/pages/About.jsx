import { useNavigate } from 'react-router-dom';
export default function About() {
    const navigate = useNavigate();

    return (
        <>
            <h1 className='text-center'>Hello from About page</h1>
            <button onClick={() => navigate(-1)} className="btn btn-success d-block m-auto">Go back</button>
        </>
    )
}