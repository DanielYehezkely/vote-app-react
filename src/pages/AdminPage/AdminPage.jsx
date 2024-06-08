
import './AdminPage.css'

import NavBar from '../../components/NavBar/NavBar'
import AdminUsersTable from '../../components/AdminUsersTable/AdminUsersTable';

const AdminPage = () => {
  return (
    <>
      <div className="page admin-page">
    <NavBar/>
    <AdminUsersTable/>
    <section className='chart-section'>
      
    </section>
    </div>
    </>
  );
};

export default AdminPage;
