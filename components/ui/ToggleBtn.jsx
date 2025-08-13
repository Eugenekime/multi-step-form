"use client";
import { motion } from "framer-motion";
import { useStore } from "../store";

export default function ToggleBtn() {
  const step = useStore((state) => state.step);
  const plan = useStore((state) => state.monthOrYear);
  const setPlan = useStore((state) => state.setMonthOrYear);
  const test = () => {
    setPlan();
    console.log(step);
  };
  return (
    <button
      type="button"
      onClick={test}
      className={`relative flex items-center rounded-3xl w-[40px] h-[22px] cursor-pointer transition-colors duration-300 ease bg-[var(--blue-950)]`}
    >
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: plan ? 22 : 3 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-[14px] h-[13px] rounded-[50%]"
      ></motion.div>
    </button>
  );
}
