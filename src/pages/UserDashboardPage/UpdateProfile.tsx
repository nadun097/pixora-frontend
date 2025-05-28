import React, { useState, useEffect } from "react";
import "./UpdateProfile.css";

interface UserProfile {
    first_name: string;
    last_name: string;
    contact: string;
    bio: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    profile_image: string; // base64 only (no prefix)
    cover_image: string;   // base64 only (no prefix)
}

const UpdateProfile: React.FC = () => {
    const [formData, setFormData] = useState<UserProfile>({
        first_name: "",
        last_name: "",
        contact: "",
        bio: "",
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: "",
        profile_image: "",
        cover_image: "",
    });

    const [originalData, setOriginalData] = useState<UserProfile | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>("");
    const [previewImage, setPreviewImage] = useState<string>("");
    const [previewCoverImage, setPreviewCoverImage] = useState<string>("");

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("access_token");
            if (!token) {
                alert("Please log in to view your profile.");
                return;
            }

            try {
                const response = await fetch("https://pixora-f96ef5c321f5.herokuapp.com/api/user/users/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();

                const cleanBase64 = (base64: string) =>
                    base64 && base64.startsWith("data:image") ? base64.split(",")[1] : base64 || "";

                const userData = {
                    first_name: data.first_name || "",
                    last_name: data.last_name || "",
                    contact: data.contact || "",
                    bio: data.bio || "",
                    facebook: data.facebook || "",
                    instagram: data.instagram || "",
                    twitter: data.twitter || "",
                    linkedin: data.linkedin || "",
                    profile_image: cleanBase64(data.profile_image),
                    cover_image: cleanBase64(data.cover_image),
                };

                setFormData(userData);
                setOriginalData(userData);
                setPreviewImage(`data:image/jpeg;base64,${userData.profile_image}`);
                setPreviewCoverImage(`data:image/jpeg;base64,${userData.cover_image}`);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("An error occurred while fetching user data.");
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageField: "profile_image" | "cover_image") => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                let base64String = reader.result as string;
                if (base64String.startsWith("data:image")) {
                    base64String = base64String.split(",")[1];
                }

                setFormData((prev) => ({
                    ...prev,
                    [imageField]: base64String,
                }));

                const preview = `data:image/jpeg;base64,${base64String}`;
                if (imageField === "profile_image") setPreviewImage(preview);
                else setPreviewCoverImage(preview);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (JSON.stringify(formData) === JSON.stringify(originalData)) {
            alert("No changes have been made to the profile.");
            return;
        }

        setIsSubmitting(true);

        const token = localStorage.getItem("access_token");
        if (!token) {
            alert("Please log in to update your profile.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://pixora-f96ef5c321f5.herokuapp.com/api/user/me/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update profile");
            }

            alert("Profile updated successfully!");
            setOriginalData(formData);
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("An error occurred while updating your profile.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="update-profile-container">
            <h1>Update Profile</h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio" value={formData.bio} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" id="facebook" name="facebook" value={formData.facebook} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" id="twitter" name="twitter" value={formData.twitter} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                </div>

                {/* Profile Image Upload */}
                <div className="form-group">
                    <label htmlFor="profile_image">Profile Image</label>
                    <input type="file" id="profile_image" name="profile_image" accept="image/*" onChange={(e) => handleImageChange(e, "profile_image")} />
                    {previewImage && <img src={previewImage} alt="Profile Preview" className="profile-preview" />}
                </div>

                {/* Cover Image Upload */}
                <div className="form-group">
                    <label htmlFor="cover_image">Cover Image</label>
                    <input type="file" id="cover_image" name="cover_image" accept="image/*" onChange={(e) => handleImageChange(e, "cover_image")} />
                    {previewCoverImage && <img src={previewCoverImage} alt="Cover Preview" className="cover-preview" />}
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Update Profile"}
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
