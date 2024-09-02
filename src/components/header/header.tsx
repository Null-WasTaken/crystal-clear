import Sidebar from "./components/sidebar/sidebar";

export default function Header() {
    return (
        <div className=" m-auto flex p-6 fixed justify-between items-center font-mono md:w-[1800px] left-2 z-[99999] md:left-32">
        <Sidebar/>

        <div className="flex items-center justify-around gap-3">
        </div>

    </div>
    )
}