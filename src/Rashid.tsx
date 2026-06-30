import React, { useState } from "react";

const Rashid = () => {
    const [homeHover, setHomeHover] = useState(false);
    const [jobsHover, setJobsHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    return (
        <header style={{ width: "100%" }}>
            <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "white", borderBottom: "1px solid #e5e7eb" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
                    <div style={{ display: "flex", height: "64px", alignItems: "center", justifyContent: "space-between" }}>
                        <a style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }} href="/">
                            <div style={{ width: "40px", height: "40px", backgroundColor: "#2563eb", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>JP</span>
                            </div>
                            <span style={{ fontWeight: "bold", fontSize: "20px", color: "#111827" }}>
                                JobPortal
                            </span>
                        </a>

                        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                            <a
                                href="/"
                                style={{
                                    color: homeHover ? "#2563eb" : "#374151",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    transition: "color 0.2s"
                                }}
                                onMouseEnter={() => setHomeHover(true)}
                                onMouseLeave={() => setHomeHover(false)}
                            >
                                Home
                            </a>
                            <a
                                href="/jobs"
                                style={{
                                    color: jobsHover ? "#2563eb" : "#374151",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    transition: "color 0.2s"
                                }}
                                onMouseEnter={() => setJobsHover(true)}
                                onMouseLeave={() => setJobsHover(false)}
                            >
                                Jobs
                            </a>
                            <a href="/admin/login" style={{ textDecoration: "none" }}>
                                <button
                                    style={{
                                        backgroundColor: buttonHover ? "#1d4ed8" : "#2563eb",
                                        color: "white",
                                        padding: "8px 24px",
                                        borderRadius: "8px",
                                        fontWeight: "500",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "background-color 0.2s"
                                    }}
                                    onMouseEnter={() => setButtonHover(true)}
                                    onMouseLeave={() => setButtonHover(false)}
                                >
                                    Post a Job
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Rashid;
