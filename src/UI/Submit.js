

const Submit = ({authenticationType}) => {
	const style = {
		textAlign: "center",
		padding: "10px",
		width: "50%",
		margin: "30px 0px",
		fontSize: "1.1rem",
		backgroundColor: "#777",
		border: "none",
		color: "white",
		borderRadius: "3px",
	};
	return (
		<>
			<button type="submit" style={style}>
				{authenticationType}
			</button>
		</>
	);
};

export default Submit;
