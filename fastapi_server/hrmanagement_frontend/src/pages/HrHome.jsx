import 'bootstrap/dist/css/bootstrap.min.css';

function HrHome() {
    return (
        <div className="container my-5">
            <div className="p-5 bg-light rounded-4 shadow-sm border">
                <h1 className="fw-bold text-dark">HR Dashboard</h1>
                <p className="text-muted fs-5 mt-2">Manage employee records, review applications, and coordinate team workflows.</p>
                <hr className="my-4" />
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-primary">Total Employees</h5>
                            <h3 className="fw-bold text-dark mt-2">19</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-success">Pending Reviews</h5>
                            <h3 className="fw-bold text-dark mt-2">4</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-warning">Departments</h5>
                            <h3 className="fw-bold text-dark mt-2">6</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HrHome;