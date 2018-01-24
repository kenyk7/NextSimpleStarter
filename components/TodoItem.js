
export default ({ todo, remove }) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-cente">
			{todo.text}
			<button
				className="btn btn-danger btn-sm"
				onClick={_ => remove(todo)}>
				x
			</button>
		</li>
	);
};
