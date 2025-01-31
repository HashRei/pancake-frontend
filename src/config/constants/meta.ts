import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MonkeySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MonkeySwap), NFTs, and more, on a platform you can trust.',
  image: 'images/gorilla-face.svg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MonkeySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MonkeySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MonkeySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MonkeySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MonkeySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MonkeySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MonkeySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MonkeySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MonkeySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MonkeySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MonkeySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MonkeySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MonkeySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MonkeySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MonkeySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MonkeySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MonkeySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MonkeySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MonkeySwap Info & Analytics')}`,
        description: 'View statistics for MonkeySwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MonkeySwap Info & Analytics')}`,
        description: 'View statistics for MonkeySwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MonkeySwap Info & Analytics')}`,
        description: 'View statistics for MonkeySwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MonkeySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MonkeySwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MonkeySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MonkeySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MonkeySwap')}`,
      }
    default:
      return null
  }
}
