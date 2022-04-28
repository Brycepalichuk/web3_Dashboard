import { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Nft({user}) {

    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress'),
                limit: 5
            }
        })
    }, [])

    console.log(data)

    return(
        <CustomContainer>
            I am the NFT
        </CustomContainer>
    )
}