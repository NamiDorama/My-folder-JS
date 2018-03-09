import { builder } from '../elementBuilder';
import './main.scss';

const date = new Date();
const nowDate = date.toLocaleString('ru', {day: 'numeric', month: "long", year: 'numeric'});

const html = `
	<h2>This is main block</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at doloribus ea itaque natus 
	numquam, odit omnis, praesentium qui quia quidem quis quos repellat tempora, velit vero voluptatem? Earum
	 facere iusto nam praesentium saepe vero? Ad, consectetur corporis fugit necessitatibus possimus quam rem 
	 repellat rerum velit vitae. Aliquid asperiores aspernatur at beatae consectetur culpa cum cupiditate debitis
	  delectus deleniti distinctio dolorem doloremque earum eius est facere fuga harum, illo illum inventore, 
	  ipsam, magnam maiores minus molestiae nam necessitatibus nobis officia officiis pariatur perferendis quasi
	   quisquam recusandae rerum sapiente similique velit veniam. Atque dicta ducimus ipsum quae quos reprehenderit 
	   tempore veniam vero.</p>
	   <p>Ab accusantium aperiam assumenda atque consequatur deleniti deserunt dicta doloremque 
	   dolores eaque est ex harum id inventore iusto labore molestias nam nesciunt nihil, nobis odio omnis optio 
	   perferendis provident quaerat quas quis quod reiciendis sapiente similique sit soluta, tempora totam ullam 
	   veniam voluptatem voluptates. </p>
	   <p>Assumenda beatae, commodi dolorum esse ipsum laboriosam maxime minima officia 
	   optio pariatur perferendis quae quam, quis sed similique unde, velit. Ab accusantium, adipisci cupiditate 
	   dignissimos dolore earum eligendi, enim error exercitationem facilis fuga fugit iure magni maiores mollitia 
	   non odit omnis perspiciatis, quas rem rerum saepe sequi suscipit tempora temporibus veniam voluptatem! Ipsum 
	   veniam, voluptatum!</p>
	<p class="date">${nowDate}</p>
`;

export const main = builder('main', 'main', html);
