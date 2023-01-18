import { useSelector } from "react-redux";
import '../App.css'

const Greeting = () => {

    const message = useSelector(state=> state.message.messages)
    console.log(message)

    return(
        <div className="container">
            <h1>Random Greeting</h1>
           
            <p>{message.name}</p>
           
    </div>
    )
}

export default Greeting;