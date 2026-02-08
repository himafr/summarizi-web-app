import Link from "next/link";
import Modal from "./Modal";
import Search from "./Search";

function HeaderComponent({
  openNav,
  open,
}: {
  openNav: (t: boolean) => void;
  open: boolean;
}) {
  return (
    <div className="flex items-center justify-between md:justify-around">
      <img src="/svg/logo.svg" className="w-10 md:w-15" alt="logo" />

      <ul className="gap-4 hidden md:flex">
        <Link href="/">Home </Link>
        <Link href="/movies">Movies </Link>
        <Link href="/shows">Shows </Link>
        <Link href="/support">Support </Link>
        <Link href="/subscriptions">Subscriptions </Link>
      </ul>
      <div className="flex gap-4 ">
        <Modal>
        <Modal.Open opens="search">
        <img src="/svg/search.svg" className="cursor-pointer" alt="" />
        </Modal.Open>
          <Modal.Window name="search">
            <Search />
        </Modal.Window>
        </Modal>
        <img src="/svg/notification.svg" alt="" />
      </div>
      <img
        src="/svg/menu.svg"
        className="md:hidden"
        onClick={() => openNav(true)}
        alt=""
      />
      {/* open navbar */}
      <div
        className={`fixed inset-0 bg-dark w-screen h-[110vh] z-30 py-2 px-3 ${
          !open && "hidden"
        }`}
      >
        <div
          className="font-extrabold text-3xl "
          onClick={() => openNav(false)}
        >
          X
        </div>
        <ul className="flex flex-col items-center gap-10 text-2xl">
          <li>
            <Link href="/">Home </Link>
          </li>

          <li>
            <Link href="/movies">Movies </Link>
          </li>
          <li>
            <Link href="/shows">Shows </Link>
          </li>
          <li>
            <Link href="/support">Support </Link>
          </li>
          <li>
            <Link href="/subscriptions">Subscriptions </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
