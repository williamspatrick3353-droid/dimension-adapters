import { CHAIN } from '../helpers/chains'
import { getPoolFees, AaveLendingPoolConfig } from '../helpers/aave'
import { BaseAdapter, FetchOptions, SimpleAdapter } from '../adapters/types'
import ADDRESSES from '../helpers/coreAssets.json'
import { addTokensReceived } from '../helpers/token'
import { queryIndexer } from '../helpers/indexer'
import { METRIC } from '../helpers/metrics'

export const AaveMarkets: {[key: string]: Array<AaveLendingPoolConfig>} = {
  [CHAIN.ETHEREUM]: [
    // core market
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider2: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      selfLoanAssets: {
        '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE': 'GHO',
      }
    },

    // lido market
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE'
    },

    // ether.fi market
    {
      version: 3,
      lendingPoolProxy: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider2: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE'
    },

    // horizon market
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.OPTIMISM]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.ARBITRUM]: [
    {
      version: 3,
      lendingPoolProxy: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider2: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE'
    },
  ],
  [CHAIN.POLYGON]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.AVAX]: [
    {
      version: 3,
      lendingPoolProxy: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider2: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE'
    },
  ],
  [CHAIN.FANTOM]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.BASE]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.METIS]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.XDAI]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.BSC]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.SCROLL]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.ERA]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
      dataProvider2: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1'
    },
  ],
  [CHAIN.LINEA]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.SONIC]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.CELO]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.SONEIUM]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.PLASMA]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.MEGAETH]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.MANTLE]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.XLAYER]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ],
  [CHAIN.MONAD]: [
    {
      version: 3,
      lendingPoolProxy: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
      dataProvider: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    },
  ]
}

const methodology = {
  Fees: 'Include borrow interest, flashloan fee, liquidation fee, penalty paid by borrowers, swap fees from Paraswap, and Chainlink SVR (MEV recapture from Ethereum liquidations).',
  Revenue: 'Amount of fees go to Aave treasury.',
  SupplySideRevenue: 'Amount of fees distributed to suppliers.',
  ProtocolRevenue: 'Amount of fees go to Aave treasury.',
  HoldersRevenue: 'Aave starts buy back AAVE tokens using Aave Treasury after 9th April 2025.',
}

const breakdownMethodology = {
  Fees: {
    [METRIC.BORROW_INTEREST]: 'All interest paid by borrowers from all markets (excluding GHO).',
    'Borrow Interest GHO': 'All interest paid by borrowers from GHO only.',
    [METRIC.LIQUIDATION_FEES]: 'Fees from liquidation penalty and bonuses.',
    [METRIC.FLASHLOAN_FEES]: 'Flashloan fees paid by flashloan borrowers and executors.',
    'Paraswap Partner Fees': 'Swap fees share from Paraswap from users by using Aave frontend.',
    'Chainlink SVR': 'MEV recapture from Aave V3 Ethereum liquidations via Chainlink Smart Value Recapture infrastructure (Flashbots MEV-Share). 100% of recaptured value is forwarded to the Aave Collector. Available from April 2025.',
  },
  Revenue: {
    [METRIC.BORROW_INTEREST]: 'A portion of interest paid by borrowers from all markets (excluding GHO).',
    'Borrow Interest GHO': 'All 100% interest paid by GHO borrowers.',
    [METRIC.LIQUIDATION_FEES]: 'A portion of fees from liquidation penalty and bonuses.',
    [METRIC.FLASHLOAN_FEES]: 'A portion of fees paid by flashloan borrowers and executors.',
    'Paraswap Partner Fees': 'Swap fees share from Paraswap from users by using Aave frontend.',
    'Chainlink SVR': '100% of MEV recapture from Aave V3 Ethereum liquidations accrues to the Aave Collector.',
  },
  SupplySideRevenue: {
    [METRIC.BORROW_INTEREST]: 'Amount of interest distributed to lenders from all markets (excluding GHO).',
    'Borrow Interest GHO': 'No supply side revenue for lenders on GHO market.',
    [METRIC.LIQUIDATION_FEES]: 'Fees from liquidation penalty and bonuses are distributed to lenders.',
    [METRIC.FLASHLOAN_FEES]: 'Flashloan fees paid by flashloan borrowers and executors are distributed to lenders.',
  },
  ProtocolRevenue: {
    [METRIC.BORROW_INTEREST]: 'Amount of interest distributed to lenders from all markets (excluding GHO) are collected by Aave treasury.',
    'Borrow Interest GHO': 'All interest paid on GHO market are collected by Aave treasury.',
    [METRIC.LIQUIDATION_FEES]: 'A portion of fees from liquidation penalty and bonuses are colected by Aave treasury.',
    [METRIC.FLASHLOAN_FEES]: 'A portion of fees paid by flashloan borrowers and executors are collected by Aave treasury.',
    'Paraswap Partner Fees': 'Swap fees share from Paraswap from users by using Aave frontend.',
    'Chainlink SVR': '100% of MEV recapture from Aave V3 Ethereum liquidations accrues to the Aave Collector.',
  },
  HoldersRevenue: {
    [METRIC.TOKEN_BUY_BACK]: "Aave starts buy back AAVE tokens using Aave Treasury after 9th April 2025. They bought daily basic, but there are days they didn't."
  },
}

