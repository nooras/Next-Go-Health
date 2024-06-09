import Button from 'react-bootstrap/Button'
import Card from './Card'

export default function Header() {
  return (
    <div className="typeSection justify-content-center align-items-center text-center" style={{height: '100%'}}>
      <br>
      </br><h1 className=""><b>THIS IS WHERE YOU LEARN & CREATE FRIENDS</b></h1>
      <p></p>
      <Button style={{backgroundColor: '#00BFA6', border: 'none'}}>JOIN NOW</Button>
      <div className="d-flex justify-content-center ">
      <div className="p-2">
        <Card img={'/offlineWorkout.png'} title="Offline Community" />
      </div>
      <div className="p-2">
        <Card img={'/onlineWorkout.png'} title="Online Community" />
      </div>
      </div>
    </div>
  );
}
