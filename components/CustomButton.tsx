"use client";

const CustomButton = () => {
  return (
    <button disabled={false} type={"button"} className={`bg-slate-400 px-4 py-1 rounded-full` } onClick={() => {}}>
      <span className={`flex-1`}>title</span>
    </button>
  );
};

export default CustomButton;