const AaveNonBuybackTransferAddresses = [
  '0x0000000000000000000000000000000000000000',
  '0x4da27a545c0c5b758a6ba100e3a049001de870f5', // stkAAVE
  '0xdef1fa4cefe67365ba046a7c630d6b885298e210', // deployer
  '0x25f2226b597e8f9514b3f68f00f494cf4f286491', // ecosystem reserve
  '0x1BDecEAE83c6Ca0f4D78Ee46D40881FAb26b10b1', // vesting
  '0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9', // aave_eth
]

const AaveBuyBackTreasury = '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1';
const VeloraAugustusV6 = '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE';
// Chainlink SVR (Smart Value Recapture) distribution Safe. Captures MEV from
// Aave V3 Ethereum liquidations via Flashbots MEV-Share and forwards 100%
// of recaptured value to the Aave Collector. Weekly distributions started
// 2025-04-08. Methodology: see Chainlink ARFC linked from #6464.
const ChainlinkSVRDistributor = '0x149b41b1e4c00b5f9aa34b14fd9f84cfd2f014e5';
export const chainConfig: Record<string, any> = {
  [CHAIN.ETHEREUM]: {
    pools: AaveMarkets[CHAIN.ETHEREUM],
    treasuryCollector: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    veloraAugustus: VeloraAugustusV6,
    chainlinkSvrDistributor: ChainlinkSVRDistributor,
    start: '2023-01-01',
  },
  [CHAIN.OPTIMISM]: {
    pools: AaveMarkets[CHAIN.OPTIMISM],
    treasuryCollector: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
    veloraAugustus: VeloraAugustusV6,
    start: '2022-08-05',
  },
  [CHAIN.ARBITRUM]: {
    pools: AaveMarkets[CHAIN.ARBITRUM],
    start: '2022-03-12',
    treasuryCollector: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.POLYGON]: {
    pools: AaveMarkets[CHAIN.POLYGON],
    start: '2022-03-12',
    treasuryCollector: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.AVAX]: {
    pools: AaveMarkets[CHAIN.AVAX],
    start: '2022-03-12',
    treasuryCollector: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.FANTOM]: {
    pools: AaveMarkets[CHAIN.FANTOM],
    start: '2022-03-12',
  },
  [CHAIN.BASE]: {
    pools: AaveMarkets[CHAIN.BASE],
    start: '2023-08-09',
    treasuryCollector: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.BSC]: {
    pools: AaveMarkets[CHAIN.BSC],
    start: '2023-11-18',
    treasuryCollector: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.METIS]: {
    pools: AaveMarkets[CHAIN.METIS],
    start: '2023-04-24',
  },
  [CHAIN.XDAI]: {
    pools: AaveMarkets[CHAIN.XDAI],
    start: '2023-10-05',
    treasuryCollector: '0x46531ea0E7cec64b14181d45F8C6798a1cE45da1',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.SCROLL]: {
    pools: AaveMarkets[CHAIN.SCROLL],
    start: '2024-01-21',
  },
  [CHAIN.ERA]: {
    pools: AaveMarkets[CHAIN.ERA],
    start: '2024-09-09',
  },
  [CHAIN.LINEA]: {
    pools: AaveMarkets[CHAIN.LINEA],
    start: '2024-11-24',
  },
  [CHAIN.SONIC]: {
    pools: AaveMarkets[CHAIN.SONIC],
    start: '2025-02-16',
    treasuryCollector: '0x3211d27a1A1B8E40C7974F6951935303e6e56DBE',
    veloraAugustus: VeloraAugustusV6,
  },
  [CHAIN.CELO]: {
    pools: AaveMarkets[CHAIN.CELO],
    start: '2025-02-16',
  },
  [CHAIN.SONEIUM]: {
    pools: AaveMarkets[CHAIN.SONEIUM],
    start: '2025-05-14',
  },
  [CHAIN.PLASMA]: {
    pools: AaveMarkets[CHAIN.PLASMA],
    start: '2025-09-25',
  },
  [CHAIN.MEGAETH]: {
    pools: AaveMarkets[CHAIN.MEGAETH],
    start: '2026-02-09',
  },
  [CHAIN.MANTLE]: {
    pools: AaveMarkets[CHAIN.MANTLE],
    start: '2026-01-16',
  },
  [CHAIN.XLAYER]: {
    pools: AaveMarkets[CHAIN.XLAYER],
    start: '2026-03-30',
  },
}

