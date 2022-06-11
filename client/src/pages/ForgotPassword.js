import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ResetPass = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      // check if form has everything (as per react-bootstrap docs)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setUserFormData({
        username: '',
        password: '',
      });
    };
  
    return (
      <>
      <div className="text-center">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
          </Form.Group>
  
          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your new password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
          </Form.Group>
          <Button disabled={!(userFormData.username && userFormData.password)} type="submit" variant='success'>Reset</Button>
        </Form>
        </div>
      </>
    );
  };
  
  export default ResetPass;