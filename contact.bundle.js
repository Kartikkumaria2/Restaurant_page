"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contacts)
/* harmony export */ });
function contacts(){
    const low = document.createElement('div');
    low.classList.add('low');
    const main = document.createElement('div');
    main.classList.add('main-content');
    main.style.backgroundColor = "yellow";


    const main2 = document.createElement('div');
    main2.classList.add('main-content2');


    const card = document.createElement('div');
    card.classList.add('contacts-card');
    const imgCard = document.createElement('div');
    imgCard.classList.add('Imgcard');
    card.appendChild(imgCard);

    const contents1 = document.createElement('div');


    const content1 = document.createElement('p');
    content1.innerHTML = "Name:Kartik";
    content1.classList.add("material");

    const content2 = document.createElement('p');
    content1.innerHTML = "Title:Owner";
    content1.classList.add("material");

    const content3 = document.createElement('p');
    content1.innerHTML = "Email:kkumaria_be21@thapar.edu";
    content1.classList.add("material");

    contents1.appendChild(content1);
    contents1.appendChild(content2);
    contents1.appendChild(content3);
    contents1.style.display = "flex";
    contents1.style.flexDirection = "column";

    
    card.appendChild(contents1);
    main2.appendChild(card);
    low.appendChild(main);
    low.appendChild(main2);
    return low;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RzKCl7XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG93LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcblxuXG4gICAgY29uc3QgbWFpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluMi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQyJyk7XG5cblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RzLWNhcmQnKTtcbiAgICBjb25zdCBpbWdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQ2FyZC5jbGFzc0xpc3QuYWRkKCdJbWdjYXJkJyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWdDYXJkKTtcblxuICAgIGNvbnN0IGNvbnRlbnRzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50MS5pbm5lckhUTUwgPSBcIk5hbWU6S2FydGlrXCI7XG4gICAgY29udGVudDEuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsXCIpO1xuXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDEuaW5uZXJIVE1MID0gXCJUaXRsZTpPd25lclwiO1xuICAgIGNvbnRlbnQxLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbFwiKTtcblxuICAgIGNvbnN0IGNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnQxLmlubmVySFRNTCA9IFwiRW1haWw6a2t1bWFyaWFfYmUyMUB0aGFwYXIuZWR1XCI7XG4gICAgY29udGVudDEuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsXCIpO1xuXG4gICAgY29udGVudHMxLmFwcGVuZENoaWxkKGNvbnRlbnQxKTtcbiAgICBjb250ZW50czEuYXBwZW5kQ2hpbGQoY29udGVudDIpO1xuICAgIGNvbnRlbnRzMS5hcHBlbmRDaGlsZChjb250ZW50Myk7XG4gICAgY29udGVudHMxLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjb250ZW50czEuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5cbiAgICBcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbnRlbnRzMSk7XG4gICAgbWFpbjIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgbG93LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGxvdy5hcHBlbmRDaGlsZChtYWluMik7XG4gICAgcmV0dXJuIGxvdztcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==