import Card from 'react-bootstrap/Card';

function CardItem(props) {
  return (
    <Card style={{ width: '25rem' }} className='rounded-0'>
      <Card.Img variant="top" src={props.img} className='p-2' />
      <Card.Body style={{backgroundColor: '#bbfcf3'}}>
        <Card.Title style={{position:'relative', bottom: '-32px', background: '#bbfcf3', fontSize: '30px'}}>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardItem;