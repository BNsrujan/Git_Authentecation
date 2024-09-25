import { useParams } from "react-router-dom"

const Terminal = () => {
    const params = useParams()
    console.log(params)

    return (
        <div>
            <h1 >Terminal</h1>
            <h2> {params.id}</h2>
        </div>
    )
}

export default Terminal