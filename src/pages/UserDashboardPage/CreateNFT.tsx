import React, { useRef, useState } from "react";
import "./CreateNFT.css";
import { showAlert } from "../../components/Auth/Alert.tsx";

const CreateNFT: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [name, setName] = useState("");
    const [artType, setArtType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const accessToken = localStorage.getItem("access_token");

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    function toBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                // @ts-ignore
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            console.log("Please select an image.");
            showAlert("Please select an image.", 'error');
            return;
        }
        if (!accessToken) {
            console.log("No access token found. Please log in.");
            showAlert("No access token found. Please log in.", 'error');
            return;
        }

        console.log("Uploading...");
        showAlert("Uploading...", 'success');
        try {
            const imageBase64 = await toBase64(file);

            const formData = new FormData();
            formData.append("imageBase64", imageBase64);
            formData.append("name", name);
            formData.append("art_type", artType);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("access_token", accessToken);

            const res = await fetch(
                "https://pixora-f96ef5c321f5.herokuapp.com/api/nft/frontend_upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.json();
            console.log(data);
            if (data.upload_result && data.upload_result.error) {
                showAlert(data.upload_result.error, 'error');
            } else if (data.upload_result && data.upload_result.message) {
                showAlert(data.upload_result.message, 'success');
            }
        } catch (err: any) {
            console.log("Error:", err.message || err);
            showAlert(err.message || err, 'error');
        }
    };

    return (
        <>
            <div className="create-title"></div>
            <div className="centered-create-form">
                <div className="upload-section">
                    <div className="upload-box drag-outline" onClick={handleBoxClick}>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept="image/*"
                            required
                            onChange={handleFileChange}
                        />
                        <div className="upload-icon-container">
                            <span className="upload-icon">&#8682;</span>
                        </div>
                        <div className="upload-main-text">
                            <b>Drag and Drop</b> or <span className="browse-link">Browse</span>
                        </div>
                        <div className="upload-desc">
                            Image (NFTs Assets)*
                        </div>
                        <div className="file-types">
                            File types supported: JPG, PNG, Max size: 10 MB
                        </div>
                        {file && (
                            <div style={{ color: "#00b4ff", fontSize: 13, marginTop: 8 }}>
                                Selected file: {file.name}
                            </div>
                        )}
                    </div>
                    <form className="nft-form stacked-form" onSubmit={handleSubmit}>
                        <div className="form-group full-width">
                            <label>
                                Name of NFT<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="NFT Name *"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group full-width">
                            <label>
                                Art Type<span className="required">*</span>
                            </label>
                            <select
                                required
                                value={artType}
                                onChange={e => setArtType(e.target.value)}
                            >
                                <option value="">Select Art Type</option>
                                <option value="digital_art">Digital Art</option>
                                <option value="photography">Photography</option>
                            </select>
                        </div>
                        <div className="form-group full-width">
                            <label>
                                Price of NFT<span className="required">*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="NFT Price *"
                                required
                                value={price}
                                min="0"
                                step="0.01"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group full-width">
                            <label>
                                Description<span className="required">*</span>
                            </label>
                            <textarea
                                placeholder="The description will be included on the item's detail page underneath its image."
                                rows={3}
                                required
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <button className="submit-btn" type="submit">
                            Create NFT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateNFT;