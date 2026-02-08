import { DeviceTypes } from "../../../_@types/types"
import DeviceSupportCard from "./DeviceSupportCard"

function ListDevices() {
    const _devices:DeviceTypes[]=[
        {
      "name": "Smartphones",
      "description": "Mofie is optimized for Android and iOS smartphones. Download the app from the Google Play Store or Apple App Store.",
      icon:"svg/smartphone.svg"
    },
    {
        "name": "Tablets",
        "description": "Mofie works seamlessly on tablets, offering a larger screen for your entertainment on both Android and iOS platforms.",
        icon:"svg/tablet.svg"
    },
    {
        "name": "Smart TV",
        "description": "Enjoy streaming on the big screen with Mofie’s app for Smart TVs—compatible with major TV brands and operating systems.",
        icon:"svg/tv.svg"
    },
    {
        "name": "Laptops",
        "description": "Access Mofie directly through your browser—no installation needed. Perfect for watching at home or on the go.",
        icon:"svg/laptop.svg"
    },
    {
        "name": "Gaming Consoles",
        "description": "Mofie can be accessed on select gaming consoles, so you can enjoy your favorite content during breaks from gaming.",
        icon:"svg/game.svg"
    },
    {
        "name": "VR Headsets",
        "description": "Step into immersive streaming with Mofie on supported VR devices for a next-level viewing experience.",
        icon:"svg/vr.svg"
    }
]
    return (
         <div className="grid xl:grid-cols-3 lg:grid-cols-2 place-items-center tv:flex tv:flex-wrap  gap-5 mt-10">
         {_devices.map((el,index)=><DeviceSupportCard description={el.description}  name={el.name} key={index} icon={el.icon} />)}
        </div>
    )
}

export default ListDevices
