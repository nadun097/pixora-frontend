import React, { useState } from "react";
import "./RequestVerification.css";
import { showAlert } from "../../components/Auth/Alert.tsx";

const RequestVerification: React.FC = () => {
    const [formData, setFormData] = useState({
        aboutUserArticleLink: "",
        address: "",
        idBackImage: "",
        idFrontImage: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // To prevent multiple submits

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();

            // Convert file to Base64
            reader.onloadend = () => {
                const base64String = (reader.result as string).split(",")[1]; // Remove the data:image/*;base64, prefix
                setFormData({ ...formData, [name]: base64String });
            };
            reader.readAsDataURL(file); // Read file as Data URL (Base64)
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true); // Prevent multiple submissions

        const token = localStorage.getItem("access_token");
        if (!token) {
            // alert("Please log in to submit a verification request.");
            showAlert("Please log in to submit a verification request.", 'error');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://pixora-f96ef5c321f5.herokuapp.com/api/user/verification-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    about_user_article_link: formData.aboutUserArticleLink,
                    address: formData.address,
                    id_back_image: formData.idBackImage,
                    id_front_image: formData.idFrontImage,
                }),
            });

            if (response.status === 400) {
                const errorData = await response.json();
                if (errorData.detail === "You already have a pending verification request") {
                    // alert("You already have a pending verification request.");
                    showAlert("You already have a pending verification request.", 'error');
                } else {
                    // alert("An error occurred: " + errorData.detail);
                    showAlert("An error occurred: " + errorData.detail, 'error');
                }
            } else if (!response.ok) {
                throw new Error("Failed to submit verification request");
            } else {
                const result = await response.json();
                // alert(`Verification request submitted successfully! Request ID: ${result.request_id}`);
                showAlert(`Verification request submitted successfully! Request ID: ${result.request_id}`, 'success');

                setFormData({
                    aboutUserArticleLink: "",
                    address: "",
                    idBackImage: "",
                    idFrontImage: "",
                });
            }
        } catch (error) {
            console.error("Error submitting verification request:", error);
            // alert("An error occurred. Please try again later.");
            showAlert("An error occurred. Please try again later.", 'error');
        } finally {
            setIsSubmitting(false); // Allow further submissions
        }
    };

    return (
        <div className="request-verification-container">
            <h1>Submit Verification Request</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="aboutUserArticleLink">About User Article Link</label>
                    <input
                        type="text"
                        id="aboutUserArticleLink"
                        name="aboutUserArticleLink"
                        value={formData.aboutUserArticleLink}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idFrontImage">ID Front Image</label>
                    <input
                        type="file"
                        id="idFrontImage"
                        name="idFrontImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idBackImage">ID Back Image</label>
                    <input
                        type="file"
                        id="idBackImage"
                        name="idBackImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default RequestVerification;