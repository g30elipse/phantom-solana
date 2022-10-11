import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { FC, useMemo } from "react";

export interface WalletDialogProps {}

const featuredWallets = 2;
const WalletDialog: FC<WalletDialogProps> = (props) => {
    const { wallets, select } = useWallet();

    const [featured, more] = useMemo(() => {
        const supportedWallets = wallets.filter((wallet) => wallet.readyState !== WalletReadyState.Unsupported);
        return [supportedWallets.slice(0, featuredWallets), supportedWallets.slice(featuredWallets)];
    }, [wallets, featuredWallets]);

    return (
        <div style={{ margin: "20px 0px", padding: "20px 10px", backgroundColor: "#fad" }}>
            <h3>Available Adapters</h3>
            <ul>
                {featured.map((wallet, i) => (
                    <li
                        onClick={() => select(wallet.adapter.name)}
                        style={{ cursor: "pointer", margin: "8px 0px" }}
                        key={i}
                    >
                        {wallet.adapter.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WalletDialog;
