import { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import CustomContainer from "./CustomContainer";

export default function Nft() {

    const {getNFTBalances, data} = useNFTBalances({user})

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    })

    console.log(data)

    return(
        <CustomContainer>
            I am the NFT
        </CustomContainer>
    )
}