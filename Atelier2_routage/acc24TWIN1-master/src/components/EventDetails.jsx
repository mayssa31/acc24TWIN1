import { useParams } from "react-router-dom";
import events from "../events.json"
function EventDetails() {

    const { title } = useParams();
    console.log(title)
    const decodedTitle = decodeURIComponent(title); // Decode the title
    const event = events.find((event) => event.name === decodedTitle);
    return (
        <div>
            <h1>Event Details</h1>

            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={`../../public/images/${event.img}`} alt="Event Image" style={{ width: '300px', height: '300px' }} />
                </div>
                <div>
                    <h1>{event.name}</h1>
                    <h4>Description</h4>
                    <p>{event.description}</p>
                    <h4>Price</h4>
                    <p>{event.price}</p>
                </div>
            </div>

        </div>

    );
}

export default EventDetails;