import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";

function Home() {
    return (
        <div className="w-100">
            {/* Full-width Hero Banner using local img1.jpg */}
            <div 
                className="position-relative text-white py-5 px-4 text-center hero-overlay"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.75)), url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '480px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div className="container py-5">
                    <span className="badge bg-info text-dark px-3 py-2 rounded-pill fs-6 mb-3 fw-bold">
                        Enterprise HR Solutions
                    </span>
                    <h1 className="display-4 fw-bold mb-3">Modern Workforce & Talent Management</h1>
                    <p className="lead col-lg-8 mx-auto mb-4 text-light opacity-90">
                        Streamline employee onboarding, track department analytics, and empower your HR leadership with an intuitive, unified platform.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/login" className="btn btn-info btn-lg px-4 text-dark fw-bold shadow-sm">
                            Access Portal
                        </Link>
                        <Link to="/about" className="btn btn-outline-light btn-lg px-4 fw-semibold">
                            Explore Features
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="bg-dark text-white py-4 border-top border-secondary">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <h3 className="fw-bold text-info mb-0">99.9%</h3>
                            <small className="text-light opacity-75">Platform Uptime</small>
                        </div>
                        <div className="col-md-4">
                            <h3 className="fw-bold text-info mb-0">10k+</h3>
                            <small className="text-light opacity-75">Employees Managed</small>
                        </div>
                        <div className="col-md-4">
                            <h3 className="fw-bold text-info mb-0">Role-Based</h3>
                            <small className="text-light opacity-75">Admin, HR & Staff Security</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards Section */}
            <div className="container my-5 py-4">
                <h2 className="text-center fw-bold text-dark mb-4">Designed for Strategic HR Operations</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light">
                            <div className="fs-1 text-info mb-3">👥</div>
                            <h5 className="fw-bold text-dark">Employee Management</h5>
                            <p className="text-muted">Maintain complete employee directories, manage department assignments, and track records effortlessly.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light">
                            <div className="fs-1 text-info mb-3">📊</div>
                            <h5 className="fw-bold text-dark">Real-Time Analytics</h5>
                            <p className="text-muted">Gain instant visibility into attendance, pending leave applications, and organizational distribution.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light">
                            <div className="fs-1 text-info mb-3">🔒</div>
                            <h5 className="fw-bold text-dark">Role-Based Control</h5>
                            <p className="text-muted">Custom dashboard views specifically tailored for Administrators, HR Officers, and Team Members.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;