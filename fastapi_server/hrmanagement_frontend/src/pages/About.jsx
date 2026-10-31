import img2 from "../assets/img2.jpg";

function About() {
    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill fs-6 mb-2">About Us</span>
                <h2 className="fw-bold text-dark display-6">Empowering Organizations Through Smart HR</h2>
                <p className="text-muted col-md-8 mx-auto lead">
                    Our platform simplifies complex human resource operations, giving leaders and HR teams the tools they need to foster growth.
                </p>
            </div>

            <div className="row align-items-center g-5 my-2">
                <div className="col-lg-6">
                    <img 
                        src={img2} 
                        alt="HR Platform Preview" 
                        className="img-fluid rounded-4 shadow"
                        style={{ objectFit: 'cover', width: '100%', maxHeight: '380px' }}
                    />
                </div>
                <div className="col-lg-6">
                    <h3 className="fw-bold text-dark mb-3">Built for Modern Workplace Demands</h3>
                    <p className="text-muted">
                        Whether you are handling daily attendance, updating employee files, or managing department permissions, our system provides an efficient, user-friendly interface.
                    </p>
                    <div className="d-flex flex-column gap-3 mt-4">
                        <div className="d-flex align-items-start gap-3">
                            <div className="badge bg-info text-dark p-2 rounded-circle fs-5">✓</div>
                            <div>
                                <h6 className="fw-bold mb-1">Seamless Integration</h6>
                                <small className="text-muted">Connect your front-end user interfaces directly to REST APIs and database layers.</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-start gap-3">
                            <div className="badge bg-info text-dark p-2 rounded-circle fs-5">✓</div>
                            <div>
                                <h6 className="fw-bold mb-1">High Scalability</h6>
                                <small className="text-muted">Designed to accommodate expanding enterprise teams and multi-department structures.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;