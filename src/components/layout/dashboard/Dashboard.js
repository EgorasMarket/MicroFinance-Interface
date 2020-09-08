import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className='mt-6'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-12'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  All Loans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Ongoing Loans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Approved Loans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => {
                    toggle('4');
                  }}
                >
                  Declined Loans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '5' })}
                  onClick={() => {
                    toggle('5');
                  }}
                >
                  Debts
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <div className='p-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId='2'>
                <div className='p-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                {/* <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div> */}
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>74%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count'></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>30%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-30'></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId='3'>
                <div className='p-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId='4'>
                <div className='p-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to="/loan">
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId='5'>
                <div className='p-3'>
                  <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product2.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product1.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product3.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                      <Link to='/loan'>
                      <div className='dash-project-item'>
                        <div className='project-item-img-con'>
                          <img className='img-fluid' src='/product4.jpg' alt='' />
                        </div>
                        <div className='dash-project-item-text-con'>
                          <div>
                            <div className='pt-2'>
                              <div className='p-item-text-1'>
                                <div className='font-weight-bold text-uppercase'>
                                  Funding
                                </div>
                              </div>
                            </div>
                            <div className='d-flex mt-2'>
                              <div>
                                <div className='ttx-1 lineClip lineClip-2'>
                                  Bluetti AC200 - Most Versatile Solar Power
                                  Station
                                </div>
                                <div className='ttx-2 lineClip lineClip-3'>
                                  2000W/1700Wh Capacity/LG EV-grade Cell/700W
                                  Solar/Cycle Time 2500+/Surge 4800W/Charge
                                  Tesla & E-Bike
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                    </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
