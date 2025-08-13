"use client";
import { useStore } from "../../components/store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import StepThree from "../../components/StepThree";
import StepFour from "../../components/StepFour";
import FinishStep from "../../components/FinishStep";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(6, "Phone number is too short"),
  tariff: z.string().min(1, "Please select your plan"),
});
export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    shouldUnregister: false,
  });
  const nextStep = useStore((state) => state.nextStep);
  const step = useStore((state) => state.step);
  const pagination = useStore((state) => state.pagination);
  const prevStep = useStore((state) => state.prevStep);
  const stepData = useStore((state) => state.stepData);

  const onSubmit = (data) => {
    const fullData = {
      ...data,
      ...stepData,
    };
    console.log(fullData);
    // here you can use fetch or axis for send the data}
  };

  const validationForEachStep = async () => {
    let fields;
    if (step === 1) fields = ["name", "email", "phone"];
    if (step === 2) fields = ["tariff"];
    if (step === 4) {
      const valid = await trigger();
      console.log(step);
      if (valid) {
        onSubmit();
        nextStep();
      }
      return;
    }

    const valid = await trigger(fields);
    if (valid) nextStep();
  };

  return (
    <div className="md:p-5 md:bg-white md:flex md:rounded-[12px] md:min-w-[800px] md:items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat md:flex md:bg-[url('/images/bg-sidebar-desktop.svg')] md:flex-row md:bg-left md:gap-[10%]"
      >
        <div className="flex flex-row gap-4 mt-[35px] md:flex md:flex-col md:w-[50%] md:pr-[17%] md:pl-[2%] md:pb-[50%] md:pt-[2%]">
          {pagination.map((s) => (
            <div key={s.id} className="md:flex md:gap-4 md:items-center">
              <div
                className={`w-8 h-8 rounded-full flex justify-center items-center font-bold border border-[var(--blue-200)]
                ${
                  step === s.id
                    ? "bg-[var(--blue-200)] text-[var(--blue-950)]"
                    : "bg-[var(--purple-600)] text-[var(--blue-200)]"
                }`}
              >
                {s.id}
              </div>
              <div className="hidden md:flex md:flex-col md:w-max">
                <p className="text-white font-light text-[14px]">{s.step}</p>
                <p className="text-white font-bold text-[14px]">{s.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          {step === 1 && (
            <StepOne register={register} errors={errors}></StepOne>
          )}
          {step === 2 && (
            <StepTwo register={register} errors={errors}></StepTwo>
          )}
          {step === 3 && <StepThree register={register} watch={watch} />}
          {step === 4 && <StepFour />}
          {step === 5 && <FinishStep />}

          <div className="absolute bottom-0 left-0 flex justify-between w-full mt-auto bg-white h-[80px] md:relative md:px-[20px]">
            <button
              type="button"
              className={` cursor-pointer ${
                step === 1 && "invisible"
              } text-[var(--grey-500)] flex items-center m-[16px]`}
              onClick={prevStep}
            >
              Go back
            </button>
            <button
              type="button"
              onClick={validationForEachStep}
              className={`flex items-center m-[20px]  
          text-white rounded-[4px] cursor-pointer ${
            step === 4
              ? "bg-[var(--purple-600)] p-[10px] px-[22px] hover:opacity-70"
              : "bg-[var(--blue-950)] p-[10px] px-[16px]"
          } ${step === 5 ? "hidden" : "block"}`}
            >
              {step === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
