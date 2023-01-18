import { useSelector } from "react-redux";

const Greeting = () => {

    const message = useSelector(state=> state.message.messages)
    console.log(message)

    return(
        <div>
            <h1>Random Greeting</h1>
            {message.map((mes)=> {
                return <p key={mes.id}>{mes.name}</p>
            })}
    </div>
    )
}

export default Greeting;