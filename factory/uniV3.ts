import { CHAIN } from "../helpers/chains";
import { uniV3Exports } from "../helpers/uniswap";
import { createFactoryExports } from "./registry";

const algebraV3SwapEvent = 'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 price, uint128 liquidity, int24 tick, uint24 overrideFee, uint24 pluginFee)'
const algebraV3PoolCreatedEvent = 'event Pool (address indexed token0, address indexed token1, address pool)'
const protocolFeesSwapEvent = 'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick, uint128 protocolFeesToken0, uint128 protocolFeesToken1)'
const algebraV2SwapEvent = 'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 price, uint128 liquidity, int24 tick)'

const configs: Record<string, Record<string, any>> = {
  "xflows": {
    [CHAIN.WAN]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2024-07-04' },
  },
  "warpx-v3": {
    [CHAIN.MEGAETH]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "mintswap": {
    [CHAIN.MINT]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "icecreamswap-v3": {
    [CHAIN.CORE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "monday-trade-spot": {
    [CHAIN.MONAD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2025-11-13" },
  },
  "capricorn": {
    [CHAIN.MONAD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "pinot-v3": {
    [CHAIN.MONAD]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "kura-v3": {
    [CHAIN.SEI]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', deadFrom: "2026-01-15" },
  },
  "kayen-v3": {
    [CHAIN.CHILIZ]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  "equalizer-cl": {
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "ginsengswap": {
    [CHAIN.CONFLUX]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "hardswap": {
    [CHAIN.KAVA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "keller-cl": {
    [CHAIN.SCROLL]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "kittypunch-v3": {
    [CHAIN.FLOW]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "linehub-v3": {
    [CHAIN.LINEA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "nuri-exchange-v2": {
    [CHAIN.SCROLL]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "sonex": {
    [CHAIN.SONEIUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "voltage-v4": {
    [CHAIN.FUSE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV3SwapEvent, isAlgebraV3: true },
  },
  "DerpDEX": {
    [CHAIN.ERA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "agni-fi": {
    [CHAIN.MANTLE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent },
  },
  "assetchain-swap": {
    [CHAIN.ASSETCHAIN]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "chronos-v2": {
    [CHAIN.ARBITRUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "crescent-swap": {
    [CHAIN.ARBITRUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "goblin-dex": {
    [CHAIN.SMARTBCH]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.BSC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "holdstation-swap": {
    [CHAIN.ERA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.BERACHAIN]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "monocerus": {
    [CHAIN.AVAX]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.MANTA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "pearl-v2": {
    [CHAIN.REAL]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "throne-v3": {
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "unchain-x": {
    [CHAIN.BSC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "voltage-v3": {
    [CHAIN.FUSE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "warpgate": {
    [CHAIN.IMX]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "alienbase-v3": {
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "apertureSwap": {
    [CHAIN.MANTA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "arthswap-v3": {
    [CHAIN.ASTAR]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "blasterswap-v3": {
    [CHAIN.BLAST]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "dtx-v3": {
    [CHAIN.TAIKO]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "taiko-swap": {
    [CHAIN.TAIKO]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-11-14', revenueRatio: 0 },
  },
  "kim-exchange-v3": {
    [CHAIN.MODE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, poolCreatedEvent: 'event Pool(address indexed token0,address indexed token1,address pool)' },
  },
  "moraswap-v3": {
    [CHAIN.NEON]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "scribe-exchange-v4": {
    [CHAIN.SCROLL]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, poolCreatedEvent: 'event Pool(address indexed token0,address indexed token1,address pool)' },
  },
  "thruster-v3": {
    [CHAIN.BLAST]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "vanillaswap-v3": {
    defichain_evm: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "xtrade": {
    [CHAIN.XLAYER]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, poolCreatedEvent: 'event Pool(address indexed token0,address indexed token1,address pool)' },
  },
  "SwapX-algebra": {
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "2024-12-24", isAlgebraV3: true },
  },
  "aethonswap": {
    [CHAIN.MONAD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV3SwapEvent, isAlgebraV3: true },
  },
  // with fee ratios / options / methodology
  "squadswap-v3": {
    [CHAIN.BSC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1 },
  },
  "9mm": {
    [CHAIN.PULSECHAIN]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.BASE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.SONIC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "maia-v3": {
    [CHAIN.METIS]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1, holdersRevenueRatio: 0, start: "2023-04-01" },
  },
  "hypertrade-v3": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.143, protocolRevenueRatio: 0.143 },
  },
  "fluxion-network": {
    [CHAIN.MANTLE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-11-17', userFeesRatio: 1, revenueRatio: 0 },
  },
  "fusionx-v3": {
    [CHAIN.MANTLE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2023-07-13', userFeesRatio: 1, revenueRatio: 0.334, protocolRevenueRatio: 0.167, holdersRevenueRatio: 0.167 },
  },
  "octoswap-cl": {
    [CHAIN.MONAD]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', revenueRatio: 1 / 5, protocolRevenueRatio: 1 / 5 },
  },
  "prjx": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', revenueRatio: 0.143, protocolRevenueRatio: 0.143 },
  },
  "flowswap-v3": {
    [CHAIN.FLOW]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "lynex": {
    [CHAIN.LINEA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV2: true, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent },
  },
  "squadswap-wow": {
    [CHAIN.BSC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1, swapEvent: protocolFeesSwapEvent },
  },
  "datadex": {
    [CHAIN.VANA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', revenueRatio: 0.1, protocolRevenueRatio: 0.1 },
  },
  "shibaswap-v2": {
    [CHAIN.ETHEREUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "10-24-2024", userFeesRatio: 1, revenueRatio: 0 },
    [CHAIN.SHIBARIUM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "10-24-2024", userFeesRatio: 1, revenueRatio: 0 },
  },
  "swapmode-v3": {
    [CHAIN.MODE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2024-03-13', userFeesRatio: 1, revenueRatio: 0.64, protocolRevenueRatio: 0.64 },
  },
  "ultrasolid-v3": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: 'event Swap(address indexed sender, address indexed recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)', poolCreatedEvent: 'event PoolCreated(address indexed token0, address indexed token1, uint24 indexed fee, int24 tickSpacing, address pool)', start: '2025-08-10', revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0, userFeesRatio: 1 },
  },
  "xswap-v3": {
    [CHAIN.XDC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', userFeesRatio: 1, revenueRatio: 0 },
  },
  "summitx-fi": {
    [CHAIN.CAMP]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-08-23', revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "thick": {
    [CHAIN.FANTOM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.ARBITRUM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.BASE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "beamswap-v3": {
    [CHAIN.MOONBEAM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2023-05-18', userFeesRatio: 1, revenueRatio: 0.16, protocolRevenueRatio: 0.14, holdersRevenueRatio: 0.02 },
  },
  "2thick": {
    [CHAIN.FANTOM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
    [CHAIN.SONIC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "doveswap": {
    [CHAIN.POLYGON_ZKEVM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', revenueRatio: 0.25, protocolRevenueRatio: 0.25 },
  },
  "supswap-v3": {
    [CHAIN.MODE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', revenueRatio: 1 / 3, protocolRevenueRatio: 1 / 3, swapEvent: protocolFeesSwapEvent },
  },
  "moai-v3": {
    [CHAIN.XRPL_EVM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "prism-dex": {
    [CHAIN.MEGAETH]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.25, protocolRevenueRatio: 0.25, start: '2026-02-09' },
  },
  "parity-dex-cl": {
    [CHAIN.MONAD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2026-02-11' },
  },
  "swyrl-cl": {
    [CHAIN.MONAD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1' },
  },
  "satsuma": {
    [CHAIN.CITREA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, start: "2026-01-17" },
  },
  "currentx-v3": {
    [CHAIN.MEGAETH]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "2026-02-05", userFeesRatio: 0.75, revenueRatio: 0.25 },
  },
  "juiceswap": {
    [CHAIN.CITREA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2026-01-29", userFeesRatio: 1, revenueRatio: 0 },
  },
  // migrated off deleted Goldsky subgraphs to on-chain logs; factories from DefiLlama-Adapters registries/uniswapV3.js
  "winnieswap": {
    [CHAIN.BERACHAIN]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2025-07-07", userFeesRatio: 1, revenueRatio: 0 },
  },
  "fpex": {
    [CHAIN.FLARE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2025-07-01", userFeesRatio: 1, revenueRatio: 0 },
  },
  "koi-finance-cl": {
    [CHAIN.ERA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: 1679529600, userFeesRatio: 1 },
  },
  "zebra-v2": {
    [CHAIN.SCROLL]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.25, protocolRevenueRatio: 0.25 },
  },
  "hybra-v3": {
    [CHAIN.HYPERLIQUID]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', userFeesRatio: 1, revenueRatio: 0.25, protocolRevenueRatio: 0.25 },
  },
  "superswap-v3": {
    [CHAIN.OPTIMISM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.8, protocolRevenueRatio: 0.8 },
  },
  "archfi": {
    [CHAIN.BOTANIX]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, start: "2025-06-29", userFeesRatio: 1, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent },
  },
  "echodex-v3": {
    [CHAIN.LINEA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent },
  },
  "butterxyz": {
    [CHAIN.MANTLE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2023-12-12' },
  },
  "firefly": {
    [CHAIN.MANTA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2024-04-01' },
  },
  "horiza": {
    [CHAIN.ARBITRUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2024-01-07' },
  },
  "sparkdex-v3": {
    [CHAIN.FLARE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.075, protocolRevenueRatio: 0.025, holdersRevenueRatio: 0.05 },
  },
  "capybara-v3": {
    [CHAIN.KLAYTN]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-01-01', userFeesRatio: 1, revenueRatio: 0.4, protocolRevenueRatio: 0.4, },
  },
  "wasabee": {
    [CHAIN.BERACHAIN]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2024-10-29', isAlgebraV3: true, },
  },
  "reservoir-tools-clmm": {
    [CHAIN.ABSTRACT]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-01-07', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.INK]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2025-01-07', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.ZERO]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-12-21', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.REDSTONE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2025-01-07', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "shapeswap-v3": {
    [CHAIN.SHAPE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2024-12-09', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "enosys": {
    [CHAIN.FLARE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "2025-03-03", userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1 },
    [CHAIN.SONGBIRD]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2024-09-24", userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1 },
  },
  "gliquid": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV3SwapEvent, userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "hx-finance": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent, userFeesRatio: 1, revenueRatio: 0.13, protocolRevenueRatio: 0.13 },
  },
  "swapsicle-v2": {
    [CHAIN.MANTLE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, start: 1697155200, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent, userFeesRatio: 1, revenueRatio: 0.455, protocolRevenueRatio: 0.13, holdersRevenueRatio: 0.325 },
    [CHAIN.TELOS]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV3: true, start: 1698105600, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent, userFeesRatio: 1, revenueRatio: 0.455, protocolRevenueRatio: 0.13, holdersRevenueRatio: 0.325 },
    [CHAIN.TAIKO]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV3: true, start: 1724943360, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent, userFeesRatio: 1, revenueRatio: 0.455, protocolRevenueRatio: 0.13, holdersRevenueRatio: 0.325 },
  },
  "fenix-finance-v3": {
    [CHAIN.BLAST]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV3: true, poolCreatedEvent: algebraV3PoolCreatedEvent, swapEvent: algebraV2SwapEvent, userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1 },
  },
  "wagmi": {
    [CHAIN.FANTOM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2023-04-12", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.ETHEREUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2023-09-30", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.METIS]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2023-12-18", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.KAVA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2023-09-12", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "2024-12-11", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2024-05-10", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  "spookyswap-v3": {
    [CHAIN.FANTOM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2023-11-22', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2024-12-12', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "omni-exchange-v3": {
    [CHAIN.BASE]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.ARBITRUM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.BSC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.AVAX]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.OPTIMISM]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.SONIC]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
    [CHAIN.PLASMA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', swapEvent: protocolFeesSwapEvent, userFeesRatio: 1, revenueRatio: 0.32, protocolRevenueRatio: 0.32, holdersRevenueRatio: 0 },
  },
  "syncswap-v3": {
    [CHAIN.ERA]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', isAlgebraV3: true, start: '2023-03-23', poolCreatedEvent: 'event PoolCreated(address indexed token0, address indexed token1, int24 indexed tickSpacing, address pool)', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.LINEA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV3: true, start: '2023-07-19', poolCreatedEvent: 'event PoolCreated(address indexed token0, address indexed token1, int24 indexed tickSpacing, address pool)', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
    [CHAIN.SOPHON]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', isAlgebraV3: true, start: '2024-12-16', poolCreatedEvent: 'event PoolCreated(address indexed token0, address indexed token1, int24 indexed tickSpacing, address pool)', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  'doma-dex-v3': {
    [CHAIN.DOMA]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2025-10-19', userFeesRatio: 1, revenueRatio: 0, },
  },
  "virtus-protocol-cl": {
    [CHAIN.BASE]: {
      factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      isAlgebraV3: true,
      poolCreatedEvent: "event PoolCreated(address indexed token0, address indexed token1, int24 indexed tickSpacing, address pool)",
      start: '2026-03-05', userFeesRatio: 1, revenueRatio: 1, holdersRevenueRatio: 1
    },
  },
  "sailfish": {
    [CHAIN.EDU_CHAIN]: {factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', userFeesRatio: 1, revenueRatio: 0.5, protocolRevenueRatio: 0.5}
  },
  "stableswap-xyz-v3": {
    [CHAIN.STABLE]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", revenueRatio: 0, }
  },
  "ubeswap-v3": {
    [CHAIN.CELO]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2024-05-20', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  'phlox': {
    [CHAIN.LUKSO]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2026-04-21', userFeesRatio: 1, revenueRatio: 0.2, protocolRevenueRatio: 0.2 }
  },
  'fluxflow-v3': {
    [CHAIN.FLUENT]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2026-04-12', userFeesRatio: 1, revenueRatio: 0.1429, protocolRevenueRatio: 0.1429 },
  },
  "krokoswap-v3": {
    [CHAIN.KASPLEX]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2026-03-04', userFeesRatio: 1, revenueRatio: 0.25, protocolRevenueRatio: 0.25 },
  },
  "kublerx-v3": {
    [CHAIN.BITKUB]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2026-05-22', userFeesRatio: 1, revenueRatio: 0 },
  },
  "turbo": {
    [CHAIN.HYPERLIQUID]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: '2026-05-30', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  "intrinsic": {
    [CHAIN.ROOTSTOCK]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: '2025-12-05', userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  "bond": {
    [CHAIN.OG]: {factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2026-05-09", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "jaine": {
    [CHAIN.OG]: {factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE', start: "2025-09-20", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "tradegpt": {
    [CHAIN.OG]: {factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2025-09-19", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0, holdersRevenueRatio: 0 },
  },
  "retro": {
    [CHAIN.POLYGON]: { factory: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1', start: "2023-07-02", userFeesRatio: 1, revenueRatio: 0.1, protocolRevenueRatio: 0.1, holdersRevenueRatio: 0 },
  },
  "noxa-fi-v3": {
    //commented chains have no pools created so far
    [CHAIN.MEGAETH]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-11-13", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.MONAD]: { factory: "0x3211d27a1A1B8E40C7974F6951935303e6e56DBE", start: "2025-11-20", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    //[CHAIN.BERACHAIN]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-02-04", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    //[CHAIN.SONIC]: { factory: "0x3211d27a1A1B8E40C7974F6951935303e6e56DBE", start: "2025-02-21", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    //[CHAIN.SOMNIA]: { factory: "0x3211d27a1A1B8E40C7974F6951935303e6e56DBE", start: "2025-09-03", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    //[CHAIN.OG]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-09-22", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.PLASMA]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-09-25", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    //[CHAIN.STABLE]: { factory: "0x3211d27a1A1B8E40C7974F6951935303e6e56DBE", start: "2025-11-27", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.KATANA]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-06-17", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
    [CHAIN.HYPERLIQUID]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2025-02-18", userFeesRatio: 1, revenueRatio: 0, protocolRevenueRatio: 0 },
  },
  "robinswap-v3": {
    [CHAIN.ROBINHOOD]: { factory: "0x46531ea0E7cec64b14181d45F8C6798a1cE45da1", start: "2026-07-09", userFeesRatio: 1, revenueRatio: 1 / 7, protocolRevenueRatio: 1 / 7 },
  },

}

const optionsMap: Record<string, any> = {
  "9mm": { swapEvent: protocolFeesSwapEvent, },
}

const methodologyMap: Record<string, any> = {
  "prism-dex": {
    Volume: "Swap volume from all Prism DEX V3 pools deployed via the Prism DEX V3 factory.",
    Fees: "Users pay each pool's configured V3 fee tier on every swap.",
    UserFees: "Equals total swap fees paid by users.",
    Revenue: "When protocol fees are enabled on a pool, 25% of swap fees are counted as protocol revenue.",
    ProtocolRevenue: "When protocol fees are enabled on a pool, 25% of swap fees are counted as protocol revenue.",
    SupplySideRevenue: "When protocol fees are enabled on a pool, 75% of swap fees are distributed to LPs.",
  },
  "maia-v3": {
    UserFees: "User pays 0.01%, 0.05%, 0.30%, or 1% on each swap.",
    ProtocolRevenue: "Protocol receives 10% of fees.",
    SupplySideRevenue: "90% of user fees are distributed among LPs.",
    HoldersRevenue: "Holders have no revenue.",
  },
  "hypertrade-v3": {
    Fees: "Users pay trade fees on each swap.",
    UserFees: "Users pay trade fees on each swap.",
    Revenue: "Protocol receives 14.3% of trade fees.",
    ProtocolRevenue: "Protocol receives 14.3% of trade fees.",
    SupplySideRevenue: "Liquidity providers get 85.7% of trade fees.",
  },
  "fluxion-network": {
    Fees: 'Users pay fees on every swap.',
    UserFees: 'Users pay fees on every swap.',
    Revenue: 'No revenue.',
    SupplySideRevenue: 'All swap fees are distributed to LPs.',
  },
  "fusionx-v3": {
    Fees: "Swap fees paid by users on each FusionX V3 pool.",
    UserFees: "Users pay each pool's configured V3 fee on every swap.",
    Revenue: "33.4% of swap fees are protocol-controlled revenue.",
    ProtocolRevenue: "16.7% of swap fees go to the protocol.",
    HoldersRevenue: "16.7% of swap fees go to token holders.",
    SupplySideRevenue: "66.6% of swap fees go to liquidity providers.",
  },
  "datadex": {
    Fees: "Swap fees collected from users on each trade.",
    Revenue: "Configurable portion of the swap fees collected from users.",
    ProtocolRevenue: "When set, the protocol receives a portion of trade fees.",
  },
  "thick": {
    UserFees: "Users pay trade fees on each swap.",
    ProtocolRevenue: "Protocol receives some % of trade fees.",
    SupplySideRevenue: "User fees minus Protocol fees.",
    HoldersRevenue: "ELITE Holders benefit from Protocol Revenue.",
  },
  "beamswap-v3": {
    UserFees: "User pays 0.01%, 0.05%, 0.3%, or 1% on each swap.",
    ProtocolRevenue: "Protocol receives 16% of fees.",
    SupplySideRevenue: "84% of user fees are distributed among LPs.",
    HoldersRevenue: "2% of fees distributed to GLINT token holders.",
  },
  "2thick": {
    UserFees: "Users pay trade fees on each swap.",
    ProtocolRevenue: "Protocol receives some % of trade fees.",
    SupplySideRevenue: "User fees minus Protocol fees.",
    HoldersRevenue: "ELITE Holders benefit from Protocol Revenue.",
  },
  "koi-finance-cl": {
    Fees: "Total swap fees paid by users.",
    UserFees: "Total swap fees paid by users.",
  },
  "zebra-v2": {
    Fees: "Users pay dynamic amount of fees per swap.",
    UserFees: "Users pay dynamic amount of fees per swap.",
    Revenue: "Zebra collects 25% revenue from swap fees.",
    ProtocolRevenue: "Zebra collects 25% revenue from swap fees.",
    SupplySideRevenue: "Zebra distributes 75% swap fees to LPs.",
  },
  "hybra-v3": {
    Volume: "Total swap volume collected from factory 0x3211d27a1A1B8E40C7974F6951935303e6e56DBE",
    Fees: "Users paid 0.02%, 0.25% or 1% per swap.",
    UserFees: "Users paid 0.02%, 0.25% or 1% per swap.",
    Revenue: "25% swap fees collected by protocol Treasury.",
    ProtocolRevenue: "25% swap fees collected by protocol Treasury.",
    SupplySideRevenue: "75% swap fees distributed to LPs.",
  },
  "superswap-v3": {
    Fees: "User pays 0.3% fees on each swap.",
    UserFees: "User pays 0.3% fees on each swap.",
    SupplySideRevenue: "LPs receive 20% of swap fees.",
    ProtocolRevenue: "Treasury receives 80% of swap fees.",
    Revenue: "Treasury receives 80% of swap fees.",
  },
  "sparkdex-v3": {
    Volume: "Total swap volume",
    Fees: "Swap fees paid by users.",
    UserFees: "Swap fees paid by users.",
    Revenue: "7.5% of the fees go to the protocol.",
    ProtocolRevenue: "2.5% of the fees go to the SparkDEX Foundation",
    HoldersRevenue: "5% of the fees are used in buybacks and burns of $SPRK",
    SupplySideRevenue: "87.5% of swap fees are distributed to LPs and 5% is distributed to $SPRK stakers",
  },
  "reservoir-tools-clmm": {
    Fees: "Swap fees paid by users on each trade.",
    UserFees: "User pays fees on each swap.",
    Revenue: "Protocol has no revenue.",
    ProtocolRevenue: "Protocol has no revenue.",
    SupplySideRevenue: "All user fees are distributed among LPs.",
    HoldersRevenue: "Holders have no revenue.",
  },
  "shapeswap-v3": {
    Fees: "Swap fees paid by users on each trade.",
    UserFees: "User pays fees on each swap.",
    Revenue: "Protocol has no revenue.",
    ProtocolRevenue: "Protocol has no revenue.",
    SupplySideRevenue: "All user fees are distributed among LPs.",
    HoldersRevenue: "Holders have no revenue.",
  },
  "gliquid": {
    Volume: "Total users swap volume.",
    Fees: "Swap fees paid by users.",
    UserFees: "Swap fees paid by users.",
    Revenue: "13% swap fees distributed to Gliquid and Algebra team.",
    ProtocolRevenue: "Gliquid team collects 10% swap fees.",
    SupplySideRevenue: "87% swap fees distributed to LPs",
    HoldersRevenue: "No revenue for token holders.",
  },
  "hx-finance": {
    Volume: "Total trading volume on HX Finance DEX",
    Fees: "Trading fees collected from swap transactions",
    UserFees: "Trading fees collected from swap transactions",
    Revenue: "Protocol revenue from trading fees (13% or pool-specific community fee)",
    ProtocolRevenue: "Protocol revenue from trading fees (13% or pool-specific community fee)",
    SupplySideRevenue: "Fees distributed to liquidity providers (87% or remainder after protocol fee)",
  },
  "swapsicle-v2": {
    Fees: "Users pay 0.25% per swap.",
    UserFees: "Users pay 0.25% per swap.",
    Revenue: "Protocol collects 32% swap fees for protocol treasury and tokens buy back.",
    ProtocolRevenue: "Protocol collects 12% swap fees for protocol treasury.",
    HoldersRevenue: "Protocol collects 20% swap fees for token buy back.",
    SupplySideRevenue: "Protocol distributes 68% swap fees to LPs.",
  },
  "fenix-finance-v3": {
    Fees: "Users pay fees per swap.",
    UserFees: "Users pay 0.1% per swap.",
    Revenue: "Protocol collects 10% swap fees.",
    ProtocolRevenue: "Protocol collects 10% swap fees.",
    SupplySideRevenue: "90% swap fees distributes to LPs.",
  },
  "wagmi": {
    Fees: "Users paid 0.05%, 0.15%, 0.30%, or 1% per swap.",
    UserFees: "Users paid 0.05%, 0.15%, 0.30%, or 1% per swap.",
    SupplySideRevenue: "All swap fees go to LPs.",
    Revenue: "No revenue from swap fees.",
    ProtocolRevenue: "No revenue from swap fees.",
  },
  "spookyswap-v3": {
    Fees: "Each pool charge between 0.01% to 1% fee",
    UserFees: "Users pay between 0.01% to 1% fee",
    Revenue: "0 to 15% of the fee goes to treasury",
    HoldersRevenue: "Share of swap fee goes to xBOO stakers.",
    ProtocolRevenue: "Treasury receives a share of the fees",
    SupplySideRevenue: "Liquidity providers get most of the fees of all trades in their pools",
  },
  "omni-exchange-v3": {
    Fees: "swap fees paid by users.",
    UserFees: "swap fees paid by users.",
    Revenue: "Protocol share from swap fees",
    ProtocolRevenue: "Protocol share from swap fees",
    HoldersRevenue: "No Holder Revenue",
    SupplySideRevenue: "Liquidity providers share fromswap fees",
  },
  "syncswap-v3": {
    Fees: "Swap fees from paid by users.",
    UserFees: "User pays fees on each swap.",
    Revenue: "Protocol have no revenue.",
    ProtocolRevenue: "Protocol have no revenue.",
    SupplySideRevenue: "All user fees are distributed among LPs.",
    HoldersRevenue: "Holders have no revenue.",
  },
}

const startMap: Record<string, string | number> = {
  "lynex": '2023-08-07',
  "zebra-v2": '2023-11-16',
  "hybra-v3": '2025-06-23',
  "echodex-v3": '2023-04-09',
  "sparkdex-v3": '2024-06-27',
  "gliquid": '2025-02-06',
  "hx-finance": '2025-08-01',
  "omni-exchange-v3": '2025-07-15',
}

// Fees-specific configs (same protocol name may have different config for fees vs dexs)
const feesConfigs: Record<string, Record<string, any>> = {
  "thick": {
    [CHAIN.FANTOM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.ARBITRUM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.BASE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
  "2thick": {
    [CHAIN.FANTOM]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.BASE]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
    [CHAIN.SONIC]: { factory: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE' },
  },
}

const feesMethodologyMap: Record<string, any> = {
  "thick": {
    UserFees: "Traders using Thick Liquidiy pay a Trading fee on each swap. Includes Flash Loan Fees.",
    Fees: "Net Trading fees paid is the Sum of fees sent to LP & Protocol Fees",
    Revenue: "A variable % of the trading fee is collected as Protocol Fees.",
    ProtocolRevenue: "100% of Revenue is collected by Protocol Treasury.",
    HoldersRevenue: "100% of Revenue is used to buyback ELITE.",
    SupplySideRevenue: "The portion of trading fees paid to liquidity providers.",
  },
  "2thick": {
    UserFees: "Traders using 2Thick Liquidiy pay a Trading fee on each swap. Includes Flash Loan Fees.",
    Fees: "Net Trading fees paid is the Sum of fees sent to LP & Protocol Fees",
    Revenue: "A variable % of the trading fee is collected as Protocol Fees.",
    ProtocolRevenue: "100% of Revenue is collected by Protocol Treasury.",
    HoldersRevenue: "100% of Revenue is used to buyback ELITE.",
    SupplySideRevenue: "The portion of trading fees paid to liquidity providers.",
  },
}

// Build dex protocols
const protocols: Record<string, any> = {}
for (const [name, config] of Object.entries(configs)) {
  const adapter = uniV3Exports(config, optionsMap[name])
  adapter.skipBreakdownValidation = true // allow old protocols return only fees
  if (methodologyMap[name]) adapter.methodology = methodologyMap[name]
  if (startMap[name] !== undefined) (adapter as any).start = startMap[name]
  protocols[name] = adapter
}

// Build fees protocols
const feesProtocols: Record<string, any> = {}
for (const [name, config] of Object.entries(feesConfigs)) {
  const adapter = uniV3Exports(config)
  adapter.skipBreakdownValidation = true // allow old protocols return only fees
  if (feesMethodologyMap[name]) adapter.methodology = feesMethodologyMap[name]
  if (methodologyMap[name]) adapter.methodology = methodologyMap[name]
  if (startMap[name] !== undefined) (adapter as any).start = startMap[name]
  feesProtocols[name] = adapter
}

export const { protocolList, getAdapter } = createFactoryExports(protocols)
export const fees = createFactoryExports(feesProtocols)
