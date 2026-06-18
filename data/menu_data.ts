interface DataType {
    id: number;
    title: string;
    link: string;
    has_dropdown?: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

// menu data
const menu_data: DataType[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },

];
export default menu_data;