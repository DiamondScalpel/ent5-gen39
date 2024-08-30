import './styles/Header.css';

const Header = ({ top = '60%', left = '50%', image = true }) => {
	const objStyle = {
		top: `${top}`,
		left: `${left}`,
		transform: 'translate(-50%, -50%)',
	};
	return (
		<div className="header grid-container">
			<div className="header__top"></div>
			<div className="header__bottom"></div>
			<div className="header__pokebola" style={objStyle}></div>
			{image && (
				<img
					className="header__img"
					src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaxZvvKRQPiiwXbg7WzFDdLKcb9YcNp8-rKz7sb0MLvhjjQw-n5SnkYeaHETL7eVDbxI2N88V8ACdvZfbf919f9erTZB2f06cJP3EfWxjj9L2MOLuyLJKLboI91HOZUn4pBFVmF7necqRv/s1600/pokedex-3d-logo.png"
					alt="pokedex img"
				/>
			)}
		</div>
	);
};

export default Header;
