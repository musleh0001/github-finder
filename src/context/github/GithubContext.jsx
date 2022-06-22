import { createContext, useReducer } from "react";
import { Navigate } from "react-router-dom";

import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	// Get search result
	const searchUsers = async (text) => {
		setLoading();
		const params = new URLSearchParams({
			q: text,
		});
		const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		const { items } = await response.json();

		dispatch({
			type: "GET_USERS",
			payload: items,
		});
	};

	const setLoading = () => dispatch({ type: "SET_LOADING" });

	// clear users
	const clearUser = () => dispatch({ type: "CLEAR_USERS" });

	// Get single user
	const getUser = async (login) => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users/${login}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		if (response.status === 404) {
			<Navigate to="/notfound" />;
		} else {
			const data = await response.json();

			dispatch({
				type: "GET_USER",
				payload: data,
			});
		}
	};

	// get user repose
	const getUserRepos = async (login) => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		if (response.status === 404) {
			dispatch({
				type: "GET_REPOS",
				payload: [],
			});
		} else {
			const data = await response.json();
			dispatch({
				type: "GET_REPOS",
				payload: data,
			});
		}
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				repos: state.repos,
				searchUsers,
				clearUser,
				getUser,
				getUserRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
