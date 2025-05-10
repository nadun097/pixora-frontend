import React from 'react';
import './VerificationRequests.css';

interface Request {
    id: number;
    name: string;
    email: string;
    date: string;
    profilePicture: string;
}

interface VerificationRequestsListProps {
    requests: Request[];
    onApprove: (id: number) => void;
    onReject: (id: number) => void;
}

interface VerificationRequestItemProps {
    name: string;
    email: string;
    date: string;
    profilePicture: string;
    onApprove: () => void;
    onReject: () => void;
}

const VerificationRequestItem: React.FC<VerificationRequestItemProps> = ({
                                                                             name,
                                                                             email,
                                                                             date,
                                                                             profilePicture,
                                                                             onApprove,
                                                                             onReject,
                                                                         }) => {
    return (
        <div className="verification-request-item">
            <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
            <div className="user-details">
                <p className="user-name">{name}</p>
                <p className="user-email">{email}</p>
            </div>
            <p className="request-date">{date}</p>
            <div className="action-buttons">
                <button className="approve-button" onClick={onApprove}>
                    ✓
                </button>
                <button className="reject-button" onClick={onReject}>
                    ✕
                </button>
            </div>
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
                    name={request.name}
                    email={request.email}
                    date={request.date}
                    profilePicture={request.profilePicture}
                    onApprove={() => onApprove(request.id)}
                    onReject={() => onReject(request.id)}
                />
            ))}
        </div>
    );
};

export default VerificationRequestsList;