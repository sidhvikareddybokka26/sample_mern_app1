import 'bootstrap/dist/css/bootstrap.min.css';

function AdminHome() {
    return (
        <div className="container my-5">
            <div className="p-5 bg-light rounded-4 shadow-sm border">
                <h1 className="fw-bold text-dark">Admin Dashboard</h1>
                <p className="text-muted fs-5 mt-2">Manage system settings, users, and organization metrics securely.</p>
                <hr className="my-4" />
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-info">Total Users</h5>
                            <h3 className="fw-bold text-dark mt-2">24</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-success">Active HRs</h5>
                            <h3 className="fw-bold text-dark mt-2">5</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white rounded-3 shadow-sm border">
                            <h5 className="fw-bold text-warning">Active Employees</h5>
                            <h3 className="fw-bold text-dark mt-2">19</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;