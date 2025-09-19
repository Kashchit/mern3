
import './Card.css'

function Card(props){
    return(
        <div class="card">
        <img src="https://via.placeholder.com/300x180" alt="Card Image" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">{props.titie}</h2>
            <p class="card-description">
                {props.title}
            </p>
            <button class="card-button">Learn More</button>
        </div>
    </div>
    )
}

export default Card