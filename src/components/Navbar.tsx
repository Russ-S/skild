import { Show, SignInButton, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";

import { LogIn } from "lucide-react";

const Navbar = () => (
	<nav className="navbar">
		<div className="brand">
			<div className="mark">
				<div className="glyph" />
			</div>
			<Link to="/">
				<span>Skild</span>
			</Link>
		</div>

		<div className="actions">
			<Show when="signed-in">
				<UserButton />
			</Show>

			<Show when="signed-out">
				<SignInButton>
					{/** biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
						<LogIn className="w-5 h-5" />
						<span>Sign In</span>
					</button>
				</SignInButton>
			</Show>
		</div>
	</nav>
);

export default Navbar;
