function Contact() {
    return (
        <div className="container py-5">
            <div className="row g-5">
                {/* Contact Info Column */}
                <div className="col-lg-5">
                    <span className="badge bg-info text-dark px-3 py-2 rounded-pill fs-6 mb-2 fw-bold">Support Center</span>
                    <h2 className="fw-bold text-dark mb-3">Get in Touch with HR</h2>
                    <p className="text-muted mb-4">
                        Have questions about system access, employee onboarding, or administrative roles? Send us a message and our team will get back to you.
                    </p>
                    
                    <div className="d-flex flex-column gap-3">
                        <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                            <div className="fs-3 text-info">📍</div>
                            <div>
                                <h6 className="fw-bold mb-0">Corporate Office</h6>
                                <small className="text-muted">Hyderabad, Telangana, India</small>
                            </div>
                        </div>
                        <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                            <div className="fs-3 text-info">📧</div>
                            <div>
                                <h6 className="fw-bold mb-0">Email Support</h6>
                                <small className="text-muted">support@hrmanagement.com</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="col-lg-7">
                    <div className="card border-0 shadow p-4 rounded-4">
                        <h4 className="fw-bold text-dark mb-4">Send a Message</h4>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Your Name</label>
                                    <input type="text" className="form-control p-2" placeholder="Jane Doe" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <input type="email" className="form-control p-2" placeholder="jane@example.com" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Subject</label>
                                    <input type="text" className="form-control p-2" placeholder="Account Access / Support" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea className="form-control p-2" rows="4" placeholder="Type your message here..." required></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-dark w-100 py-2 fw-bold">Submit Inquiry</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
