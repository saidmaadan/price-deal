import Nav from '../components/Nav';

const Header = () => (
	<div>
		<div className="bar">
			<a href="">Price Deal</a>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>Search</p>
		</div>
		<div className="cart-bar">
			<p>Cart</p>
		</div>
	</div>
);

export default Header;