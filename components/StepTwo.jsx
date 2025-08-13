"use client";

import Image from "next/image";
import ToggleBtn from "./ui/ToggleBtn";
import { useStore } from "./store";

export default function StepTwo({ register, errors }) {
  const options = useStore((state) => state.tariffs);
  const plan = useStore((state) => state.monthOrYear);
  const setStepData = useStore((state) => state.setStepData);
  return (
    <div className="flex flex-col gap-2.5 mt-[30px] mb-[20px] bg-white rounded-[10px] py-[35px] px-[20px] mx-4 md:p-0 md:mb-[30%] md:py-[10px]">
      <h1 className="text-[var(--blue-950)]">Select you plan</h1>
      <p className="text-[var(--grey-500)] mb-1.5">
        You have the option of monthly and yearly billing
      </p>
      <div className="flex flex-col gap-2 md:flex-row">
        {options.map((option) => (
          <div key={option.id} className="cursor-pointer">
            <input
              id={option.id}
              type="radio"
              {...register("tariff", { required: "Please select your plan" })}
              value={option.name}
              className="hidden peer"
              onClick={() => setStepData("tariff", option)}
            />
            <label
              htmlFor={option.id}
              className="flex flex-row border-2 border-[var(--purple-100)] gap-3.5 rounded-[6px] p-3.5 focus:border-[var(--purple-600)] focus:border-2 peer-checked:border-[var(--purple-600)] peer-checked:bg-[var(--blue-100)] peer-checked:border-2 cursor-pointer md:flex-col md:w-[125px] "
            >
              <Image
                src={option.img}
                alt="icon of tariff"
                width={45}
                height={45}
              ></Image>
              <div>
                <h2 className="text-[var(--blue-950)]">{option.name}</h2>
                <p className="text-[var(--grey-500)]">
                  {plan
                    ? `$${option.priceYear}/yr`
                    : `$${option.priceMonth}/mo`}
                </p>
                {plan && (
                  <p className="text-[var(--blue-950)] font-medium text-[14px]">
                    2 months free
                  </p>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
      {errors.tariff && (
        <p className="text-red-500 text-sm">{errors.tariff.message}</p>
      )}
      <div className="flex justify-center items-center gap-4 p-5 mt-5 rounded-[6px] bg-[var(--blue-100)]">
        <p
          className={`text-[var(--blue-950)] font-medium ${
            plan ? "text-[var(--grey-500)] " : "text-[var(--blue-950)]"
          }`}
        >
          Monthly
        </p>
        <ToggleBtn></ToggleBtn>
        <p
          className={`text-[var(--blue-950)] font-medium ${
            plan ? "text-[var(--blue-950)]" : "text-[var(--grey-500)]"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
