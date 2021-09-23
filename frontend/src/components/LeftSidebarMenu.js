import Link from 'next/link'

const LeftSidebarMenu = () => {
  return (
    <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">
      <div className="navbar-brand-box">
        <Link href={'/'}>
          <a className="logo logo-dark">
            <span className="logo-sm"><img src="/assets/images/logo.svg" alt="" height="30"/></span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className="logo logo-light">
            <span className="logo-sm"><img src="/assets/images/logo.svg" alt="" height="30"/></span>
          </a>
        </Link>
      </div>

      <div className="flex-lg-column my-auto">
        <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
          <li className="nav-item">
            <Link href={'/profile'}>
              <a className="nav-link">
                <i className="ri-user-2-line"/>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/'}>
              <a className="nav-link">
                <i className="ri-message-3-line"/>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/groups'}>
              <a className="nav-link">
                <i className="ri-group-line"/>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/contacts'}>
              <a className="nav-link">
                <i className="ri-contacts-line"/>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/settings'}>
              <a className="nav-link">
                <i className="ri-settings-2-line"/>
              </a>
            </Link>
          </li>
          <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              <img src="/assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle"/>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted"/></a>
              <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted"/></a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" href="#">Log out <i
                className="ri-logout-circle-r-line float-end text-muted"/></a>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-lg-column d-none d-lg-block">
        <ul className="nav side-menu-nav justify-content-center">
          <li className="nav-item btn-group dropup profile-user-dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false">
              <img src="/assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle"/>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-end text-muted"/></a>
              <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-end text-muted"/></a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item" href="#">Log out <i
                className="ri-logout-circle-r-line float-end text-muted"/></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSidebarMenu