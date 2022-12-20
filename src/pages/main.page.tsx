import { useNavigate } from "react-router-dom";
import Gretter from "~/components/hello-world.component";

const MainPage = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Gretter />
        <button onClick={()=> navigate('/test')} >Go to another page</button>
    </div>
  )
}

export default MainPage