import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ConnectButton from "./PhantomWallet/ConnectButton";
import WalletDialog from "./PhantomWallet/WalletDialog";
import { SendSOLToRandomAddress } from "./PhantomWallet/SendSOLToRandomAddress";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Vite + React</h1>
            <div className="card">
                <ConnectButton onClick={console.log}>Connect</ConnectButton>
                <WalletDialog />
                <SendSOLToRandomAddress />
            </div>
        </div>
    );
}

export default App;
