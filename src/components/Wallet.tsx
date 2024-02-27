import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";


export const Wallet = () => {
    const [account, setAccount] = useState<string>();
    const { sdk, connected, /*connecting, provider,*/ chainId } = useSDK();

    const connect = async () => {
        try {
            const accounts = await sdk?.connect() as string[];
            setAccount(accounts?.[0]);
        } catch (err) {
            console.warn("failed to connect..", err);
        }
    };

    return (
        <div>
            <button className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 uppercase text-white transition hover:border-blue-400 hover:bg-blue-300" 
                style={{ padding: 20, margin: 10}}
                onClick={() => void connect()}
            >
                Connect Wallet
            </button>
            {connected && (
                <div>
                    <>
                        {chainId && "Connected chain: ${chainId}"}
                        <p></p>
                        {account && "Connected account: ${account}"}
                    </>
                </div>
            )}
        </div>
    );
};