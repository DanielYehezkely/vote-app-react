
import './AdminPage.css'

import NavBar from '../../components/NavBar/NavBar'
import AdminUsersTable from '../../components/Admin/AdminUsersTable/AdminUsersTable'
import Chart from '../../components/Admin/AdminChart/Chart';


const AdminPage = () => {
  return (
    <>
      <div className="page admin-page">
        <NavBar />
        <h1>Users Status</h1>
        <AdminUsersTable />
        <h1>Candidates Status</h1>
        <Chart />
      </div>
    </>
  );
};

export default AdminPage;
