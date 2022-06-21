import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
	const { name, description, html_url, forks, open_issues, watchers_count, stargazers_count } = repo;

	return (
		<div className="mb-2 rounded-md card bg-gray-800 hover:gb-gray-900">
			<h3 className="card-body">
				<h3 className="mb-2 text-xl font-semibold">
					<a href={html_url}>
						<FaLink className="inline mr-1" /> {name}
					</a>
				</h3>
			</h3>
		</div>
	);
};

RepoList.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
