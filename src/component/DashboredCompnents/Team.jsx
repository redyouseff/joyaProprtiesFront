import React, { useState } from "react";
import Sidebar from "./SideBar"; // Assuming Sidebar is a valid component
import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "../../axios"; // Your axios instance
import { FaTrash, FaPen } from "react-icons/fa";

// Fetch team members from backend
const fetchTeamMembers = async (page = 1, pageSize = 5) => {
  const { data } = await axiosInstance.get(`/team?page=${page}&pageSize=${pageSize}`);
  return data;
};

// Create a new team member
const createTeamMember = async (newMember) => {
  const { data } = await axiosInstance.post("/team", newMember);
  return data.teamMember;
};

// Update a team member
const updateTeamMember = async (updatedMember) => {
  const { data } = await axiosInstance.put(`/team/${updatedMember.get('id')}`, updatedMember);
  return data.teamMember;
};

// Delete a team member
const deleteTeamMember = async (memberId) => {
  const { data } = await axiosInstance.delete(`/team/${memberId}`);
  return data;
};

const Team = () => {
  const baseURL = "https://joyaproprties.onrender.com";

  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    language: "",
    email: "",
    phone: "",
    image: null,
  });

  const [editMemberId, setEditMemberId] = useState(null);

  const { data: teamMembersData, isLoading, error, refetch } = useQuery({
    queryKey: ['teamMembers'],
    queryFn: fetchTeamMembers,
  });

  const addMemberMutation = useMutation({
    mutationFn: createTeamMember,
    onSuccess: () => {
      refetch();
      setNewMember({ name: "", position: "", language: "", email: "", phone: "", image: null });
    },
  });

  const updateMemberMutation = useMutation({
    mutationFn: updateTeamMember,
    onSuccess: () => {
      refetch();
      setEditMemberId(null);
      setNewMember({ name: "", position: "", language: "", email: "", phone: "", image: null });
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: deleteTeamMember,
    onSuccess: refetch,
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newMember).forEach(([key, value]) => {
      formData.append(key, value);
    });
    addMemberMutation.mutate(formData);
  };

  const handleUpdateMember = (id) => {
    const updatedMember = new FormData();
    updatedMember.append("id", id);
    updatedMember.append("name", newMember.name);
    updatedMember.append("position", newMember.position);
    updatedMember.append("language", newMember.language);
    updatedMember.append("email", newMember.email);
    updatedMember.append("phone", newMember.phone);
    if (newMember.image) {
      updatedMember.append("image", newMember.image);
    }
    updateMemberMutation.mutate(updatedMember);
  };

  const handleDeleteMember = (id) => {
    deleteMemberMutation.mutate(id);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewMember((prev) => ({ ...prev, image: file }));
    }
  };

  const handleEditFieldChange = (field, value) => {
    setNewMember((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditMember = (member) => {
    setEditMemberId(member._id);
    setNewMember({ 
      name: member.name,
      position: member.position,
      language: member.language,
      email: member.email,
      phone: member.phone,
      image: null 
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching team members</div>;

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Team Members</h1>

        <form onSubmit={handleAddMember} className="bg-[#1a1f1e] p-6 mb-6 rounded shadow-lg">
          <h2 className="text-xl mb-4">Add New Member</h2>
          <input type="text" placeholder="Enter full name" value={newMember.name} onChange={(e) => handleEditFieldChange("name", e.target.value)} className="w-full mb-4 p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
          <input type="text" placeholder="Enter position" value={newMember.position} onChange={(e) => handleEditFieldChange("position", e.target.value)} className="w-full mb-4 p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
          <input type="text" placeholder="Enter language(s)" value={newMember.language} onChange={(e) => handleEditFieldChange("language", e.target.value)} className="w-full mb-4 p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
          <input type="email" placeholder="Enter email address" value={newMember.email} onChange={(e) => handleEditFieldChange("email", e.target.value)} className="w-full mb-4 p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
          <input type="text" placeholder="Enter phone number" value={newMember.phone} onChange={(e) => handleEditFieldChange("phone", e.target.value)} className="w-full mb-4 p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
          <input type="file" onChange={handleImageUpload} className="mb-4" />
          <button type="submit" className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#698f8c]">Add Member</button>
        </form>

        {teamMembersData.teamMembers.map((member) => (
          <div key={member._id} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-[#1a1f1e] p-6 rounded shadow-lg">
            <div className="flex justify-center items-center mb-6 md:mb-0">
              <img src={`${baseURL}${member.image}`} alt="Team Member" className="rounded-full w-52 h-52 object-cover" />
            </div>
            <div className="space-y-4">
              {editMemberId === member._id ? (
                <>
                  <input type="text" value={newMember.name} onChange={(e) => handleEditFieldChange("name", e.target.value)} placeholder="Enter full name" className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
                  <input type="text" value={newMember.position} onChange={(e) => handleEditFieldChange("position", e.target.value)} placeholder="Enter position" className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
                  <input type="text" value={newMember.language} onChange={(e) => handleEditFieldChange("language", e.target.value)} placeholder="Enter language(s)" className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
                  <input type="email" value={newMember.email} onChange={(e) => handleEditFieldChange("email", e.target.value)} placeholder="Enter email address" className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
                  <input type="text" value={newMember.phone} onChange={(e) => handleEditFieldChange("phone", e.target.value)} placeholder="Enter phone number" className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded" />
                  <input type="file" onChange={handleImageUpload} className="mb-4" />
                </>
              ) : (
                <>
                  <div>{member.name}</div>
                  <div>{member.position}</div>
                  <div>{member.language}</div>
                  <div>{member.email}</div>
                  <div>{member.phone}</div>
                </>
              )}
            </div>

            <div className="absolute top-0 right-0 flex items-center space-x-4">
              {editMemberId === member._id ? (
                <button onClick={() => handleUpdateMember(member._id)} className="bg-[#3d6a64] px-4 py-2 text-white rounded hover:bg-[#698f8c]">Save</button>
              ) : (
                <button onClick={() => handleEditMember(member)} className="bg-[#3d6a64] px-4 py-2 text-white rounded hover:bg-[#698f8c]"><FaPen /></button>
              )}
              <button onClick={() => handleDeleteMember(member._id)} className="bg-[#3d6a64] px-4 py-2 text-white rounded hover:bg-[#698f8c]"><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;