import React, { useState } from "react";
import "./UserDashboardPage.css";
import CreateNFT from "./CreateNFT";
import RequestVerification from "./RequestVerification";
import updateProfile from "./UpdateProfile.tsx";

// Dummy components for demo (replace with your actual content as needed)
const MyNFTs: React.FC = () => (
    <div className="create-title">
        My NFTs
        <br />
        <div style={{ marginTop: 16, color: "#aaa" }}>
            (List your NFTs here)
        </div>
    </div>
);

const Tutorials: React.FC = () => (
    <div className="create-title">
        Tutorials
        <br />
        <div style={{ marginTop: 16, color: "#aaa" }}>
            (Tutorials content goes here)
        </div>
    </div>
);

const SIDEBAR_ITEMS = [
    { key: "my-nfts", label: "My NFTs", icon: "\uD83D\uDCC6", component: MyNFTs },
    { key: "create-nfts", label: "Create NFTs", icon: "\u271A", component: CreateNFT },
    { key: "request-verification", label: "Request Verification", icon: "\u2709", component: RequestVerification },
    { key: "tutorials", label: "Tutorials", icon: "\uD83D\uDCD8", component: Tutorials },
    { key: "account", label: "Account", icon: "\uD83D\uDC64", component: updateProfile }
];

const UserDashboardPage: React.FC = () => {
    const [selected, setSelected] = useState("create-nfts");

    const SelectedComponent = SIDEBAR_ITEMS.find(i => i.key === selected)?.component ?? (() => null);

    return (
        <div className="nft-dashboard">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">NFT App</div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        {SIDEBAR_ITEMS.map(item => (
                            <li
                                key={item.key}
                                className={selected === item.key ? "active" : ""}
                                onClick={() => setSelected(item.key)}
                            >
                                <span className="icon">{item.icon}</span> {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="premium-box">
                    <div className="premium-title">NFT Creator Tips</div>
                    <div className="premium-desc">
                        Access helpful tools, best practices, and insider tips to create and sell your NFTs with confidence.
                    </div>
                    <button className="premium-btn">Try Now</button>
                </div>
            </aside>

            <main className="main-content">
                <SelectedComponent />
            </main>
        </div>
    );
};

export default UserDashboardPage;