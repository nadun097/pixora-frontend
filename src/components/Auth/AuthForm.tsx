import React, { useState } from 'react';
import './SignupForm.css';
import './LoginForm.css';
import './AuthLayout.css';

const AuthForm: React.FC = () => {
    const [formType, setFormType] = useState<'login' | 'signup'>('login');
    const [signupStep, setSignupStep] = useState(1);

    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        contact: '',
        dob: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'signup' | 'login') => {
        const { name, value, type: inputType, checked } = e.target;
        if (type === 'signup') {
            setSignupData((prev) => ({
                ...prev,
                [name]: inputType === 'checkbox' ? checked : value,
            }));
        } else {
            setLoginData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSignupNext = (e: React.FormEvent) => {
        e.preventDefault();
        setSignupStep(2);
    };

    const handleSignupBack = () => {
        setSignupStep(1);
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!signupData.termsAccepted) {
            alert("Please accept the terms and privacy policy.");
            return;
        }
        console.log('Signup Data:', signupData);
    };

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login Data:', loginData);
    };

    return (
        <div className="auth-form-container">
            <div className="auth-overlay">
                <div className="auth-box">
                    {formType === 'signup' ? (
                        <>
                            {signupStep === 1 ? (
                                <>
                                    <h1 className="signup-title">Sign Up</h1>
                                    <p className="signup-subtitle">Register to your account</p>
                                    <form onSubmit={handleSignupNext}>
                                        <div className="input-group-row">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={signupData.firstName}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input half"
                                                required
                                            />
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={signupData.lastName}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input half"
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={signupData.username}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input"
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="tel"
                                                name="contact"
                                                placeholder="Contact"
                                                value={signupData.contact}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input"
                                                required
                                            />
                                        </div>
                                        <div className="date-input-group">
                                            <div className="date-input-wrapper">
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    value={signupData.dob}
                                                    onChange={(e) => handleChange(e, 'signup')}
                                                    className="signup-input date-input-custom"
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="next-button-inline">
                                                <span>→</span>
                                            </button>
                                        </div>
                                        <p className="signin-prompt">
                                            Already have an account?{' '}
                                            <button
                                                onClick={() => setFormType('login')}
                                                className="signin-link"
                                                type="button"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <div className="back-button-container">
                                        <button
                                            onClick={handleSignupBack}
                                            className="back-button-circle"
                                            type="button"
                                        >
                                            <span>←</span>
                                        </button>
                                        <button
                                            onClick={handleSignupBack}
                                            className="back-button-text"
                                            type="button"
                                        >
                                            Go Back
                                        </button>
                                    </div>

                                    <form onSubmit={handleSignupSubmit}>
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={signupData.email}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input"
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={signupData.password}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input"
                                                required
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={signupData.confirmPassword}
                                                onChange={(e) => handleChange(e, 'signup')}
                                                className="signup-input"
                                                required
                                            />
                                        </div>
                                        <div className="terms-container">
                                            <label>
                                                I agree to the <a href="/terms" className="signin-link">Terms of Use</a> and {' '}
                                                <a href="/privacy" className="signin-link">Privacy Policy</a>
                                            </label>
                                        </div>
                                        <button type="submit" className="signup-button register">
                                            <span>Register</span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <h1 className="login-title">Welcome back</h1>
                            <p className="login-subtitle">Sign in to your account</p>

                            <form onSubmit={handleLoginSubmit}>
                                <div className="input-group">
                                    <div className="input-box">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={loginData.email}
                                            onChange={(e) => handleChange(e, 'login')}
                                            className="login-input"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={loginData.password}
                                            onChange={(e) => handleChange(e, 'login')}
                                            className="login-input"
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="login-button">
                                    <span>Login</span>
                                </button>
                            </form>

                            <p className="signup-prompt">
                                Don't have an account?{' '}
                                <button
                                    onClick={() => setFormType('signup')}
                                    className="signup-link"
                                >
                                    Sign up
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;