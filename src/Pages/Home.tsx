import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: React.FC = () => {
  return <ConnectButton />;
};

export default Home;

// import React from "react";
// import {
//   useAccount,
//   useConnect,
//   useDisconnect,
//   useEnsAvatar,
//   useEnsName,
// } from "wagmi";

// function Profile() {
//   const { address, connector, isConnected } = useAccount();
//   const { data: ensName } = useEnsName({ address });
//   const { data: ensAvatar } = useEnsAvatar({ name: ensName });
//   const { connect, connectors, error, isLoading, pendingConnector }: any =
//     useConnect();
//   const { disconnect } = useDisconnect();

//   if (isConnected) {
//     return (
//       <div>
//         <img src={ensAvatar} alt="ENS Avatar" />
//         <div>{ensName ? `${ensName} (${address})` : address}</div>
//         <div>Connected to {connector.name}</div>
//         <button onClick={disconnect}>Disconnect</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {connectors.map((connector) => (
//         <button
//           disabled={!connector.ready}
//           key={connector.id}
//           onClick={() => connect({ connector })}
//         >
//           {connector.name}
//           {!connector.ready && " (unsupported)"}
//           {isLoading &&
//             connector.id === pendingConnector?.id &&
//             " (connecting)"}
//         </button>
//       ))}

//       {error && <div>{error.message}</div>}
//     </div>
//   );
// }

// export default Profile;
