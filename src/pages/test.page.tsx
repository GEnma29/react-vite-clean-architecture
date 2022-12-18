import { useNavigate } from "react-router-dom";

const TestPage = () => {
    const navigate = useNavigate()

  return (
    <div>
        <h1>Test Page</h1>
        <button onClick={()=> navigate(-1)}> Go back</button>

    </div>
  )
}

export default TestPage