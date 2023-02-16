import { deleteProject, getProjects } from "@/api/project";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { router, useEffect, useState } from "@/lib";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btnr = document.querySelectorAll(".btn-remove");
    const btnadd = document.querySelectorAll(".btn-add");
    for (let btna of btnadd) {
      btna.addEventListener("click", function () {
        router.navigate("/Add")
      });
    }
    for (let btn of btnr) {
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
          deleteProject(id).then(() => {
              const newData = data.filter((project) => project.id != id);
              alert("bạn muốn xoá dự án " + data[id - 1].name)
              setData(newData); 
          });
      })
    }
  });
  return /*html*/`
    <div class="">
      <div class="sticky top-0">${Header()}</div>
      <div class="flex w-full">
        <div class="w-[15%] sticky top-0">
          ${Nav()}
        </div>
        <div class="w-[75%] mx-auto mt-5"> 
          <h1>Quản lý dự án</h1>
          <button class="btn btn-danger btn-add">
              Thêm
          </button>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Tên dự án</th>
                      <th>Nội dung</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
              ${data
      .map((project, index) => {
        return `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>${project.contend}</td>
                    <td width="150">
                        <button data-id="${project.id}" class="btn btn-danger btn-remove">
                            Xóa
                        </button>
                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                    </td>
                  </tr>
                `;
      })
      .join("")}
              </tbody >
          </table >
        </div >
      </div>
    </div>
    `;
};
export default HomePage;
