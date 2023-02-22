import { useEffect, useState } from "@/lib";

const Header = () => {
  const [openTranslate, setOpenTranslate] = useState(false);
  useEffect(() => {
    const obt = document.querySelectorAll(".openButton");
    for (let btn of obt) {
      btn.addEventListener("click", function () {
        if (openTranslate) {
          setOpenTranslate(false)
        } else {
          setOpenTranslate(true)
        }
      })
    }
  });
  return /*html*/`
    <div class="bg-[#35363a] text-white drop-shadow-xl">
      <div class="container mx-auto flex justify-end items-center">
        <header class="flex justify-center items-center gap-x-10">
          <button class="openButton border-b-2 relative">
            <div class="flex justify-center items-center gap-x-5">
              <p class="mb-0">English</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div> 
            <div class=${openTranslate ? "block" : "hidden"}>
              <p class="absolute bg-[#3c3d40] w-32 py-3 px-2 ml-[-30px] mt-[10px] text-white rounded-b-lg hover:bg-[#00c6ab]">Tiếng việt</p>
            </div>
          </button>
          <a href="/" class="no-underline hover:text-[#00c6ab] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </a>
          <div class="flex justify-center border-l-[1px] py-4 pl-3 items-center gap-x-2">
            <div class="">Chào :</div> 
            <div class="">Name</div>
          </div>
        </header>
      </div>
    </div>
    `;
};
export default Header;
