"use client";

function PhoneArea() {
  return (
    <div className="grid place-items-center">
      <div className="h-[450px] w-[220px] rounded-[42px] border-8 border-device-700 bg-device-800 p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(255,255,255,0.05)] sm:h-[550px] sm:w-[270px]">
        <div className="relative grid h-full place-items-center overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_50%_20%,var(--color-device-600),var(--color-device-900)_55%)]">
          <div className="absolute top-2.5 h-[22px] w-[70px] rounded-[20px] bg-[#050505]"></div>

          <div className="grid gap-[5px] text-center">
            <strong className="text-[35px] font-bold tracking-[5px]">JOVI</strong>
            <span className="text-[10px] tracking-[2px] text-jovi-faint">
              Smartphone Brasil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneArea;
