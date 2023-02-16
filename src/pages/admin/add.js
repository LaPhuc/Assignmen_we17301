import Header from "@/components/header";
import Nav from "@/components/nav";

const Add = () => {
  return /*html*/`
  <div class="">
  <div class="sticky top-0">${Header()}</div>
  <div class="flex w-[30%]">
    <div class="w-full sticky top-0">
      ${Nav()}
    </div>
    <div class="w-[75%] mx-auto mt-5"> 
      <h1>Quản lý dự án</h1>
      
    </div>
  </div>
</div>
  `;
}
export default Add;