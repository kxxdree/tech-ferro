// Добавьте этот скрипт для обработки drag & drop
const dropzone = document.querySelector(".application-modal__dropzone-area");

if (dropzone) {
  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "#f9fafb";
    dropzone.style.borderColor = "#9ca3af";
  });

  dropzone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "#ffffff";
    dropzone.style.borderColor = "#d0d5dd";
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "#ffffff";
    dropzone.style.borderColor = "#d0d5dd";

    const files = e.dataTransfer.files;
    const fileInput = document.querySelector("#file-upload");

    if (files.length > 0 && fileInput) {
      fileInput.files = files;
      // Здесь можно добавить обработку выбранных файлов
      console.log("Файлы:", files);
    }
  });
}
