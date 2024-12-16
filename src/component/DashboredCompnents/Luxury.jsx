import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios'; // Your axiosInstance file for API calls
import Sidebar from './SideBar';

const LuxuryDashboard = () => {
  const navigate = useNavigate();

  // State for all fields
  const [propertyType, setPropertyType] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [description, setDescription] = useState('');
  const [HandoverDate, setHandoverDate] = useState('');
  const [agentPhone, setagentPhone] = useState('');
  const [agentWhatsapp, setagentWhatsapp] = useState();
  const [Bedrooms2, setBedrooms2] = useState();
  const [Bedrooms3, setBedrooms3] = useState();
  const [Bedrooms4, setBedrooms4] = useState();

  const [space, setSpace] = useState('');
  const [PaymentPlan, setPaymentPlan] = useState('');
  const [location, setlocation] = useState('');
  const [agentName, setagentName] = useState('');
  const [imgSrcs, setimgSrcs] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [details,setdetails]=useState("")
  const [beds,setbeds]=useState("")
  const[baths,setbaths]=useState("")
  const [sq,setsq]=useState("")
  const [cars,setcars]=useState("")
  const [title,settitle]=useState("")
  const [agentImage,setagentImage]=useState()
  const [error, setError] = useState('');


  // Handlers
  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value)
  };
  const handleImageChange = (e) => {
    setimgSrcs([...imgSrcs,e.target.files[0]])
  };
  const handleCoverImageChange = (e) => setCoverImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
 
    console.log(imgSrcs)

    // Prepare form data
    const formData = new FormData();
    formData.append('type', propertyType);
    imgSrcs.forEach((image, index) => {
      formData.append(`imgSrcs`, image);
    });
    // formData.append('imgSrcs', imgSrcs);
    formData.append('coverImage', coverImage);
    formData.append('propertyName', propertyName);
    formData.append('description', description);
   
    formData.append('agentPhone', agentPhone);
  
    formData.append('space', space);
    formData.append('PaymentPlan', PaymentPlan);
    formData.append('location', location);
    formData.append('agentName', agentName);
    formData.append('HandoverDate', HandoverDate);
    formData.append('beds', beds);
    formData.append('sq', sq);
    formData.append('cars', cars);
    formData.append('title', title);
    formData.append('details', details);
    formData.append('baths', baths);
    formData.append('agentImage', agentImage);
    formData.append('agentWhatsapp', agentWhatsapp);


    try {
      const response = await axiosInstance.post('https://joyaproprties.onrender.com/api/laxury', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        alert('Property added successfully!');
        navigate('/properties');  
      } else {
        console.log(response)
        setError('Failed to add property. Please try again.');
      }
    } catch (err) {
      console.log(err)
      setError('Error submitting property. Please check your network.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Luxury Projects </h1>

        {error && <div className="text-red-500 mb-4">{error}</div>}

      

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Property Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Property  Title</label>
          <input
            type="text"
            placeholder="Enter property name"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Property Description</label>
          <textarea
            placeholder="Enter property description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          <label className="block text-sm font-medium mb-2">Property details</label>
          <textarea
            placeholder="Enter property details..."
            value={details}
            onChange={(e) => setdetails(e.target.value)}
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">agentName</label>
            <input
              type="text"
              placeholder="Enter agentName"
              value={agentName}
              onChange={(e) => setagentName(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">agentImage</label>
            <input
              type="file"
              onChange={(e) => setagentImage(e.target.files[0])}
              accept="image/*"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-6">
          <div>
          <label className="block text-sm font-medium mb-2">Agent Phone</label>
<input
  type="tel"
  placeholder="Enter Agent Phone"
  value={agentPhone}
  onChange={(e) => setagentPhone(e.target.value)}
  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:ring-2 focus:ring-blue-500"
/>

          </div>
          <div>
          <label className="block text-sm font-medium mb-2">Agent WhatsApp</label>
<input
  type="tel"
  placeholder="Enter Agent WhatsApp"
  value={agentWhatsapp}
  onChange={(e) => setagentWhatsapp(e.target.value)}
  className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

            
             
            
          </div>
         
        </div>
        

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">beds</label>
          <input
            type="text"
            placeholder="Enter Expo beds"
            value={beds}
            onChange={(e) => setbeds(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">baths</label>
          <input
            type="number"
            placeholder="Enter  baths"
            value={baths}
            onChange={(e) => setbaths(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">sq</label>
          <input
            type="number"
            placeholder='Enter sq '
            value={sq}
            onChange={(e) => setsq(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">cars</label>
          <input
            type="number"
             placeholder='Enter  cars '
            value={cars}
            onChange={(e) => setcars(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryDashboard;