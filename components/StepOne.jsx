"use client";

export default function StepOne({ register, errors }) {
  return (
    <div className="flex flex-col gap-2.5 mt-[30px] bg-white rounded-[10px] py-[35px] px-[20px] mx-4 md:w-[400px] md:gap-[25px] md:p-0 md:mb-[30%] md:m-2">
      <h1 className="text-[var(--blue-950)]">Personal info</h1>
      <p className="text-[var(--grey-500)] mb-1.5">
        Please provide your name, email address, and phone number
      </p>
      <div className="flex flex-col">
        <label>Name</label>
        <input
          {...register("name")}
          className="border-2 p-2 align-middle font-medium rounded-[4px] border-[var(--purple-100)] outline-none focus:border-[var(--purple-600)]"
          placeholder="e.g. Kim Eugene"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          {...register("email")}
          className="border-2 p-2 align-middle font-medium rounded-[4px] border-[var(--purple-100)] outline-none focus:border-[var(--purple-600)]"
          placeholder="e.g. kimeugene0824@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label>Phone Number</label>
        <input
          {...register("phone")}
          className="border-2 p-2 align-middle font-medium rounded-[4px] border-[var(--purple-100)] outline-none focus:border-[var(--purple-600)]"
          placeholder="e.g. 010 9918 0825"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}
