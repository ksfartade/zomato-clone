import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './loginmodal.css'; // Add your custom styles

const LoginModal = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();


  const closeModal  = () => {
    setIsModalOpen(false);
    navigate('/');
  }

  const toggleForm = () => setIsSignUp(!isSignUp);

  const initialValues = {
    email: '',
    password: '',
    terms: false,
    confirmPassword: '' // for sign-up form only
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: isSignUp ? Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required') : null,
    terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
      
    });

  const handleSubmit = (values) => {
    // Handle the form submission here (API call for login or sign-up)
    console.log(values);
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
          <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
              )}

                {/* Terms and Conditions Checkbox */}
                <div className="checkbox-group">
                  <Field type="checkbox" id="terms" name="terms" className="checkbox" checked={values.terms} />
                  <label htmlFor="terms" className="checkbox-label">
                    By clicking this checkbox, you agree to the Terms and Conditions.
                  </label>
                </div>
              <ErrorMessage name="terms" component="div" className="error" />

              <button type="submit" className="submit-btn">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </Form>
            )}
          </Formik>

          <div className="toggle-form">
          <p>
            {isSignUp 
              ? 'Already have an account? ' 
              : "Don't have an account? "} 
            <span onClick={toggleForm}>
              {isSignUp ? 'Log in' : 'Sign Up'}
            </span>
          </p>            
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
