import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";

const Courseform = ({ course }) => {
  const { user } = useAuth();
  console.log(course);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const submitdata = {
      userName: user?.displayName,
      fullName: data.fullName,
      email: user?.email,
      phone: data.phone,
      address: data.address,
      education: data.education,
      experience: data.experience,
      expectations: data.expectations,
      category: course?.category,
      subcategory: course?.subcategory,
      price: course?.price,
      title: course?.title,
      thumbnail: course?.thumbnail,
    };
    console.log(submitdata)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Your full name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your email address"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone", { required: true })}
            type="number"
            placeholder="Your phone number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            {...register("address")}
            type="text"
            placeholder="Your address"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Education Background
        </label>
        <input
          {...register("education")}
          type="text"
          placeholder="Your highest education qualification"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Relevant Experience
        </label>
        <textarea
          {...register("experience")}
          placeholder="Any relevant experience in this field"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Course Expectations
        </label>
        <textarea
          {...register("expectations")}
          placeholder="What do you hope to achieve from this course?"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        ></textarea>
      </div>

      <div className="border-t pt-4">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-colors"
        >
          Add to Cart
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          You'll be directed to our secure payment page after submission.
        </p>
      </div>
    </form>
  );
};

export default Courseform;
