document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const socialIcons = document.getElementById("social_icons");
    const triangle = document.getElementById("triangle");

    let isHidden = true;

    button.addEventListener("click", function () {
        isHidden = !isHidden;

        if (isHidden) {
            socialIcons.style.visibility = "hidden";
            socialIcons.style.transition = "0.3s"
            triangle.style.visibility = "hidden";
            triangle.style.transition = "0.3s"

        } else {
            socialIcons.style.visibility = "visible";
            socialIcons.style.transition = "0.3s"
            triangle.style.visibility = "visible";
            triangle.style.transition = "0.3s"
        }
    });
});
 