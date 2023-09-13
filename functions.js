function toggleStyleSheet(){
   
    var styleSheet = document.getElementById("mainStyleSheet");
    var styleString = styleSheet.getAttribute("href");
  
    if (styleString == "styles.css"){
        styleString = "secondstyles.css";
    } else {
        styleString = "styles.css";
    }
    styleSheet.setAttribute("href", styleString);
    localStorage.setItem("style", styleString);
}


window.onload = function(){
   
    
    var styleSheetName = document.getElementById("mainStyleSheet");

    var style = localStorage.getItem("style");

    styleSheetName.setAttribute("href", style);
}