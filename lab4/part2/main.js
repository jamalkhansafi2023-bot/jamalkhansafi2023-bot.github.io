const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Array of image filenames with source paths
const image = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rocky coastline" },
    { filename: "pic3.jpg", alt: "Purple and white flowers" },
    { filename: "pic4.jpg", alt: "Wall" },
    { filename: "pic5.jpg", alt: "Butterfly" }
];

// Create a baseURL constant that contains the path to the images
const baseURL = "./";

// Loop through images array
for (const img of image) {
  // Create new img element
  const newImage = document.createElement("img");
  newImage.src = baseURL + img.filename;
  newImage.alt = img.alt;
  thumbBar.appendChild(newImage);
}
// Add event listener to thumbBar for image click
newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });

// updateDisplayedImage() function
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}
// Solution: Wire up the Darken/Lighten button
btn.addEventListener("click", () => {
    if (btn.textContent === "Darken") {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        btn.textContent = "Lighten";
    } else {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        btn.textContent = "Darken";
    }
});