import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userType: 'resident',
    identityType: 'nid',
    nid: '',
    passportNumber: '',
    nationality: '',
    dateOfIssue: '',
    dateOfExpiry: '',
    dob: '',
    name: '',
    designation: '',
    mobile: '',
    email: '',
    recoveryQuestion: '',
    recoveryAnswer: '',
  });

  const recoveryQuestions = [
    "What is the name of your first school?",
    "What is the name of your favorite personality?",
    "What is your favorite movie?",
    "What is the name of your favorite book?",
    "What is your mother's name?"
  ];

  // Force passport for non-resident
  useEffect(() => {
    if (formData.userType === 'non-resident') {
      setFormData((prev) => ({ ...prev, identityType: 'passport' }));
    }
  }, [formData.userType]);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name || !formData.email || !formData.recoveryQuestion || !formData.recoveryAnswer) {
    alert('Please fill in all required fields.');
    return;
  }

  const payload = {
    user_type: formData.userType,
    identity_type: formData.identityType,
    nid: formData.nid,
    passport_number: formData.passportNumber,
    nationality: formData.nationality,
    date_of_issue: formData.dateOfIssue || null,
    date_of_expiry: formData.dateOfExpiry || null,
    dob: formData.dob || null,
    name: formData.name,
    designation: formData.designation,
    mobile: formData.mobile,
    email: formData.email,
    recovery_question: formData.recoveryQuestion,
    recovery_answer: formData.recoveryAnswer,
  };

  try {
    const response = await fetch('http://localhost:8000/api/signup/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      const errorData = await response.json();
      console.error('Submission error:', errorData);
      alert('Submission failed. Check console for details.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error connecting to server.');
  }
};

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 signup-heading">Sign-up to Create User</h2>

      {/* User Type */}
      <Card className="mb-4 shadow-sm rounded">
        <Card.Header>User Type</Card.Header>
        <Card.Body>
          <Form.Select value={formData.userType} onChange={handleChange('userType')}>
            <option value="resident">Resident</option>
            <option value="non-resident">Non-Resident</option>
          </Form.Select>
        </Card.Body>
      </Card>

      {/* General Information */}
      <Card className="mb-4 shadow-sm rounded">
        <Card.Header>General Information</Card.Header>
        <Card.Body>
          {formData.userType === 'resident' && (
            <Form.Group className="mb-3">
              <Form.Label>Identity Category <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Select value={formData.identityType} onChange={handleChange('identityType')} required>
                <option value="nid">NID</option>
                <option value="passport">Passport</option>
              </Form.Select>
            </Form.Group>
          )}

          {formData.identityType === 'nid' && formData.userType === 'resident' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>NID Number <span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control type="text" value={formData.nid} onChange={handleChange('nid')} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth <span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control type="date" value={formData.dob} onChange={handleChange('dob')} required />
              </Form.Group>
            </>
          )}

          {formData.identityType === 'passport' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Passport Number <span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control type="text" value={formData.passportNumber} onChange={handleChange('passportNumber')} required/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nationality <span style={{ color: 'red' }}>*</span></Form.Label>
                <Form.Control type="text" value={formData.nationality} onChange={handleChange('nationality')} required/>
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Issue <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control type="date" value={formData.dateOfIssue} onChange={handleChange('dateOfIssue')} required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Expiry <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control type="date" value={formData.dateOfExpiry} onChange={handleChange('dateOfExpiry')} required/>
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          {/* Common Fields */}
          <Form.Group className="mb-3">
            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="text" value={formData.name} onChange={handleChange('name')} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Designation <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="text" value={formData.designation} onChange={handleChange('designation')} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="tel" value={formData.mobile} onChange={handleChange('mobile')} required/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="email" value={formData.email} onChange={handleChange('email')} required/>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Recovery Question */}
      <Card className="mb-4 shadow-sm rounded">
        <Card.Header>Recovery Question</Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Select a Question <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Select value={formData.recoveryQuestion} onChange={handleChange('recoveryQuestion')} defaultValue="" required>
              <option value="" disabled>Select a recovery question</option>
              {recoveryQuestions.map((q, idx) => (
                <option key={idx} value={q}>{q}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Answer <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="text" value={formData.recoveryAnswer} onChange={handleChange('recoveryAnswer')} required/>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Submit Button */}
      <Form.Group className="text-center mt-4">
        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
      </Form.Group>
    </Container>
  );
};

export default SignUpForm;
