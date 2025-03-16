document.getElementById("addImageBtn").addEventListener("click", function() {
    document.getElementById("urlInputContainer").style.display = "block";
});

document.getElementById("submitImageUrl").addEventListener("click", function() {
    const imageUrl = document.getElementById("imageUrlInput").value.trim();

    if (!localStorage.getItem("numbers")){

    localStorage.setItem("numbers", 1);
    
    } else {

        localStorage.setItem("img_urls_" + Number(localStorage.getItem("numbers")), imageUrl);
        localStorage.setItem("numbers", Math.floor(Number(localStorage.getItem("numbers")) + 1));
        
        document.getElementById("imageUrlInput").value = ""; 
        document.getElementById("urlInputContainer").style.display = "none";
    }
});

function save() {

    var run_number = 0;

        setInterval(function() {

            if (localStorage.getItem("img_urls_" + Number(run_number)) != null) {

            const img = document.createElement("img");
            img.src = localStorage.getItem("img_urls_" + Number(run_number));
            document.getElementById("gallery").appendChild(img);

                

            }

            run_number++;
        
    }, 10);
}
