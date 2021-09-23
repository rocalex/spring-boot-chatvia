import SimpleBar from 'simplebar-react'

const GroupsLeftSidebar = () => {
  return (
    <div className="chat-leftsidebar me-lg-1 ms-lg-0">

      <div className="tab-content">
        <div className="tab-pane fade show active">
          <div>
            <div className="p-4">
              <h4 className="mb-4">Groups</h4>

              <div className="search-box chat-search-box">
                <div className="input-group rounded-3">
                                        <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                                            <i className="ri-search-line search-icon font-size-18"/>
                                        </span>
                  <input type="text" className="form-control bg-light" placeholder="Search groups..."
                         aria-label="Search groups..." aria-describedby="basic-addon1"/>
                </div>
              </div>
            </div>

            <SimpleBar className="p-4 chat-message-list chat-group-list">
              <ul className="list-unstyled chat-list">
                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            G
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#General</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            R
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#Reporting <span
                          className="badge badge-soft-danger rounded-pill float-end">+23</span></h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            D
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#Designers</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            D
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#Developers <span
                          className="badge badge-soft-danger rounded-pill float-end">New</span></h5>
                      </div>
                    </div>

                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            P
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#Project-alpha</h5>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="d-flex align-items-center">
                      <div className="chat-user-img me-3 ms-0">
                        <div className="avatar-xs">
                                                        <span
                                                          className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                            B
                                                        </span>
                        </div>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h5 className="text-truncate font-size-14 mb-0">#Snacks</h5>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </SimpleBar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupsLeftSidebar