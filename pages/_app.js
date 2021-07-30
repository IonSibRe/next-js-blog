import Navbar from "../components/Navbar";
import "../styles/globals.css";

function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default App;
