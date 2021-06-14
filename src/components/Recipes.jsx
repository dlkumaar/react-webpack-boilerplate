import React, { useState } from 'react';

const myRecipe = {
	leatherStrips: 2,
	ironIgnot: 1,
	refinedMoonstone: 4,
};
const myGauntletRecipe = {
	...myRecipe,
	leather: 2,

	refinedMoonstone: 4,
};

function Recipes() {
	const [recipe, setrecipe] = useState([]);

	return (
		<div>
			<h3>Current Recipe:</h3>
			<button onClick={() => setrecipe(myRecipe)}>My Recipe</button>
			<button onClick={() => setrecipe(myGauntletRecipe)}>
				My Gauntlet Recipe
			</button>

			<ul>
				{Object.keys(recipe).map((material) => (
					<li key={material}>
						{material}: {recipe[material]}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Recipes;
