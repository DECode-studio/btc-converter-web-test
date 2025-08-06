import { observer } from "mobx-react-lite";
import type MainPageController from "../../../service/controller/page/main";
import Converter from "./components/converter";
import TickerList from "./components/ticker";

type Props = {
    controller: MainPageController;
};

const Body = observer(({
    controller
}: Props) => {
    return (
        <div className="flex flex-col pt-24 px-5 xl:px-50">

            <Converter controller={controller} />
            <TickerList controller={controller} />

        </div>
    )
})

export default Body