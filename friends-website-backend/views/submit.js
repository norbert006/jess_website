function handleImageUpload(serviceId, imgField) {
  const fileInput = document.getElementById(`${serviceId}-${imgField}-file`);
  const nameInput = document.getElementById(`${serviceId}-${imgField}-name`);

  const file = fileInput.files[0];
  const customName = nameInput.value;

  if (!file) {
    alert("Please select a file first.");
    return;
  }

  if (!customName) {
    alert("Please provide a file name.");
    return;
  }

  // Rename the file
  const blob = file.slice(0, file.size, file.type);
  const newFile = new File([blob], `${customName}.jpeg`, { type: file.type });

  const formData = new FormData();
  formData.append("imgfile", newFile);

  // Step 1: Upload image to GCS
  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text()) // or .json() if your /upload returns JSON
    .then(imageUrl => {
      console.log("Uploaded image URL:", imageUrl);

      // Step 2: Send PATCH to update MongoDB
      return fetch(`/api/services/update/${serviceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [imgField]: imageUrl, // dynamic key
        }),
      });
    })
    .then(res => res.json())
    .then(data => {
      alert(`Updated ${imgField} successfully!`);
      console.log("Database update response:", data);
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong.");
    });
}
