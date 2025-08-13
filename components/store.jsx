import { create } from "zustand";

export const useStore = create((set) => ({
  pagination: [
    {
      id: 1,
      title: "YOUR INFO",
      step: "STEP 1",
    },
    {
      id: 2,
      title: "SELECT PLAN",
      step: "STEP 1",
    },
    {
      id: 3,
      title: "ADD-ONS",
      step: "STEP 1",
    },
    {
      id: 4,
      title: "SUMMARY",
      step: "STEP 1",
    },
  ],
  step: 1,
  nextStep: () =>
    set((state) => ({
      step: state.step === 5 ? 5 : state.step + 1,
    })),
  prevStep: () =>
    set((state) => ({
      step: state.step === 1 ? 1 : state.step - 1,
    })),

  changeTariff: () =>
    set((state) => ({
      step: (state.step = 2),
    })),
  monthOrYear: false,
  setMonthOrYear: () => set((state) => ({ monthOrYear: !state.monthOrYear })),
  tariffs: [
    {
      name: "Arcade",
      priceMonth: 9,
      priceYear: 90,
      img: "/images/icon-arcade.svg",
      id: "1",
    },
    {
      name: "Advanced",
      priceMonth: 12,
      priceYear: 120,
      img: "/images/icon-advanced.svg",
      id: "2",
    },
    {
      name: "Pro",
      priceMonth: 15,
      priceYear: 150,
      img: "/images/icon-pro.svg",
      id: "3",
    },
  ],
  additions: [
    {
      id: 1,
      name: "Online service",
      description: "Access to multiplayer games",
      priceMonth: "1",
      priceYear: "10",
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonth: "2",
      priceYear: "20",
    },
    {
      id: 3,
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonth: "2",
      priceYear: "20",
    },
  ],
  stepData: {
    tariff: {},
    additions: [],
  },
  setStepData: (step, data) =>
    set((state) => ({
      stepData: {
        ...state.stepData,
        [step]: data,
      },
    })),
}));
