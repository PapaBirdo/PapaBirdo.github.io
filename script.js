const patButton = document.getElementById("pat");

            patButton.addEventListener("click", function () {
                var image = document.getElementById("angelina_pat");
                image.style.display = "block";;
            });

            patButton.addEventListener("mouseover", function () {
                this.innerHTML = "Click for pats >:3";
            });

            patButton.addEventListener("mouseout", function () {
                this.innerHTML = "Click for pats :3";
            });