import React, { useState } from 'react';
import './VerificationRequests.css';

interface Request {
    id: string;
    name: string;
    email: string;
    date: string;
    profilePicture: string;
    address: string;
    idFrontImage: string;
    idBackImage: string;
    aboutUserArticleLink: string;
}

interface VerificationRequestsListProps {
    requests: Request[];
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}

interface VerificationRequestItemProps {
    request: Request;
    onApprove: () => void;
    onReject: () => void;
}

const VerificationRequestItem: React.FC<VerificationRequestItemProps> = ({
                                                                             request,
                                                                             onApprove,
                                                                             onReject,
                                                                         }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="verification-request-item">
            <div className="request-summary" onClick={() => setIsExpanded(!isExpanded)}>
                <img src={request.profilePicture} alt={`${request.name}'s profile`} className="profile-picture" />
                <div className="user-details">
                    <p className="user-name">{request.name}</p>
                    <p className="user-email">{request.email}</p>
                </div>
                <p className="request-date">{request.date}</p>
                <div className="action-buttons">
                    <button className="approve-button" onClick={onApprove}>
                        ✓
                    </button>
                    <button className="reject-button" onClick={onReject}>
                        ✕
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="request-details">
                    <p><strong>Address:</strong> {request.address}</p>
                    <p><strong>ID Front Image:</strong></p>
                    <img src={`data:image/jpeg;base64,${request.idFrontImage}`} alt="ID Front" className="id-image" />
                    <p><strong>ID Back Image:</strong></p>
                    <img src={`data:image/jpeg;base64,${request.idBackImage}`} alt="ID Back" className="id-image" />
                    <p><strong>About User:</strong> <a href={request.aboutUserArticleLink} target="_blank" rel="noopener noreferrer">View Article</a></p>
                </div>
            )}
        </div>
    );
};

const VerificationRequestsList: React.FC<VerificationRequestsListProps> = ({
                                                                               requests,
                                                                               onApprove,
                                                                               onReject,
                                                                           }) => {
    return (
        <div className="verification-requests-list">
            {requests.map((request) => (
                <VerificationRequestItem
                    key={request.id}
                    request={request}
                    onApprove={() => onApprove(request.id)}
                    onReject={() => onReject(request.id)}
                />
            ))}
        </div>
    );
};

export default VerificationRequestsList;