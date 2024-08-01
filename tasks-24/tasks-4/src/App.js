import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        email: '',
        contact: '',
        dob: '',
        about: ''
      },
      errors: {
        username: '',
        email: '',
        contact: '',
        dob: ''
      },
      submissionMessage: '',
      submittedData: []
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  };

  validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    if (!usernameRegex.test(username)) {
      return 'Username must be 3-16 characters';
    }
    return '';
  };

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  validateContact = (contact) => {
    const contactRegex = /^\+?(\d{1,3})?[-. ]?(\d{1,4})[-. ]?(\d{1,4})[-. ]?(\d{1,9})$/;
    if (!contactRegex.test(contact)) {
      return 'Please enter a valid contact number.';
    }
    return '';
  };

  validateDOB = (dob) => {
    const currentDate = new Date();
    const inputDate = new Date(dob);
    const minAgeDate = new Date();
    minAgeDate.setFullYear(currentDate.getFullYear() - 5);

    if (isNaN(inputDate.getTime())) {
      return 'Please enter a valid date of birth (YYYY-MM-DD format).';
    }

    if (inputDate > currentDate) {
      return 'Date of birth cannot be in the future.';
    }

    if (inputDate > minAgeDate) {
      return 'Enter a valid date of birth';
    }

    return '';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const usernameError = this.validateUsername(formData.username);
    const emailError = this.validateEmail(formData.email);
    const contactError = this.validateContact(formData.contact);
    const dobError = this.validateDOB(formData.dob);

    this.setState({
      errors: {
        username: usernameError,
        email: emailError,
        contact: contactError,
        dob: dobError
      }
    });

    if (!usernameError && !emailError && !contactError && !dobError) {
      this.setState((prevState) => ({
        submissionMessage: 'Form submitted successfully!',
        submittedData: [...prevState.submittedData, formData],
        formData: {
          username: '',
          email: '',
          contact: '',
          dob: '',
          about: ''
        }
      }));
    } else {
      this.setState({ submissionMessage: 'Form has errors. Please correct them before submitting.' });
    }
  };

  render() {
    const { formData, errors, submissionMessage, submittedData } = this.state;

    return (
      <div className="App">
      <form2/>
        <div className="form-container">
          <div>
            <h1 className="apps">Application Form</h1>
          </div>
          <div className="hee">
            <h1>Fill The Form</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Username:</label>
              <input
                value={formData.username}
                onChange={this.handleChange}
                name="username"
                type="text"
              />
              {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
              <br />
              <label>Email:</label>
              <input
                value={formData.email}
                name="email"
                onChange={this.handleChange}
                type="text"
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              <br />
              <label>Contact:</label>
              <input
                value={formData.contact}
                name="contact"
                onChange={this.handleChange}
                type="text"
              />
              {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
              <br />
              <label>D.O.B:</label>
              <input
                type="date"
                value={formData.dob}
                name="dob"
                onChange={this.handleChange}
              />
              {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
              <br />
              <br />
              <label>About:</label>
              <textarea
                value={formData.about}
                name="about"
                onChange={this.handleChange}
              />
              <br />
              <button type="submit" style={{ marginTop: '2%', marginLeft: '5%' }}>
                Submit
              </button>
            </form>
            {submissionMessage && <p>{submissionMessage}</p>}
          </div>
        </div>
        <div className="cards-container">
          {submittedData.map((data, index) => (
            <div key={index} className="card">
              <h3>{data.username}</h3>
              <p>Email: {data.email}</p>
              <p>Contact: {data.contact}</p>
              <p>D.O.B: {data.dob}</p>
              <p>About: {data.about}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
