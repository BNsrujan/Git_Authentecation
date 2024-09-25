import { useNavigate } from "react-router-dom";
import cardsData from "../constants";


interface Card {
    index: number;
    name: string;
}

const CardsComponent: React.FC = () => {
    const navigate = useNavigate();

    const handalClick = async (name: string) => {
        try {
            const responce = await (fetch('http://localhost:3000/api/os', {
                method: 'post',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({ name })
            }))
            const data = await responce.json();
            console.log('data:', data.message)
            navigate(`/terminal/${name}`)
        } catch (error) {
            console.error('error:', error)
        }
    }


    return (
        <div>
            {cardsData.map((card: Card, idx: number) => (
                <div key={idx}>
                    <button onClick={() => handalClick(card.name)}>
                        Termin
                    </button>
                </div>
            ))
            }
        </div >
    );
};

export default CardsComponent;
