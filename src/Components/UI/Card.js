import './Card.css';

function Card(props){

    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;


//props.children -> children makes everything inside opening and closing tag as the content (<card>..</card>)