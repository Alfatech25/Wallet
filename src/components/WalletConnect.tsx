import React from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { Wallet2, LogOut, Loader2 } from "lucide-react";

export function WalletConnect() {
  const { address, isConnecting, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  if (isConnecting) {
    return (
      <div className="flex items-center space-x-2">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Connecting...</span>
      </div>
    );
  }

  if (isConnected) {
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div>
            <p className="text-sm text-gray-600">Connected Address</p>
            <p className="font-mono text-sm truncate">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>
          {balance && (
            <div className="text-right">
              <p className="text-sm text-gray-600">Balance</p>
              <p className="font-medium">
                {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => disconnect()}
          className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Disconnect</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Wallet2 className="h-5 w-5" />
          <span>Connect with {connector.name}</span>
        </button>
      ))}
    </div>
  );
}
