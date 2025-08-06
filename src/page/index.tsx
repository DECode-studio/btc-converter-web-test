import MainPageController from "../service/controller/page/main";

import { useEffect } from "react";
import { LoadDialog } from "./components/load";
import { observer } from "mobx-react-lite";

import Navbar from "./section/navbar";
import Body from "./section/body";

const controller = new MainPageController();

const MainPage = observer(() => {
    useEffect(() => {
        controller.getData()
    }, [])

    return (
        <>
            <div className="min-h-screen min-w-full container bg-black">

                <Navbar controller={controller} />
                <Body controller={controller} />

            </div>
            <LoadDialog isOpen={controller.loadData} />
        </>
    )
})

export default MainPage