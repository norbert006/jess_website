function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function handleImageUpload(serviceId, imgField) {
  const fileInput = document.getElementById(`${serviceId}-${imgField}-file`);
  const nameInput = document.getElementById(`${serviceId}-${imgField}-name`);

  const file = fileInput.files[0];
  const customName = nameInput.value;
  let postid = uuidv4();

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
  const newFile = new File([blob], `${customName}_${postid}.jpeg`, { type: file.type });

  const formData = new FormData();
  formData.append("imgfile", newFile);

  // Step 1: Upload image to GCS
  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text()) // or .json() if your /upload returns JSON
    .then(imageUrl => {

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
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong.");
    });
}
