document.getElementById("submitBtn").addEventListener("click", () => {
  let inputElem = document.getElementById("imgfile");
  let file = inputElem.files[0];
  let customName = document.getElementById("fileName").value;
  if (!file) {
    alert("Please select a file first.");
    return;
  }
  if (!customName) {
    alert("Please provide a file name.");
    return;
  }
  // Create new file so we can rename the file
  let blob = file.slice(0, file.size, "image/jpeg");
  newFile = new File([blob], `${customName}.jpeg`, { type: "image/jpeg" });
  // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
  let formData = new FormData();
  formData.append("imgfile", newFile);
  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((text) => {
      console.log("Server Response:", text);
      alert("Server Response:", text);
      if (typeof loadPosts === "function") {
        loadPosts();
      }
    })
    .catch((err) => {
      console.error("Upload failed:", err);
      alert("File upload failed.");
    });
});