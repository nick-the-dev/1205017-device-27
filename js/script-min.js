var contactBtn=document.querySelector(".contact-btn"),contactPopup=document.querySelector(".modal-contact"),popupClose=contactPopup.querySelector(".modal-close"),popupName=contactPopup.querySelector("[name=contact-name]"),email=contactPopup.querySelector("[name=contact-email]"),message=contactPopup.querySelector("[name=contact-message]"),form=contactPopup.querySelector("form"),nameStorage="",emailStorage="";if(window.localStorage){var isStorageSupport=!0;popupName.value=localStorage.getItem("popupName"),email.value=localStorage.getItem("email")}else isStorageSupport=!1;contactBtn.addEventListener("click",function(e){e.preventDefault(),contactPopup.classList.add("modal-show"),popupName.value?popupName.value&&!email.value?contactPopup.querySelector("[name=contact-email]").focus():contactPopup.querySelector("[name=contact-message]").focus():contactPopup.querySelector("[name=contact-name]").focus()}),popupClose.addEventListener("click",function(e){e.preventDefault(),contactPopup.classList.remove("modal-show"),contactPopup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){popupName.value&&email.value&&message.value||(e.preventDefault(),contactPopup.classList.remove("modal-error"),contactPopup.offsetWidth=contactPopup.offsetWidth,contactPopup.classList.add("modal-error"),console.log("Необходимо заполнить все поля формы"),isStorageSupport&&(localStorage.setItem("popupName",popupName.value),localStorage.setItem("email",email.value)))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),contactPopup.classList.contains("modal-show")&&(contactPopup.classList.remove("modal-show"),contactPopup.classList.remove("modal-error")))});var mapBtn=document.querySelector(".modal-map-btn"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapBtn.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))});var productSliderBtn1=document.querySelector(".slider-bullets-item.slide-1"),productSliderBtn2=document.querySelector(".slider-bullets-item.slide-2"),productSliderBtn3=document.querySelector(".slider-bullets-item.slide-3"),productSlide1=document.querySelector(".slider-item.monopod"),productSlide2=document.querySelector(".slider-item.wristband"),productSlide3=document.querySelector(".slider-item.quadrocopter");productSliderBtn1.addEventListener("click",function(e){productSlide2.classList.remove("active"),productSlide3.classList.remove("active"),productSlide1.classList.add("active"),productSliderBtn2.classList.remove("active"),productSliderBtn3.classList.remove("active"),productSliderBtn1.classList.add("active")}),productSliderBtn2.addEventListener("click",function(e){productSlide1.classList.remove("active"),productSlide3.classList.remove("active"),productSlide2.classList.add("active"),productSliderBtn3.classList.remove("active"),productSliderBtn1.classList.remove("active"),productSliderBtn2.classList.add("active")}),productSliderBtn3.addEventListener("click",function(e){productSlide1.classList.remove("active"),productSlide2.classList.remove("active"),productSlide3.classList.add("active"),productSliderBtn2.classList.remove("active"),productSliderBtn1.classList.remove("active"),productSliderBtn3.classList.add("active")});var infoSliderBtn1=document.querySelector(".info-slider-category.slide-1"),infoSliderBtn2=document.querySelector(".info-slider-category.slide-2"),infoSliderBtn3=document.querySelector(".info-slider-category.slide-3"),infoSlide1=document.querySelector(".info-slider-content .slide-1"),infoSlide2=document.querySelector(".info-slider-content .slide-2"),infoSlide3=document.querySelector(".info-slider-content .slide-3");infoSliderBtn1.addEventListener("click",function(e){infoSlide2.classList.remove("active"),infoSlide3.classList.remove("active"),infoSlide1.classList.add("active"),infoSliderBtn2.classList.remove("active"),infoSliderBtn3.classList.remove("active"),infoSliderBtn1.classList.add("active")}),infoSliderBtn2.addEventListener("click",function(e){infoSlide1.classList.remove("active"),infoSlide3.classList.remove("active"),infoSlide2.classList.add("active"),infoSliderBtn1.classList.remove("active"),infoSliderBtn3.classList.remove("active"),infoSliderBtn2.classList.add("active")}),infoSliderBtn3.addEventListener("click",function(e){infoSlide1.classList.remove("active"),infoSlide2.classList.remove("active"),infoSlide3.classList.add("active"),infoSliderBtn2.classList.remove("active"),infoSliderBtn1.classList.remove("active"),infoSliderBtn3.classList.add("active")});