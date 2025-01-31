import { BIP32Factory } from 'bip32';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';

// Initialize BIP32
const bip32 = BIP32Factory(ecc);

// Generate mnemonic and seed
const mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create BIP32 node
const node = bip32.fromSeed(seed);

// Derive address
console.log('Mnemonic:', mnemonic);
console.log('Private Key:', node.privateKey?.toString());
