import { useLocation, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'User';

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="absolute top-0 left-0 bg-purple-900 w-full h-12 flex items-center pl-4">
  <h1 className="text-white text-lg font-bold">Dashboard</h1>
        <button onClick={handleLogout} className="bg-gray-50 text-black p-1 pl-2 pr-2 rounded ml-auto mr-6">
          Sign Out
        </button>
      </div>
      <div className="p-8 bg-gray-100 rounded shadow-lg">
        <h1 className="text-4xl mb-4">Welcome </h1>
        <p className="text-xl"><strong>Email:</strong> {email}</p>
      </div>
      <div className="bg-purple-900 w-full h-12 fixed bottom-0"></div>

    </div>
    
  );
};

export default Welcome;
