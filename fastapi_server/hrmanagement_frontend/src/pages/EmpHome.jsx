import 'bootstrap/dist/css/bootstrap.min.css';

function EmpHome() {
    return (
        <div className="container my-5">
            <div className="p-5 bg-light rounded-4 shadow-sm border">
                <h1 className="fw-bold text-dark">Employee Portal</h1>
                <p className="text-muted fs-5 mt-2">View your profile details, check announcements, and manage daily logs.</p>
                <hr className="my-4" />
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-info">Attendance</h5>
                            <h3 className="fw-bold text-dark mt-2">98%</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-success">Leave Balance</h5>
                            <h3 className="fw-bold text-dark mt-2">12 Days</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-secondary">Tasks Assigned</h5>
                            <h3 className="fw-bold text-dark mt-2">3 Pending</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmpHome;