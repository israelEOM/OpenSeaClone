# OpenSea Clone(Smartcontract) Documentation
This smart contract is an NFT marketplace that allows users to create, buy and sell non-fungible tokens (NFTs).

## Contract Overview
NFTMarketplace: The main contract that defines the rules and functionalities for trading NFTs between users.

## Contract Variables
- **nftContract** : The address of the NFT contract that is used to create and trade NFTs.
- **nftCounter** : A counter that tracks the number of NFTs that have been created on the marketplace.
- **itemsForSale** : A mapping of NFT IDs to their respective MarketItem objects that are available for sale on the marketplace.

## Structs
- **MarketItem** : A struct that contains information about an NFT that is available for sale on the marketplace. The struct includes the following fields:
- **itemId** : The ID of the NFT.
- **seller** : The address of the seller who is selling the NFT.
- **nftContractAddress** : The address of the NFT contract that the NFT belongs to.
- **price** : The price of the NFT.
- **sold** : A boolean flag that indicates whether the NFT has been sold or not.

## Events
- **MarketItemCreated** : An event that is emitted when a new NFT is created and added to the marketplace.
- **MarketItemSold** : An event that is emitted when an NFT is sold on the marketplace.

## Modifiers
- **onlyItemOwner()** : A modifier that restricts access to a function to the owner of an NFT.
- **onlyItemNotSold()** : A modifier that restricts access to a function to NFTs that are not yet sold.

## Functions
- **createMarketItem(uint256 itemId, address nftContractAddress, uint256 price)** : Allows users to create and add an NFT to the marketplace.
- **buyMarketItem(uint256 itemId) payable** : Allows users to buy an NFT that is available for sale on the marketplace.
- **fetchMarketItems() view returns (MarketItem[] memory)** : Returns an array of all the NFTs that are available for sale on the marketplace.
- **fetchMyNFTs() view returns (MarketItem[] memory)** : Returns an array of all the NFTs that are owned by the caller.