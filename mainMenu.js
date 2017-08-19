/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var menuDom, menuHtml = '', fontSize, spanWidth = 100;
function drawMenu() {
    menuDom = document.getElementById("mainMenu");
    addCategory();
    menuDom.innerHTML = menuHtml;
}

function addCategory(manifest = '', parent = '') {
    var name, redirect, menuRow = '';
    if(manifest !== ''){
        menuJson = manifest;
    } else {
        menuJson = menu.mainMenu;
    }
    for (var item in menuJson) {
        name = menuJson[item].name;
        redirect = menuJson[item].redirect;
        subcategories = menuJson[item].subcategories;
        menuRow = menuRow.concat("<span id='item_" + item + "' class='item'>");
        if(redirect !== undefined) {
            menuRow = menuRow.concat('<a href="' + redirect + '">' + name + '</a>');
        } else {
            menuRow = name;
        }
        menuRow = menuRow.concat("</span>");
        if(subcategories !== undefined) {
            menuRow = menuRow.concat(displaySubCat(subcategories));
            //menuDom.addEventListener();
            return menuHtml = "<span id='item_" + item + "_main' class='item'>" + menuRow + "</span>";
        }
        menuHtml = "<span id='item_" + parent + "_subcategories' class='animateRight item'>" + menuRow + "</span>";
    }
    if(parent !== '') {
        
    }
    return menuHtml;
}
function displaySubCat(subcategory) {
    if(subcategory.visible !== false){
        return menuHtml = "<span id='item_" + item + "_main' class='item'>" + menuRow + "</span>";
    }
}
function mouseOver() {
    
}