import { useCallback, useEffect } from "react";
import { useTonAddress } from "@tonconnect/ui-react";
import "./App.css";

import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
import { StonApiClient } from "@ston-fi/api";
import { Header } from "./Header";

const client = new StonApiClient();

function App() {
  const showPopup = useShowPopup();
  const userFriendlyAddress = useTonAddress();

  const asyncFetch = useCallback(async () => {
    if (!userFriendlyAddress) return;

    const walletAssets = await client.getWalletAssets(userFriendlyAddress);

    console.log("walletAssets", walletAssets);
  }, [userFriendlyAddress]);

  useEffect(() => {
    asyncFetch();
  }, [asyncFetch]);

  const handleClick = () =>
    showPopup({
      message: "Hello, welcome to Ton Defi!",
    });
  return (
    <div className="Container">
      <Header />

      {userFriendlyAddress && <p>Wallet address: {userFriendlyAddress}</p>}

      <MainButton text="SHOW POPUP" onClick={handleClick} />
    </div>
  );
}

export default App;
