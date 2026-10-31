import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [role, setRole] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered successfully as ${role}!`);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="card shadow-sm border-0 p-4 rounded-4" style={{ width: "100%", maxWidth: "420px" }}>
                <h2 className="text-center fw-bold mb-4 text-dark">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Choose Role</label>
                        <select 
                            className="form-select" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select your role</option>
                            <option value="HR">HR</option>
                            <option value="EMPLOYEE">Employee</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-dark w-100 fw-semibold mt-2">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
