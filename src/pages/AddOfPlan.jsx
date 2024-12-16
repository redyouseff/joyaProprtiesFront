import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/DashboredCompnents/SideBar';
import axiosInstance from '../axios'; // Your axiosInstance file for API calls

const AddOffPlan = () => {
  const navigate = useNavigate();

  // State for all fields
  const [propertyType, setPropertyType] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [description, setDescription] = useState('');
  const [HandoverDate, setHandoverDate] = useState('');
  const [Bookingfees, setBookingfees] = useState('');
  const [Bedrooms1, setBedrooms1] = useState();
  const [Bedrooms2, setBedrooms2] = useState();
  const [Bedrooms3, setBedrooms3] = useState();
  const [Bedrooms4, setBedrooms4] = useState();

  const [space, setSpace] = useState('');
  const [PaymentPlan, setPaymentPlan] = useState('');
  const [location, setlocation] = useState('');
  const [StartingPrice, setStartingPrice] = useState('');
  const [imgSrcs, setimgSrcs] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [details,setdetails]=useState("")
  const [ExpoCity,setExpoCity]=useState("")
  const[MarinaWalk,setMarinaWalk]=useState("")
  const [DubaiInternationalAirport,setDubaiInternationalAirport]=useState("")
  const [DowntownDubai,setDowntownDubai]=useState("")
  const [title,settitle]=useState("")
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
    const  Bedrooms=[Bedrooms1,Bedrooms2,Bedrooms3,Bedrooms4]
    console.log(Bedrooms)
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
   
    formData.append('Bookingfees', Bookingfees);
    Bedrooms.forEach((bedroom, index) => {
      formData.append(`Bedrooms[${index}]`, bedroom);
    });   
    formData.append('space', space);
    formData.append('PaymentPlan', PaymentPlan);
    formData.append('location', location);
    formData.append('StartingPrice', StartingPrice);
    formData.append('bookingFees', Bookingfees);
    formData.append('HandoverDate', HandoverDate);
    formData.append('ExpoCity', ExpoCity);
    formData.append('DubaiInternationalAirport', DubaiInternationalAirport);
    formData.append('DowntownDubai', DowntownDubai);
    formData.append('title', title);
    formData.append('details', details);
    formData.append('MarinaWalk', MarinaWalk);
    console.log("fromdata",formData.data);
    
    try {
      const response = await axiosInstance.post('https://joyaproprties.onrender.com/api/off-plan', formData, {
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
        <h1 className="text-2xl font-semibold mb-6 text-center">Add Off Plan</h1>

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
          <label className="block text-sm font-medium mb-2">Property Title</label>
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
            <label className="block text-sm font-medium mb-2">StartingPrice</label>
            <input
              type="text"
              placeholder="Enter StartingPrice"
              value={StartingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">HandoverDate</label>
            <input
              type="number"
              placeholder="Enter HandoverDate"
              value={HandoverDate}
              onChange={(e) => setHandoverDate(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Bookingfees</label>
            <input
              type="number"
              placeholder="Enter Bookingfees"
              value={Bookingfees}
              onChange={(e) => setBookingfees(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <input
              type="number"
              placeholder="Enter Bedrooms 1"
             
              onChange={(e) => setBedrooms1(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="number"
              placeholder="Enter Bedrooms 2 "
              
              onChange={(e) => setBedrooms2(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="number"
              placeholder="Enter Bedrooms 3"
            
              onChange={(e) => setBedrooms3(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <label className="block text-sm font-medium mb-2"></label>
            <input
              type="number"
              placeholder="Enter bathrooms 4"
             
              onChange={(e) => setBedrooms4(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
         
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Payment Plan</label>
          <textarea
            placeholder="Enter payment plan details..."
            value={PaymentPlan}
            onChange={(e) => setPaymentPlan(e.target.value)}
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Location </label>
          <textarea
            placeholder="Enter location link"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">ExpoCity</label>
          <input
            type="text"
            placeholder="Enter Expo City"
            value={ExpoCity}
            onChange={(e) => setExpoCity(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">MarinaWalk</label>
          <input
            type="number"
            placeholder="Enter booking fees"
            value={MarinaWalk}
            onChange={(e) => setMarinaWalk(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">DubaiInternationalAirport</label>
          <input
            type="number"
            placeholder='Enter  Dubai International Airport '
            value={DubaiInternationalAirport}
            onChange={(e) => setDubaiInternationalAirport(e.target.value)}
            className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">DowntownDubai</label>
          <input
            type="number"
             placeholder='Enter  DowntownDubai '
            value={DowntownDubai}
            onChange={(e) => setDowntownDubai(e.target.value)}
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

export default AddOffPlan;


