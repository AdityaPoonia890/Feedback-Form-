import React, { useState } from 'react';
import axios from 'axios';

function Feedback() {
  const [services, setServices] = useState('');
  const [ui, setUi] = useState('');
  const [prices, setPrices] = useState('');
  const [product, setProduct] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('services', services);
    formData.append('ui', ui);
    formData.append('prices', prices);
    formData.append('product', product);

    axios
      .post('http://localhost:8080/api/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert(`Product added successfully: ${response.data}`);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        alert('Error adding product');
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Please give us your valuable feedback</h1>

      <form onSubmit={submitHandler} style={styles.form}>
        <div style={styles.questionContainer}>
          <h3 style={styles.question}>How did you like our services?</h3>
          <div style={styles.radioGroup}>
            <label>
              Excellent
              <input
                type="radio"
                name="services"
                value="10"
                onChange={(e) => setServices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Good
              <input
                type="radio"
                name="services"
                value="7"
                onChange={(e) => setServices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Poor
              <input
                type="radio"
                name="services"
                value="4"
                onChange={(e) => setServices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
          </div>
        </div>

        <div style={styles.questionContainer}>
          <h3 style={styles.question}>How did you like our UI?</h3>
          <div style={styles.radioGroup}>
            <label>
              Excellent
              <input
                type="radio"
                name="ui"
                value="10"
                onChange={(e) => setUi(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Good
              <input
                type="radio"
                name="ui"
                value="7"
                onChange={(e) => setUi(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Poor
              <input
                type="radio"
                name="ui"
                value="4"
                onChange={(e) => setUi(e.target.value)}
                style={styles.radioInput}
              />
            </label>
          </div>
        </div>

        <div style={styles.questionContainer}>
          <h3 style={styles.question}>How did you like our prices?</h3>
          <div style={styles.radioGroup}>
            <label>
              Excellent
              <input
                type="radio"
                name="prices"
                value="10"
                onChange={(e) => setPrices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Good
              <input
                type="radio"
                name="prices"
                value="7"
                onChange={(e) => setPrices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Poor
              <input
                type="radio"
                name="prices"
                value="4"
                onChange={(e) => setPrices(e.target.value)}
                style={styles.radioInput}
              />
            </label>
          </div>
        </div>

        <div style={styles.questionContainer}>
          <h3 style={styles.question}>How did you like our product?</h3>
          <div style={styles.radioGroup}>
            <label>
              Excellent
              <input
                type="radio"
                name="product"
                value="10"
                onChange={(e) => setProduct(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Good
              <input
                type="radio"
                name="product"
                value="7"
                onChange={(e) => setProduct(e.target.value)}
                style={styles.radioInput}
              />
            </label>
            <label>
              Poor
              <input
                type="radio"
                name="product"
                value="4"
                onChange={(e) => setProduct(e.target.value)}
                style={styles.radioInput}
              />
            </label>
          </div>
        </div>

        <div style={styles.submitContainer}>
          <input type="submit" value="Submit" style={styles.submitButton} />
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  questionContainer: {
    marginBottom: '20px',
  },
  question: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  radioInput: {
    marginRight: '8px',
  },
  submitContainer: {
    textAlign: 'center',
    marginTop: '30px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
  },
};

export default Feedback;
