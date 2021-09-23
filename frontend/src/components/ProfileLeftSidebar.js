import SimpleBar from 'simplebar-react'

const ProfileLeftSidebar = () => {
  return (
    <div className="chat-leftsidebar me-lg-1 ms-lg-0">

      <div className="tab-content">
        <div className="tab-pane fade show active">
          <div>
            <div className="px-4 pt-4">
              <div className="user-chat-nav float-end">
                <div className="dropdown">
                  <a href="#" className="font-size-18 text-muted dropdown-toggle" data-bs-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">
                    <i className="ri-more-2-fill"/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Edit</a>
                    <a className="dropdown-item" href="#">Action</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">Another action</a>
                  </div>
                </div>
              </div>
              <h4 className="mb-0">My Profile</h4>
            </div>

            <div className="text-center p-4 border-bottom">
              <div className="mb-4">
                <img src="/assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt=""/>
              </div>

              <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
              <p className="text-muted text-truncate mb-1"><i
                className="ri-record-circle-fill font-size-10 text-success me-1 ms-0 d-inline-block"/> Active</p>
            </div>
            <SimpleBar className="p-4 user-profile-desc">
              <div className="text-muted">
                <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple and
                  regular than that of the individual.</p>
              </div>


              <div id="tabprofile" className="accordion">
                <div className="accordion-item card border mb-2">
                  <div className="accordion-header" id="about2">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#about"
                            aria-expanded="true" aria-controls="about">
                      <h5 className="font-size-14 m-0">
                        <i className="ri-user-2-line me-2 ms-0 ms-0 align-middle d-inline-block"/> About
                      </h5>
                    </button>
                  </div>
                  <div id="about" className="accordion-collapse collapse show" aria-labelledby="about2"
                       data-bs-parent="#tabprofile">
                    <div className="accordion-body">
                      <div>
                        <p className="text-muted mb-1">Name</p>
                        <h5 className="font-size-14">Patricia Smith</h5>
                      </div>

                      <div className="mt-4">
                        <p className="text-muted mb-1">Email</p>
                        <h5 className="font-size-14">adc@123.com</h5>
                      </div>

                      <div className="mt-4">
                        <p className="text-muted mb-1">Time</p>
                        <h5 className="font-size-14">11:40 AM</h5>
                      </div>

                      <div className="mt-4">
                        <p className="text-muted mb-1">Location</p>
                        <h5 className="font-size-14 mb-0">California, USA</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card accordion-item border">
                  <div className="accordion-header" id="attachfile2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#attachfile" aria-expanded="false" aria-controls="attachfile">
                      <h5 className="font-size-14 m-0">
                        <i className="ri-attachment-line me-2 ms-0 ms-0 align-middle d-inline-block"/> Attached Files
                      </h5>
                    </button>
                  </div>
                  <div id="attachfile" className="accordion-collapse collapse" aria-labelledby="attachfile2"
                       data-bs-parent="#tabprofile">
                    <div className="accordion-body">
                      <div className="card p-2 border mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm me-3 ms-0">
                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                              <i className="ri-file-text-fill"/>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-start">
                              <h5 className="font-size-14 mb-1">Admin-A.zip</h5>
                              <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                            </div>
                          </div>

                          <div className="ms-4 me-0">
                            <ul className="list-inline mb-0 font-size-18">
                              <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                  <i className="ri-download-2-line"/>
                                </a>
                              </li>
                              <li className="list-inline-item dropdown">
                                <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="ri-more-fill"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"/>
                                  <a className="dropdown-item" href="#">Delete</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card p-2 border mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm me-3 ms-0">
                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                              <i className="ri-image-fill"/>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-start">
                              <h5 className="font-size-14 mb-1">Image-1.jpg</h5>
                              <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                            </div>
                          </div>

                          <div className="ms-4 me-0">
                            <ul className="list-inline mb-0 font-size-18">
                              <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                  <i className="ri-download-2-line"/>
                                </a>
                              </li>
                              <li className="list-inline-item dropdown">
                                <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="ri-more-fill"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"/>
                                  <a className="dropdown-item" href="#">Delete</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card p-2 border mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm me-3 ms-0">
                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                              <i className="ri-image-fill"/>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-start">
                              <h5 className="font-size-14 mb-1">Image-2.jpg</h5>
                              <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                            </div>
                          </div>

                          <div className="ms-4 me-0">
                            <ul className="list-inline mb-0 font-size-18">
                              <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                  <i className="ri-download-2-line"/>
                                </a>
                              </li>
                              <li className="list-inline-item dropdown">
                                <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="ri-more-fill"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"/>
                                  <a className="dropdown-item" href="#">Delete</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="card p-2 border mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm me-3 ms-0">
                            <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                              <i className="ri-file-text-fill"/>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-start">
                              <h5 className="font-size-14 mb-1">Landing-A.zip</h5>
                              <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                            </div>
                          </div>

                          <div className="ms-4 me-0">
                            <ul className="list-inline mb-0 font-size-18">
                              <li className="list-inline-item">
                                <a href="#" className="text-muted px-1">
                                  <i className="ri-download-2-line"/>
                                </a>
                              </li>
                              <li className="list-inline-item dropdown">
                                <a className="dropdown-toggle text-muted px-1" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="ri-more-fill"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"/>
                                  <a className="dropdown-item" href="#">Delete</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleBar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLeftSidebar