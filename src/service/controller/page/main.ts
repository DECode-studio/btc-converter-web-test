import { makeAutoObservable } from "mobx"

import MenuDataController from "../data/menu"
import TickerDataController from "../data/ticker"

import type { MenuModel } from "../../model/menu"
import type { TickerModel } from "../../model/ticker"
import { customMoneyFormatter } from "../../service/formatter/money"
import PriceDataController from "../data/price"

class MainPageController {
    menuData = new MenuDataController()
    priceData = new PriceDataController()
    tickerData = new TickerDataController()

    txtBtc: string = '0'
    txtIdr: string = '0'
    txtUsd: string = '0'

    listMenu: MenuModel[] = []
    listTicker: TickerModel[] = []

    loadData = true

    constructor() {
        makeAutoObservable(this)
    }

    getData = async () => {
        this.loadData = true

        this.listMenu = await this.menuData.generateMenu()
        this.listTicker = await this.tickerData.getListTicker()

        this.loadData = false
    }

    actionMethod = (
        mode: string,
        data?: any
    ) => {
        if (mode == 'btc-amount') {
            const value = Number(data.replace(/[^0-9]/g, ""))
            this.txtBtc = customMoneyFormatter(value, 'BTC')
        }

        if (mode == 'idr-amount') {
            const value = Number(data)
            this.txtIdr = customMoneyFormatter(value, 'IDR')
        }

        if (mode == 'usd-amount') {
            const value = Number(data)
            this.txtUsd = customMoneyFormatter(value, 'USD')
        }
    }

    convert = async () => {
        this.loadData = true

        const value = Number(this.txtBtc.replace(/[^0-9]/g, ""))
        const resIDR = await this.priceData.getBtcIdrPrice()
        const resUSD = await this.priceData.getBtcUsdPrice()

        const priceIDR = value * (resIDR.bitcoin?.idr ?? 0)
        const priceUSD = value * (resUSD.bitcoin?.usd ?? 0)

        this.actionMethod('idr-amount', priceIDR)
        this.actionMethod('usd-amount', priceUSD)

        this.loadData = false
    }
}

export default MainPageController