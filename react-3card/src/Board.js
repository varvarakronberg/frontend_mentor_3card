import Card from './Card.js';
export default function Board(props) {

    return (
        <div className='board'>
            {props.data.map((card, index) => (
                <Card id={index} key={index} icon={card.icon} name={card.name} description={card.description} color={card.color} />
            ))}
        </div >
    );
}