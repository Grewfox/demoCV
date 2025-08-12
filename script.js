//formthongtin
const textThongTin = document.querySelector("#textthongtin");
document
  .querySelector(".submit-email")
  .addEventListener("click", function (event) {
    //chặn load trang khi ấn button
    event.preventDefault();
    const checkEmail = document.querySelector("#emailthongtin");
    if (checkEmail.checkValidity()) {
      document.querySelector(".thongtincuakien").classList.remove("hidden");
      document.querySelector("#formthongtin").classList.add("hidden");
    } else {
      textThongTin.textContent = "Định dạng email không hợp lệ, nhập lại!!";
      textThongTin.style.color = "red";
    }
  });
//reset text
document.querySelector("#emailthongtin").addEventListener("click", function () {
  if ((textThongTin.textContent = "Định dạng email không hợp lệ, nhập lại!!")) {
    textThongTin.textContent = "Hãy nhập email để hiện thông tin";
    textThongTin.style.color = "black";
  }
});
document
  .querySelectorAll(".cv--detail")
  .forEach((el) => el.classList.add("hidden"));
const rmRead = document.querySelectorAll(".readmore");
const cvRead = document.querySelector(".cv--detail");
document.querySelector(".rm1").addEventListener("click", function () {
  document.querySelector(".cv--1").classList.remove("hidden");
  document.querySelector(".btnrm1").style.display = "none";
});
document.querySelector(".rm2").addEventListener("click", function () {
  document.querySelector(".cv--2").classList.remove("hidden");
  document.querySelector(".btnrm2").style.display = "none";
});
document.querySelector(".rm3").addEventListener("click", function () {
  document.querySelector(".cv--3").classList.remove("hidden");
  document.querySelector(".btnrm3").style.display = "none";
});
document.querySelector(".rm4").addEventListener("click", function () {
  document.querySelector(".cv--4").classList.remove("hidden");
  document.querySelector(".btnrm4").style.display = "none";
});
document.querySelector(".rm5").addEventListener("click", function () {
  document.querySelector(".cv--5").classList.remove("hidden");
  document.querySelector(".btnrm5").style.display = "none";
});
document.querySelector(".rm6").addEventListener("click", function () {
  document.querySelector(".cv--6").classList.remove("hidden");
  document.querySelector(".btnrm6").style.display = "none";
});