const fetch = async (options: FetchOptions) => {
  const dailyFees = options.createBalances()
  const dailyProtocolRevenue = options.createBalances()
  const dailySupplySideRevenue = options.createBalances()

  // There was an upgrade between these dates (Oct 8-17, 2024) and the dataProvider contracts don't work, so we use the backup contracts
  const pools = AaveMarkets[options.chain].map(pool => {
    if (pool.dataProvider2 &&
        options.startTimestamp >= 1728345600 &&
        options.endTimestamp <= 1729209599) {
      return { ...pool, dataProvider: pool.dataProvider2 };
    }
    return pool;
  });

  for (const pool of pools) {
    await getPoolFees(pool, options, {
      dailyFees,
      dailySupplySideRevenue,
      dailyProtocolRevenue,
    })
  }

  const dailyHoldersRevenue = options.createBalances()
  if (options.chain === CHAIN.ETHEREUM) {
    // AAVE Buybacks https://app.aave.com/governance/v3/proposal/?proposalId=286
    const nonBuybackTransferAddresses = new Set(AaveNonBuybackTransferAddresses.map((a) => a.toLowerCase()))
    const buybackReceived = await addTokensReceived({
      options,
      tokens: [ADDRESSES.ethereum.AAVE],
      target: AaveBuyBackTreasury,
      logFilter: (log) => !nonBuybackTransferAddresses.has((log.from_address ?? "").toLowerCase()),
    })
    dailyHoldersRevenue.addBalances(buybackReceived, METRIC.TOKEN_BUY_BACK)

    // Chainlink SVR — MEV recapture from Aave V3 Ethereum liquidations.
    // The Chainlink SVR distributor Safe forwards 100% of recaptured value
    // (native ETH) to the Aave Collector via Safe.execTransaction, which the
    // standard sdk indexer doesn't surface (internal trace, not top-level tx).
    // Same query shape as fees/safe.ts.
    if (chainConfig[options.chain].chainlinkSvrDistributor) {
      const svrTransfers: any = await queryIndexer(`
        SELECT
          sum("value") AS eth_value
        FROM
          ethereum.traces
        WHERE
          to_address = '\\x${chainConfig[options.chain].treasuryCollector.replace(/^0x/i, '')}'
          AND from_address = '\\x${chainConfig[options.chain].chainlinkSvrDistributor.replace(/^0x/i, '')}'
          AND block_time BETWEEN llama_replace_date_range;
      `, options)
      svrTransfers.forEach((e: any) => {
        if (e.eth_value) {
          dailyFees.addGasToken(e.eth_value, 'Chainlink SVR')
          dailyProtocolRevenue.addGasToken(e.eth_value, 'Chainlink SVR')
        }
      })
    }
  }
  
  // swap fees share from Paraswap
  if (chainConfig[options.chain].treasuryCollector && chainConfig[options.chain].veloraAugustus) {
    const paraswapFees = await addTokensReceived({
      options,
      target: chainConfig[options.chain].treasuryCollector,
      fromAdddesses: [chainConfig[options.chain].veloraAugustus],
    });
    dailyFees.add(paraswapFees, 'Paraswap Partner Fees');
    dailyProtocolRevenue.add(paraswapFees, 'Paraswap Partner Fees');
  }

  return {
    dailyFees,
    dailyRevenue: dailyProtocolRevenue,
    dailyProtocolRevenue,
    dailySupplySideRevenue,
    dailyHoldersRevenue,
  }
}

const adapter: SimpleAdapter = {
  version: 2,
  pullHourly: true,
  methodology,
  breakdownMethodology,
  adapter: {}
}
for (const [chain, config] of Object.entries(chainConfig)) {
  (adapter.adapter as BaseAdapter)[chain] = {
    fetch,
    start: config.start,
  }
}

export default adapter
