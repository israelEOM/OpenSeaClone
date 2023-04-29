import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sepolia } from "@thirdweb-dev/chains"
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm"
import NFTCard from './NFTCard'

const style = {
  // wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  wrapper: `px-12 pb-12 grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`,
}

const Listings = () => {
  const [listings, setListings] = useState([])
  // const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS)
  
  useEffect(() => {
    const sdk = new ThirdwebSDK(Sepolia)
    const getListings = async () => {
      try {
        const contract = await sdk.getContract(process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS);
        const list = await contract.directListings.getAllValid();
        console.log(list)
        setListings(list)
      } catch (error) {
        console.error(error, 'test')
      }
    }

    getListings()
  }, [])

  return (
    <div className={style.wrapper}>
      {listings.length > 0 ? (
        <>
          {listings?.map((listing, index) => (
            <Link
              key={index}
              href={`/assets/${listing.assetContractAddress}/${listing.id}`}
            >
              <NFTCard listing={listing} />
            </Link>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Listings
