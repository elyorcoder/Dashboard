const logout = document.querySelector(".logout");
const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
};
logout.addEventListener("click", Logout);
