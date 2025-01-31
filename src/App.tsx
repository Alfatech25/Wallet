import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { createConfig, WagmiConfig } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  binanceWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Set up wallet connectors
const connectors = connectorsForWallets(
  [
    {
      groupName: "Suggested",
      wallets: [
        rainbowWallet,
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
        binanceWallet,
      ],
    },
  ],
  {
    projectId: "YOUR_PROJECT_ID", // Replace with your actual WalletConnect project ID
    appName: "My App",
    appDescription: "My App Description",
    appUrl: "https://myapp.com",
    appIcon: "https://myapp.com/icon.png",
  }
);

// Create WAGMI configuration
const config = createConfig({
  connectors,
  chains: [],
});

// Initialize React Query client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider children={<ConnectButton />} />
      </QueryClientProvider>
    </WagmiConfig>
  );
};

export default App;
