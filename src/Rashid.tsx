import React, { useState } from "react";

const Rashid = () => {
    const [homeHover, setHomeHover] = useState(false);
    const [jobsHover, setJobsHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    return (
        <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111827", backgroundColor: "#f8fafc" }}>
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

            <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1rem 4rem" }}>
                <section style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "center", marginBottom: "3rem" }}>
                    <div>
                        <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.16em" }}>
                            Career Opportunities
                        </p>
                        <h1 style={{ margin: "1rem 0", fontSize: "3rem", lineHeight: "1.05", maxWidth: "680px" }}>
                            Find Your Perfect Career
                        </h1>
                        <p style={{ margin: 0, maxWidth: "620px", color: "#4b5563", fontSize: "1.05rem", lineHeight: "1.8" }}>
                            Discover career opportunities from top companies. Search, filter, and apply to roles that match your skills and aspirations.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
                            <a href="/jobs" style={{ textDecoration: "none" }}>
                                <button style={{ backgroundColor: "#2563eb", color: "white", padding: "14px 28px", borderRadius: "12px", border: "none", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
                                    Browse All Jobs
                                </button>
                            </a>
                            <a href="/admin/login" style={{ textDecoration: "none" }}>
                                <button style={{ backgroundColor: "transparent", color: "#2563eb", padding: "14px 28px", borderRadius: "12px", border: "2px solid #2563eb", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
                                    Post a Job
                                </button>
                            </a>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1rem", marginTop: "3rem" }}>
                            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.2rem", boxShadow: "0 10px 25px rgba(15,23,42,0.06)" }}>
                                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>500+</p>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>Active Jobs</p>
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.2rem", boxShadow: "0 10px 25px rgba(15,23,42,0.06)" }}>
                                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>200+</p>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>Top Companies</p>
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.2rem", boxShadow: "0 10px 25px rgba(15,23,42,0.06)" }}>
                                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>50K+</p>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>Placements</p>
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "16px", padding: "1.2rem", boxShadow: "0 10px 25px rgba(15,23,42,0.06)" }}>
                                <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>98%</p>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>User Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#2563eb", borderRadius: "32px", color: "white", padding: "2rem", minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.14em", opacity: 0.9 }}>
                                Trusted by professionals
                            </p>
                            <h2 style={{ margin: "1rem 0", fontSize: "2rem", lineHeight: "1.1" }}>
                                Your next job is closer than you think.
                            </h2>
                            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", lineHeight: "1.75" }}>
                                Search verified openings, connect with top employers, and apply in one place with a clean, easy-to-use interface.
                            </p>
                        </div>
                        <div style={{ display: "grid", gap: "1rem" }}>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "1rem" }}>
                                <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.85 }}>Fast search</p>
                                <p style={{ margin: "0.5rem 0 0", fontWeight: 600, fontSize: "1.2rem" }}>Find jobs quickly</p>
                            </div>
                            <div style={{ backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "18px", padding: "1rem" }}>
                                <p style={{ margin: 0, fontSize: "0.95rem", opacity: 0.85 }}>Real-time alerts</p>
                                <p style={{ margin: "0.5rem 0 0", fontWeight: 600, fontSize: "1.2rem" }}>Never miss updates</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ backgroundColor: "white", borderRadius: "24px", padding: "2.5rem 2rem", boxShadow: "0 20px 60px rgba(15,23,42,0.08)", marginBottom: "3rem" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.16em" }}>
                        Why Choose JobPortal?
                    </p>
                    <h2 style={{ margin: "1rem 0 1.5rem", fontSize: "2.25rem", lineHeight: "1.1" }}>
                        Powered by the best search tools for job seekers.
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1.5rem" }}>
                        <div style={{ padding: "1.5rem", borderRadius: "18px", border: "1px solid #e5e7eb" }}>
                            <p style={{ margin: 0, fontSize: "1.5rem" }}>🔍</p>
                            <h3 style={{ margin: "1rem 0 0.5rem", fontSize: "1.15rem" }}>Powerful Search</h3>
                            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.8" }}>
                                Advanced filtering by job title, category, and location helps you find the right role faster.
                            </p>
                        </div>
                        <div style={{ padding: "1.5rem", borderRadius: "18px", border: "1px solid #e5e7eb" }}>
                            <p style={{ margin: 0, fontSize: "1.5rem" }}>⭐</p>
                            <h3 style={{ margin: "1rem 0 0.5rem", fontSize: "1.15rem" }}>Curated Opportunities</h3>
                            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.8" }}>
                                Only high-quality roles from verified companies are presented in our listings.
                            </p>
                        </div>
                        <div style={{ padding: "1.5rem", borderRadius: "18px", border: "1px solid #e5e7eb" }}>
                            <p style={{ margin: 0, fontSize: "1.5rem" }}>⚡</p>
                            <h3 style={{ margin: "1rem 0 0.5rem", fontSize: "1.15rem" }}>Real-Time Updates</h3>
                            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.8" }}>
                                Get instant notifications when new jobs are posted that match your profile.
                            </p>
                        </div>
                    </div>
                </section>

                <section style={{ padding: "2.5rem 1rem", borderRadius: "24px", backgroundColor: "#2563eb", color: "white", textAlign: "center" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", opacity: 0.9 }}>
                        Ready to Advance Your Career?
                    </p>
                    <h2 style={{ margin: "1rem 0", fontSize: "2rem", lineHeight: "1.1", maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
                        Discover hundreds of job opportunities from leading companies today.
                    </h2>
                    <a href="/jobs" style={{ textDecoration: "none" }}>
                        <button style={{ backgroundColor: "white", color: "#2563eb", padding: "14px 30px", borderRadius: "12px", border: "none", fontWeight: 600, cursor: "pointer", fontSize: "1rem" }}>
                            Explore Jobs
                        </button>
                    </a>
                </section>
            </main>

            <footer style={{ backgroundColor: "white", padding: "2.5rem 1rem 3rem", borderTop: "1px solid #e5e7eb" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2rem" }}>
                    <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem" }}>About JobPortal</p>
                        <p style={{ margin: "1rem 0 0", color: "#6b7280", lineHeight: "1.8" }}>
                            JobPortal connects professionals with verified employers across industries. Find the right job fast and stay ahead with real-time alerts.
                        </p>
                    </div>
                    <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem" }}>Quick Links</p>
                        <nav style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}>
                            <a href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Home</a>
                            <a href="/jobs" style={{ color: "#2563eb", textDecoration: "none" }}>Browse Jobs</a>
                            <a href="/admin/login" style={{ color: "#2563eb", textDecoration: "none" }}>Post a Job</a>
                        </nav>
                    </div>
                    <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem" }}>Contact</p>
                        <p style={{ margin: "1rem 0 0", color: "#6b7280", lineHeight: "1.8" }}>
                            support@jobportal.com
                        </p>
                    </div>
                </div>
                <div style={{ maxWidth: "1280px", margin: "2.5rem auto 0", borderTop: "1px solid #e5e7eb", paddingTop: "1.5rem", color: "#6b7280", fontSize: "0.95rem" }}>
                    © 2024 JobPortal. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Rashid;
