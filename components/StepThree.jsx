"use client";

import Image from "next/image";
import { useStore } from "./store";
import { useEffect } from "react";
import isEqual from "lodash.isequal";

export default function StepThree({ register, watch }) {
  const plan = useStore((state) => state.monthOrYear);
  const additionsLocal = useStore((state) => state.additions);
  const setStepData = useStore((state) => state.setStepData);
  const currentAdditions = useStore((state) => state.stepData.additions);

  const selectedAdditions = watch("additions") || [];

  useEffect(() => {
    const additions = additionsLocal.filter((add) =>
      selectedAdditions.includes(add.name)
    );
    if (!isEqual(additions, currentAdditions)) {
      setStepData("additions", additions);
    }
  }, [selectedAdditions]);

  return (
    <div className="flex flex-col gap-2.5 mt-[30px] bg-white rounded-[10px] py-[35px] px-[20px] mx-4 md:w-max md:mb-[30%]">
      <h1 className="text-[var(--blue-950)]">Pick add-ons</h1>
      <p className="text-[var(--grey-500)] mb-1.5">
        Add-ons help enhance your gaming experience
      </p>
      <div className="flex flex-col gap-2">
        {additionsLocal.map((add) => (
          <div key={add.id}>
            <input
              type="checkbox"
              className="hidden peer"
              id={add.id}
              value={add.name}
              onChange={() => {
                console.log("Checkbox changed:", add.name);
                handleCheckboxChange(add.name);
              }}
              {...register("additions")}
            />
            <label
              htmlFor={add.id}
              className="flex flex-row items-center justify-start border border-[var(--purple-100)] gap-3 rounded-[6px] p-3 cursor-pointer peer-checked:bg-[var(--blue-100)] peer-checked:border-[var(--purple-600)]"
            >
              <div className="checkmark flex justify-center w-[25px] h-[25px] rounded-[6px] border border-[var(--purple-100)] peer-checked:bg-[var(--purple-600)]">
                <Image
                  src={"/images/icon-checkmark.svg"}
                  alt="check mark"
                  width={16}
                  height={16}
                  className=""
                ></Image>
              </div>

              <div className="flex flex-col justify-center items-start">
                <h3 className="text-[var(--blue-950)] text-[15px]">
                  {add.name}
                </h3>
                <p className="text-[var(--grey-500)] text-[12px]">
                  {add.description}
                </p>
              </div>
              <span className="text-[var(--purple-600)] text-[12px] ml-auto">
                {plan ? `+${add.priceYear}$/yr` : `+${add.priceMonth}$/mo`}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
