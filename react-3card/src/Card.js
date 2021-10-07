
export default function Card(props) {

    return (
        <div className='card' style={{ backgroundColor: props.color }} >
            <div className='icon'><img src={props.icon} alt='icon'></img></div>
            <header id={props.id} className='header'>{props.name}</header>
            <div className='description'>{props.description}</div>
            <a href="#0" class="button">Learn More</a>
        </div >
    );
}