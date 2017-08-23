import React, {Component} from 'react';

var menuDom, menuHtml = '', fontSize, spanWidth = 100;
function drawMenu() {
    menuDom = document.getElementById("mainMenu");
    addColumn();
    menuDom.innerHTML = menuHtml;
}

function addColumn(manifest = '', parent = '') {
    var name, redirect, menuRow = '';
    if(manifest !== ''){
    	console.log(manifest);
        menuJson = manifest;
    }
    for (var item in menuJson) {
    	menuJson.itemNumber = item;
        subcategory = menuJson[item].subcategory;

        if(subcategory !== undefined) {
            return addColumn(subcategory);
        }
	    menu.push(displayCat(manifest));
    }
    return menu;
}
function displayCat(manifest) {
    return <span id={getItemName(manifest.itemNumber)}> {getLink(manifest)} </span>;
}
function getLink(manifest){
	return (manifest.redirect !== undefined)
		? <a href={manifest.redirect}> {manifest.name} </a>
		: <div id={getItemName(manifest.itemNumber)}> {manifest.name} </div>;
}
function getItemName(item){
    return "item_" + item;
}
function getColumn(manifest) {
    if(subcategory.visible !== false){
        return displayCat(manifest);
    }
}
function mouseOver() {
    
}
ReactDOM.render(
	<drawMenu />,
	document.getElementById('root')
);
