export type MenuModel = {
    id: string;
    name: string;
    ref: string;
    subMenu?: SubMenuModel[];
};

export type SubMenuModel = {
    id: string;
    name: string;
    ref: string;
};