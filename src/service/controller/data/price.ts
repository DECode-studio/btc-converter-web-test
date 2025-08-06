import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import type { TokenPrice } from "../../model/price";

class PriceDataController {
    getBtcIdrPrice = async (): Promise<TokenPrice> => {
        let data: TokenPrice = {}

        try {
            let config: AxiosRequestConfig = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr`,
            };

            let response = await axios<TokenPrice>(config)
            data = response?.data ?? {}

            return data
        } catch (error: any) {
            console.log(error);
            return data
        }
    }

    getBtcUsdPrice = async (): Promise<TokenPrice> => {
        let data: TokenPrice = {}

        try {
            let config: AxiosRequestConfig = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
            };

            let response = await axios<TokenPrice>(config)
            data = response?.data ?? {}

            return data
        } catch (error: any) {
            console.log(error);
            return data
        }
    }
}

export default PriceDataController