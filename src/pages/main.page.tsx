import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>Main Page</h1>
        <button onClick={()=> navigate('/test')} >Go to another page</button>
    </div>
  )
}

export default MainPage