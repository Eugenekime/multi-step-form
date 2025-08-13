import Image from "next/image";

export default function FinishStep() {
  return (
    <div className="flex flex-col gap-2.5 mt-[30px] rounded-[10px] py-[35px] px-[20px] mx-4 md:w-[400px] md:gap-[25px] md:p-0 md:items-center md:justify-center md:mt-[26%] md:mb-[20px] md:py-[40px]">
      <Image
        src={"/images/icon-thank-you.svg"}
        alt="Thank you icon"
        width={67}
        height={67}
      ></Image>
      <h1 className="text-[var(--blue-950)]">Thank You!</h1>
      <p className="text-[var(--grey-500)] text-center">
        Thanks for visiting my pet project! I really appreciate you taking the
        time to check it out. This is just a small creation I built for fun and
        learning. If you have any thoughts, ideas, or just want to say hi — feel
        free to reach me at{" "}
        <a
          className=" underline text-blue-400"
          href="https://www.instagram.com/eug.kime?igsh=N2ZoNWtxYmFkYzY3"
        >
          kimeugene0824@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
