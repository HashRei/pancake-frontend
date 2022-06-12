import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Staking'),
        href: '/farms',
      },
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: TrophyIcon,
  //   fillIcon: TrophyFillIcon,
  //   items: [
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //       hideSubNav: true,
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Overview'),
        href: `https://nft-marketplace-hashrei.vercel.app/`,
      },
      {
        label: t('Marketplace'),
        href: `https://nft-marketplace-hashrei.vercel.app/MarketplacePage`,
      },
      {
        label: t('Code'),
        href: `https://github.com/HashRei/nft-marketplace`,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: 'https://github.com/HashRei',
      },
      {
        label: t('Voting'),
        href: 'https://www.tally.xyz/governance/eip155:4:0xBBFc55Fb69e7D940B3fA3B637c8E0C22704b681f',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('DAO Code'),
        href: 'https://github.com/HashRei/on-chain-dao',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/HashRei_',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
