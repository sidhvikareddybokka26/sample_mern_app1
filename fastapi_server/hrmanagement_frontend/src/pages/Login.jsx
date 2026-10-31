import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";

function Login() {  
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    let handleLogin = (event) => {
        event.preventDefault();
        if (email === "admin@gmail.com" && password === "admin") {
            navigate("/Adminhome");
        } else if (email === "hr@gmail.com") {
            navigate("/Hrhome");
        } else {
            navigate("/Emphome");
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card border-0 shadow-lg overflow-hidden rounded-4" style={{ maxWidth: "850px", width: "100%" }}>
                <div className="row g-0">
                    <div 
                        className="col-md-6 text-white p-5 d-flex flex-column justify-content-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.7)), url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <h3 className="fw-bold mb-2">Welcome Back</h3>
                        <p className="small text-light opacity-90 mb-0">Log in to manage your HR portal, employee metrics, and organization tasks.</p>
                    </div>
                    <div className="col-md-6 p-4 p-md-5 bg-white">
                        <h3 className="fw-bold text-dark mb-4 text-center">Sign In</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control p-2" 
                                    placeholder="name@company.com" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control p-2" 
                                    placeholder="••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-dark w-100 py-2 fw-bold mt-3">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;