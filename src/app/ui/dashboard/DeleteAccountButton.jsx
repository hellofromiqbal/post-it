"use client"

import { useRouter } from "next/navigation";

const DeleteAccountButton = ({id}) => {
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/delete/${id}`, { method: 'DELETE' });
      if(!res.ok) {
        throw new Error("Failed to delete account.");
      } else {
        router.push("/");
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <button
      className='px-4 py-2 bg-red-500 hover:bg-red-600 text-black font-semibold rounded-full transition duration-150'
      onClick={(e) => handleDelete(e)}
    >Delete Account</button>
  )
};

export default DeleteAccountButton;