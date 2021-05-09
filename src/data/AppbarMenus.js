import {
    Transport,
    Store,
    Electronics,
    Jobs,
    PrivateStuffs,
    Man,
    HomeAndGarder,
    StroyMaterials,
    Games
} from "../assets/icons/Base_icons";

export const AppbarMenus = [
  {
    title: "Автомобили",
    icon: <Transport />,
    bgc: "#B6CAFB",
    path: "car",
  },
  {
    title: " Недвижимость",
    icon: <Store />,
    bgc: "#B4E2E1",
    path: "store",
  },
  {
    title: " Электроника",
    icon: <Electronics />,
    bgc: "#FF9E83",
    path: "electronics",
  },
  {
    title: " Работа",
    icon: <Jobs />,
    bgc: "#F7E233",
    path: "jobs",
  },
  {
    title: "Личные вещи",
    icon: <PrivateStuffs />,
    bgc: "#F6DAC2",
    path: "private",
  },
  {
    title: " Дом и Сад",
    icon: <HomeAndGarder />,
    bgc: "#B4E2E1",
    path: "home",
  },
  {
    title: "Стройка и ремонт",
    icon: <StroyMaterials />,
    bgc: "#B6CAFB",
    path: "remont",
  },
  {
    title: " Хобби и Спорт",
    icon: <Games />,
    bgc: "#F6DAC2",
    path: "hobby",
  },
  {
    title: "Бизнес и услуги",
    icon: <Man />,
    bgc: "#FF9E83",
    path: "bussiness",
  },
  {
    title: "Бизнес и услуги",
    icon: <Man />,
    bgc: "#FF9E83",
    path: "bussinesss",
  },
  
];
export const ProfileNav = [
  {
    title: 'Объявления',
    path: '/profile/ads'
  },
  {
    title: 'Сообщения',
    path: '/profile/messages'
  },
  {
    title: 'Платежи и счёт',
    path: '/profile/payment'
  },
  {
    title: 'Настройки',
    path: '/profile/settings'
  },
  {
    title: 'Мой бизнес',
    path: '/profile/my-bussiness'
  },
]
    