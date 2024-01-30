const accordionContent = document.querySelectorAll(".accordion-content");
let iconImage = document.querySelectorAll(".icon-image")

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");    

    let description = item.querySelector(".description");

    if (item.classList.contains("open")) { 
      iconImage[index].src = "./assets/images/icon-minus.svg"   
      description.style.height = `${description.scrollHeight}px`;     
      description.style.visibility = "visible"
    } else {  
      iconImage[index].src = "./assets/images/icon-plus.svg"   
      description.style.height = "0px";
      description.style.visibility = "hidden"
    }
    removeOpen(index);
  });
});

// Close those items not visited
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      des.style.visibility = "hidden";
      iconImage[index2].src = "./assets/images/icon-plus.svg"   
    }
  });
}
