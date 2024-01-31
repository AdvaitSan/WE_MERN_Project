import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App1.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";


function App1() {
  const [user] = useAuthState(auth);

  return (
    <div className="App flex justify-center bg-gradient-to-b from-white to-violet-300">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App1;