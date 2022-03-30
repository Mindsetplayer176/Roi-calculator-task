import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, Form, Nav } from 'react-bootstrap';
import { ImCross } from 'react-icons/im';
import { GrEdit } from 'react-icons/gr';
import { useState } from 'react';


function App() {

  const [toggle, settoggle] = useState(false)

  console.log(toggle)

  return (
    <div >
      <header >

        <Card className="Main p-4" >

          <div className="d-flex justify-content-between">
            <h4>Calculator</h4>
            <ImCross />
          </div>

          <div className="d-flex justify-content-end custom-control custom-checkbox custom-checkbox-green">
            <Form.Check type="Checkbox" label="Cake" className="mx-2 custom-control-input custom-control-input-green" />
            <Form.Check type="switch" label="USD" className="mx-2" />
          </div>
          <Card className="inputTag my-2 ">
            <div className="d-flex justify-content-end  align-items-center">
              <h4 className="mt-3 px-2"><b>2.10000 CAKE</b></h4>
            </div>
          </Card>

          <div className="my-1 d-flex justify-content-between">

            <Nav variant="pills " defaultActiveKey="1">
              <Nav.Link eventKey="1" className='mx-1 '>USE BALANCE</Nav.Link>
              <Nav.Link eventKey="2" className='mx-1 '>$1000</Nav.Link>
              <Nav.Link eventKey="3" className='mx-1 ' >$100</Nav.Link>
            </Nav>
            <div>
              ~$20.82
            </div>
          </div>
          <br />
          <h6>Timeframe</h6>
          <Nav variant="pills " defaultActiveKey="1">
            <Nav.Link eventKey="1" className='mx-1 '>1 Day </Nav.Link>
            <Nav.Link eventKey="2" className='mx-1 '>7 DAY</Nav.Link>
            <Nav.Link eventKey="3" className='mx-1 ' >30 DAY</Nav.Link>
            <Nav.Link eventKey="1Y" className='mx-1 ' >1 YEAR</Nav.Link>
            <Nav.Link eventKey="5Y" className='mx-1 ' >5 YEAR</Nav.Link>
          </Nav>
          <br />
          <div className="d-flex justify-center-between switch">
            <h6>Enable Accelerated APY  </h6>
            <div >
              <Form.Check type="switch" />

            </div>
          </div>

          <p>Select Tier</p>

          <Nav variant="pills" defaultActiveKey="1" >
            <Nav.Link eventKey="1" className='mx-1 radius '>Tier1 </Nav.Link>
            <Nav.Link eventKey="2" className='mx-1 radius'>Tier2</Nav.Link>
            <Nav.Link eventKey="3" className='mx-1 radius'>Tier3</Nav.Link>
            <Nav.Link eventKey="4" className='mx-1 radius'>Tier4</Nav.Link>
            <Nav.Link eventKey="5" className='mx-1 radius'>Tier5</Nav.Link>
          </Nav>

          
          <div className="d-flex justify-content-end">ROI at Current  Rates</div>

          <Card className="inputTag my-2 ">
            <div className="d-flex justify-content-between  align-items-center px-2">
              <GrEdit />
              <h4 className="mt-3 px-2 "><b>100.0 USD</b></h4>
            </div>
          </Card>
          <div className="d-flex justify-content-end">~3Cake + 10 DON</div>
          <div className='d-flex justify-content-evenly'>
            <Button variant='outline-dark' className='px-5'>Apply</Button>
            <Button variant='outline-dark' className='px-5'>Cancel</Button>
          </div>
          <br />
          <div className="d-flex justify-content-center" onClick={() => { settoggle(!toggle) }}>{toggle ? " Hide Details" : 'Show details'}</div>

          {toggle && <>
            <div className="d-flex justify-content-between" >
              <h6><b>APY </b></h6>
              <h3><b> 63.34%</b></h3>
            </div>
            <div>
              <ul>
                <li>calculated based on current rates</li>
                <li>All figures are estimates provided for your conenience only, and by no means  represent guaranted returns </li>
              </ul>
            </div>

          </>}

        </Card>


      </header>
    </div>
  );
}

export default App;
