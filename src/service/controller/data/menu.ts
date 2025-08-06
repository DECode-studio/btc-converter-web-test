import type { MenuModel } from "../../model/menu"

class MenuDataController {
    generateMenu = async (): Promise<Array<MenuModel>> => {
        const data: MenuModel[] = [
            {
                id: '1',
                name: 'Home',
                ref: '#'
            },
            {
                id: '2',
                name: 'Developer',
                ref: 'https://porto-ku.excitech.id/user?id=nur.wahid.azhar',
            },
            {
                id: '3',
                name: 'Projects',
                ref: '#',
                subMenu: [
                    {
                        id: '1',
                        name: 'Portofolio',
                        ref: 'https://porto-ku.excitech.id/user?id=nur.wahid.azhar',
                    },
                    {
                        id: '2',
                        name: 'Playstore',
                        ref: 'https://play.google.com/store/apps/dev?id=7095559884749351358',
                    },
                ]
            }
        ]

        return data
    }
}

export default MenuDataController