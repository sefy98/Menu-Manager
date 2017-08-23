/**
 * Created by Zak-Laptop on 8/20/2017.
 */
//import React, {Component} from 'react';

var menuDom, menuHtml = '', fontSize, spanWidth = 100;
class drawMenu extends React.Component {
	constructor(props) {
		super(props);
		this.draw;
	}
	draw() {
		menuDom = document.getElementById("mainMenu");
		this.addColumn();
		menuDom.innerHTML = menuHtml;
	}

	addColumn(manifest = '', parent = '') {
		var name, redirect, menuRow = '';
		if(manifest !== ''){
			console.log(manifest);
			menuJson = manifest;
		}
		for (var item in menuJson) {
			menuJson.itemNumber = item;
			subcategory = menuJson[item].subcategory;

			if(subcategory !== undefined) {
				return this.addColumn(subcategory);
			}
			menu.push(displayCat(manifest));
		}
		return menu;
	}
	displayCat(manifest) {
		return <span id={getItemName(manifest.itemNumber)}> {getLink(manifest)} </span>;
	}
	getLink(manifest){
		return (manifest.redirect !== undefined)
			? <a href={manifest.redirect}> {manifest.name} </a>
			: <div id={getItemName(manifest.itemNumber)}> {manifest.name} </div>;
	}
	getItemName(item){
		return "item_" + item;
	}
		getColumn(manifest) {
		if(subcategory.visible !== false){
			return displayCat(manifest);
		}
	}
	mouseOver() {

	}
	render() {
		<drawMenu />
	}

}

