// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`

var writeBerries = function(berries) {
  document.write("<h1>Berries</h1>");

  for (var i = 0; i < berries.length; i++) {
    document.write("<dl>");
    document.write("<dt><h2>" + berries[i].name +"</h2></dt>");
    document.write("<dt>Grows on a shrub?</dt>");
    document.write("<dd>");
      if(berries[i].onShrub === true) {
        document.write("Yes");
      } else {
        document.write("No");
    }
    document.write("</dd>");
    document.write("<dt>Energy</dt>");
      document.write("<dd>"+ berries[i].energy + "</dd>" );
    
    document.write("<dt>Carbohydrates</dt>");
      document.write("<dd>" + berries[i].carbs + "</dd>");
    document.write("<dt>Protein</dt>")
      document.write("<dd>" + berries[i].protein + "</dd>"); 
  
    document.write("</dl>");
  }
}



  

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
