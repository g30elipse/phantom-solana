import { useWallet } from "@solana/wallet-adapter-react";
import React, { FC, MouseEventHandler, PropsWithChildren, useCallback, useMemo } from "react";

export interface ConnectButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const ConnectButton: FC<PropsWithChildren<ConnectButtonProps>> = (props) => {
    const { onClick, children } = props;
    const { wallet, connect, connecting, connected } = useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if (onClick) onClick(event);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented)
                connect().catch(() => {
                    // Silently catch because any errors are caught by the context `onError` handler
                });
        },
        [onClick, connect]
    );

    const content = useMemo(() => {
        if (children) return children;
        if (connecting) return "Connecting ...";
        if (connected) return "Connected";
        if (wallet) return "Connect";
        return "Connect Wallet";
    }, [children, connecting, connected, wallet]);

    return (
        <button {...props} onClick={handleClick}>
            {content}
        </button>
    );
};

export default ConnectButton;
