export default {
  setupComponent(args, component) {
    component.didInsertElement = function () {
      document.querySelectorAll(".tablink").forEach(btn => {
        btn.addEventListener("click", function () {
          const tab = this.dataset.tab;

          document.querySelectorAll(".tablink").forEach(b => b.classList.remove("active"));
          document.querySelectorAll(".tabcontent").forEach(div => div.classList.remove("active"));

          this.classList.add("active");
          document.getElementById(tab).classList.add("active");
        });
      });
    };
  }
};