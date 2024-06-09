import Button from 'react-bootstrap/Button';

function Footer(props) {
  return (
    <div className='justify-content-center align-items-center text-center' style={{height: '100%'}}>
      <div className='justify-content-center align-items-center text-center' style={{height: '80%', paddingTop: '200px'}}>
        <h1>Ready to meet healthy tribe ?</h1>
        <Button style={{backgroundColor: '#00BFA6', border: 'none'}}>JOIN THE CLUB NOW</Button>
      </div>
      <div className='d-flex justify-content-center align-items-center text-center p-5'>
        <div>
          <img src="/gh.gif" height={70} />  
        </div>
        <h3>Copyright © 2024 Nooras Fatima. All Rights Reserved. </h3>
      </div>
    </div>
  );
}

export default Footer;