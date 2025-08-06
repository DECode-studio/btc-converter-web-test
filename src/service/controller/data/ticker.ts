import type { AxiosRequestConfig } from "axios";
import type { TickerModel } from "../../model/ticker";
import axios from "axios";

class TickerDataController {
    getListTicker = async (): Promise<TickerModel[]> => {
        let listData: TickerModel[] = []

        try {
            let config: AxiosRequestConfig = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
            };

            let response = await axios<TickerModel[]>(config)
            listData = response?.data ?? []

            return listData
        } catch (error: any) {
            console.log(error);
            return listData
        }
    }
}

export default TickerDataController