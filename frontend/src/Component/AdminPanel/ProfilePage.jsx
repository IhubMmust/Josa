
import  { useState, useEffect,useCallback } from 'react';
import { Icon } from '@iconify/react';
import { User, Mail, Lock } from 'lucide-react';


const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreviewImage] = useState(null);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isEditing, setIsEditing] = useState(false);


  
  const [profileData, setProfileData] = useState({
    contact: '',
    image: '',
    first_name: '',
    last_name: '',
  });
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


 

  
  


    const fetchData = useCallback(async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/v1/admin/get/profile`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profileData data');
        }
         
         const responseData = await response.json();

         setProfileData(responseData);
     
         return responseData;
       
      } catch (error) {
        console.error(error);
      }
    },[apiBaseUrl])

    useEffect(() => {
    fetchData()
    
  }, [fetchData])



  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

 
  
  const handleSaveClick = async (event) => {
    event.preventDefault();
    setIsEditing(false);


    try {
     
      const formData = new FormData();
      formData.append("first_name", fName);
      formData.append("last_name", lName);
      formData.append("email", email);
      formData.append("image", image);
   
  
      const response = await fetch(`${apiBaseUrl}/api/v1/admin/update/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to update profileData data');
      }

       await fetchData()
      setIsEditing(false);
      setImage(null)
      setFName('')
      setLName('')
      setPreviewImage(null)
      setImage(null)
      setEmail('')
    
    } catch (error) {
      console.error(error);
    }
  };
  
  


  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src={ preview || profileData.image }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold">
              {profileData.first_name} {profileData.last_name}
            </h2>
            <p className="text-gray-600">{profileData.email}</p>
          </div>
        </div>
        <form onSubmit={handleSaveClick}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profileData.first_name}
                onChange={(e) => setFName(e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profileData.last_name}
                onChange={(e) => setLName(e.target.value)}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={profileData.password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!isEditing}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          {isEditing && (
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="flex justify-end">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveClick}
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
