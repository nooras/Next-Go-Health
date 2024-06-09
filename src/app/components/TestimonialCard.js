import Card from 'react-bootstrap/Card';

function TestimonialCard(props) {
  return (
    <Card className="p-0 rounded-0 col-sm-5 m-2" /*style={{backgroundColor: '#bbfcf3'}} */>
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4 m-0">
        <Card.Img src={props.img} className="rounded-0"  height={200} alt="..."/>
      </div>
      <Card.Body className="col-md-8 p-2">
        <div className="px-2">
          <p className="tesimonial-text">{props.text}</p>
          <h5 className="card-title">- {props.name}</h5>
        </div>
      </Card.Body>
    </div>
  </Card>
  );
}

export default TestimonialCard;