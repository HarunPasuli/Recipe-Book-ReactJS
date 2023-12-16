import RecipeList from "../RecipeList/RecipeList";

const RecipeTable = ({ recipes, handleEdit, handleDelete }) => {
	return (
		<table className="w-full border-collapse border border-gray-300">
			<thead>
				<tr>
					<th className="p-2 border border-gray-300">Title</th>
					<th className="p-2 border border-gray-300">Description</th>
					<th className="p-2 border border-gray-300">Actions</th>
				</tr>
			</thead>
			<tbody>
				{recipes.map((recipe, index) => (
					<tr key={`${recipe.title}-${index}`}>
						<td className="p-2 border border-gray-300">{recipe.title}</td>
						<td className="p-2 border border-gray-300">{recipe.description}</td>
						<td className="p-2 border border-gray-300">
							<div className="w-[10vw]">
								<button
									onClick={() => handleEdit(recipe)}
									className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700"
								>
									Edit
								</button>
								<button
									onClick={() => handleDelete(recipe)}
									className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
								>
									Delete
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default RecipeTable;
