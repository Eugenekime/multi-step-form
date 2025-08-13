import { useStore } from "./store";

export default function StepFour() {
  const plan = useStore((state) => state.monthOrYear);
  const stepData = useStore((state) => state.stepData);
  const changeTariff = useStore((state) => state.changeTariff);
  const totalPrice = Number(
    (plan ? stepData.tariff.priceYear : stepData.tariff.priceMonth) +
      stepData.additions.reduce((sum, item) => {
        return sum + Number(plan ? item.priceYear : item.priceMonth);
      }, 0)
  );
  return (
    <div className="flex flex-col gap-2.5 mt-[30px] bg-white rounded-[10px] py-[35px] px-[20px] mx-4 md:mb-[30%] md:w-max">
      <h1 className="text-[var(--blue-950)]">Finishing Up</h1>
      <p className="text-[var(--grey-500)] mb-1.5">
        Double-check everything looks OK before confirming
      </p>
      <div className="flex flex-col bg-[var(--blue-100)] rounded-[6px] p-3">
        <div className="flex justify-between items-center text-[15px] py-2 mx-2 border-b-[1px] border-[var(--grey-500)]">
          <div className="flex flex-col items-start">
            <span className="text-[var(--blue-950)] font-bold">{`${
              stepData.tariff.name
            } ${plan ? "(Yearly)" : "(Monthly)"}`}</span>
            <button
              type="button"
              className="text-[var(--grey-500)] underline cursor-pointer hover:text-[var(--purple-600)]"
              onClick={() => changeTariff()}
            >
              Change
            </button>
          </div>

          <p className="text-[var(--blue-950)] font-bold">{`$${
            plan ? stepData.tariff.priceYear : stepData.tariff.priceMonth
          }${plan ? "/yr" : "/mo"}`}</p>
        </div>
        {stepData.additions.map((item) => (
          <div key={item.id} className="flex justify-between text-[15px] p-2">
            <p className="text-[var(--grey-500)]">{item.name}</p>
            <p className="text-[var(--blue-950)]">{`+$${
              plan ? item.priceYear : item.priceMonth
            }${plan ? "/yr" : "/mo"}`}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between mx-2 px-3 pt-2 mt-2">
        <span className="text-[var(--grey-500)] text-[18px]">
          Total {`${plan ? "(per year)" : "(per month)"}`}
        </span>
        <p className="text-[var(--purple-600)] font-bold text-[18px]">
          +${totalPrice}
          {`${plan ? "/yr" : "/mo"}`}
        </p>
      </div>
    </div>
  );
}
