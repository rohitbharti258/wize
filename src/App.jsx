import "react-circular-progressbar/dist/styles.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Practice from "./pages/Practice";

export default function App() {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div className="w-[85%]">
					<Practice />
				</div>
			</div>
		</div>
	);
}
