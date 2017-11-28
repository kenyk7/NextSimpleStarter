
const Users = ({ users }) => (
	<div>
		<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
			<thead>
				<tr>
					<th>Id</th>
					<th className="mdl-data-table__cell--non-numeric">Username</th>
					<th className="mdl-data-table__cell--non-numeric">Email</th>
					<th className="mdl-data-table__cell--non-numeric">Phone</th>
					<th className="mdl-data-table__cell--non-numeric">Website</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, i) => (
					<tr key={i}>
						<td >{user.id}</td>
						<td className="mdl-data-table__cell--non-numeric">{user.username}</td>
						<td className="mdl-data-table__cell--non-numeric">{user.email}</td>
						<td className="mdl-data-table__cell--non-numeric">{user.phone}</td>
						<td className="mdl-data-table__cell--non-numeric">{user.website}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default Users;
