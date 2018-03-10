import { builder } from '../elementBuilder';
import './main.scss';

const date = new Date();
const nowDate = date.toLocaleString('ru', {day: 'numeric', month: "long", year: 'numeric'});

const html = `
	<h2>This is main block</h2>
	<p class="first-p">Paragraph witch uses function and mixins! </p>
	   <div class="width1"></div>
	   <div class="width2"></div>
	   <div class="width3"></div>
	   <div class="width4"></div>
	   <div class="width5"></div>
	   <div class="width6"></div>
	   <div class="width7"></div>
	   <div class="width8"></div>
	   <div class="width9"></div>
	   <div class="width10"></div>
	   
	   <ul>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
	   	<li></li>
		</ul>
	<p class="date">${nowDate}</p>
`;

export const main = builder('main', 'main', html);
