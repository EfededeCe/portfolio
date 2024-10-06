import { Avatar } from "./Avatar";

export const NavBar = () => {
  return (
    <div
      className="navbar bg-base-100 grid grid-cols-2 justify-items-center fixed z-30"
      // style={{ "z-index": 20 }}
    >
      <div className="flex-1">
        <Avatar />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://github.com/EfededeCe" target="blank">
              Sobre mi
            </a>
          </li>
          <li>
            <details>
              <summary>Contacto</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a
                    href="https://linkedin.com/in/federico-del-corro-b49501236"
                    target="blank"
                  >
                    LinkdIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/EfededeCe" target="blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
