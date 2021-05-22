// importing libraries
import axios from 'axios';
// importing files
import "./App.css";
import Routing from "./components/Routing";
import AuthContext from "./components/context/authContext";
axios.defaults.withCredentials=true;

function App() {
	return (
		<AuthContext className="App">
			<Routing />
		</AuthContext>
	);
}
export default App;
