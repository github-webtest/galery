document.getElementById("addImageBtn").addEventListener("click", function() {
    document.getElementById("urlInputContainer").style.display = "block";
});

document.getElementById("submitImageUrl").addEventListener("click", function() {
    const imageUrl = document.getElementById("imageUrlInput").value.trim();
    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.onerror = function() {
            alert("Geçersiz resim URL'si!");
        };
        img.onclick = function() { openModal(img) };
        document.getElementById("gallery").appendChild(img);
        document.getElementById("imageUrlInput").value = ""; 
        document.getElementById("urlInputContainer").style.display = "none";
    }
});

function openModal(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
