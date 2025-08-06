import { observer } from "mobx-react-lite";
import type MainPageController from "../../../../service/controller/page/main";
import { TitleTextField } from "../../../components/text-field/text-field";
import Button from "../../../components/button/button";
import { Exchange01Icon } from "hugeicons-react";

type Props = {
    controller: MainPageController;
};

const Converter = observer(({
    controller
}: Props) => {
    return (
        <div className="flex flex-col lg:flex-row pt-20 space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 items-center w-full">

            <img
                alt={'logo'}
                src={'/icon.svg'}
                className="w-[450px] max-lg:w-[250px]"
            />

            <div className="flex flex-col w-full">

                <div className="flex flex-col w-full space-y-5">
                    <TitleTextField
                        type="text"
                        title="BTC Amount"
                        value={controller.txtBtc} 
                        titleStyle='text-white text-sm font-semibold'
                        textStyle='text-green-500 text-sm font-semibold'
                        onChange={(value) => controller.actionMethod('btc-amount', value)}
                    />

                    <TitleTextField
                        type="text"
                        readonly={true}
                        title="IDR Amount"
                        value={controller.txtIdr}
                        titleStyle='text-white text-sm font-semibold'
                        textStyle='text-green-500 text-sm font-semibold'
                    />

                    <TitleTextField
                        type="text"
                        readonly={true}
                        title="USD Amount"
                        value={controller.txtUsd}
                        titleStyle='text-white text-sm font-semibold'
                        textStyle='text-green-500 text-sm font-semibold'
                    />
                </div>

                <Button
                    className="flex flex-row space-x-5 bg-green-500 mt-10"
                    onClick={controller.convert}
                >
                    <Exchange01Icon className="text-white" />
                    <span className="text-white font-semibold">
                        Convert
                    </span>
                </Button>

            </div>

        </div>
    )
})

export default Converter