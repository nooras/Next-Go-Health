import NavbarHeader from "./NavbarHeader"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export default function HeroSection() {
  return (
    <div className="header display-flex">
        <NavbarHeader />
        <div className="d-flex justify-content-center align-items-center text-center" style={{height: '100%'}}>
            <Container>  
            <h1 className="" style={{fontSize: "100px"}}>HEALTH IS WEALTH</h1>
            <p>Looking for a someone to workout across the world? </p>
            <Button style={{backgroundColor: '#00BFA6', border: 'none'}}>JOIN THE CLUB NOW</Button>
            </Container>
        </div>      
    </div>
  );
}
