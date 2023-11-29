import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning" className="alert">
        <Alert.Heading>Under Development</Alert.Heading>
        <p>
          This website is a current ongoing project by Harris Greenstein as a project in Full Stack development, utilizing React, Node, Express, PostgreSQL, NGINX, and Docker. You can view the archived website at <a href="/archive" className="inline-block">harrisgreenstein.com/archive</a> 
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close this message
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
