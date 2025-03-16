document.getElementById("addImageBtn").addEventListener("click", function() {
    document.getElementById("imageInput").click();
});

document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.onclick = function() { openModal(img) };
            document.getElementById("gallery").appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

function openModal(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
