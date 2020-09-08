import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetch } from "../../../actions/loans";
import Footer from '../parts/Footer';
import Slider from './Slider';
import Moment from 'react-moment';
import 'moment-timezone';
const Home = ({loans, fetch}) => {
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    if (loans.length == 0 && typeof loans.data == "undefined") {
      fetch(5000);
    }

    if (typeof loans.data !== "undefined" && loans.data.length > 0) {
        setLoanData(loans.data);
    }
  }, [loans]);
  return (
    <div className='mt-6'>
      <section className='mt-80'>
        <Slider />
        <div className='py-5'>
          <div className='container'>
          <div >
                <h3 className='text-dark fancy-head'>Egoras makes it easy to support causes you care about.</h3>
              </div>
            <div className='row'>
              
            {loanData.map((loan, i) =>{
              let percent = 0;
              let up = 0;
              let down = 0;
             let accepted = parseInt(loan.accepted);
             let declined = parseInt(loan.declined);

             if(declined == 0 && accepted > 0){
              up = 100;
            }else if(accepted == 0 && declined > 0){
              down = 100
            }if(accepted == 0 && declined == 0){

            }else{
              let wholeNumber = declined +  accepted;
              let percent = ( accepted/wholeNumber) * 100;
              
              if(percent !== Infinity){
                up = percent;
                down = (100 - percent);
              }
              
            }

           return (
              
              <div className='col-md-3'>
                <div className='project-item'>
                <Link to={"/loan/details/" + i}>
                  <div className='project-item-img-con'
                     style={{
                      backgroundImage: `url(${loan.cover_image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: "200px"
                    }}>
                   
                    
                    
                  </div>
                  </Link>
                  <div className='project-item-text-con'>
                    <div>
                      <div className='pt-2'>
                        <div className='p-item-text-1'>
                          <div className='font-weight-bold text-uppercase'>
                          {loan.country}
                          </div>
                        </div>
                      </div>
                      <div className='d-flex mt-2'>
                        <div>
                          <div className='ttx-1 lineClip lineClip-2'>
                          <Link to={"/loan/details/" + i} className="noDefaults">
                           {loan.loan_tile}
                           </Link>
                          </div>
                          <div className='ttx-2 lineClip lineClip-3'>
                            <Moment>{loan.createdAt}</Moment>
                           
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <small className='text-uppercase'>
                       {loan.companies.name_of_company}
                      </small>
                      {loan.validated && loan.is_approved == false ? (
                        <span class="badge badge-danger" style={{float: "right"}}>Declined</span>
                      ) : null}
                      
                      {!loan.validated && loan.isActiveVotingPeriod == true ? (
                        <span class="badge badge-info" style={{float: "right"}}>Awaiting Approval</span>
                      ) : null}

                            {!loan.validated && loan.isActiveVotingPeriod == false ? (
                        <span class="badge badge-warning" style={{float: "right"}}>Pending</span>
                      ) : null}

                      {loan.validated && loan.is_approved == true ? (
                        <span class="badge badge-success" style={{float: "right"}}>Approved</span>
                      ) : null}
                      <div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>{up}%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count' style={{width: up+"%"}}></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>{down}%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-0' style={{width: down+"%"}} ></div>
                              </div>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
             );
            })}
             
              
            </div>
          </div>
        </div>
        
        <div className='py-5'>
          <div className='container'>
            <div className='text-center'>
                <h3>How it works</h3>
                <p>By voting on Egoras, you can support the causes you care about and make a real personal impact.</p>
            </div>
            <div className='crowdfund-container'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='text-center'>
                    <img className='mb-3' src='/delegate.png' width='100' alt='' />
                    <h5>Choose a borrower</h5>
                    <p>Connect your wallet and Lock your EGR on Egoras lending protocol, Browse by category and find an entrepreneur to support to receive ETH voting rewards.</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='text-center'>
                    <img className='mb-3' src='/good.png' width='100' alt='' />
                    <h5>Vote for a loan</h5>
                    <p>EGR voters receive two kinds of rewards. Firstly, they receive EGR voting rewards, which are created through the inflationary monetary policy. Secondly, they receive ETH which is generated when the borrowers pay back the loans.</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='text-center'>
                    <img className='mb-3' src='/reward.png' width='100' alt='' />
                    <h5>Get rewarded</h5>
                    <p>EGR holders are responsible for governing the Egoras Lending Protocol, which includes approving and declining of loans. The EGR tokens locked up during the governance process are returned to the holder 72hrs after the governance process is over.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-5'>
            <div className='container'>
              <div className='text-center'>
                <h1>170% Backed</h1>
                <p>All loans are over collateralized by real-world assets like real estates, vehicles, supply chain invoices and others, <br /> The real-world assets backing are represented as NFTs, bringing trust to the ecosystem.</p>
                <div className='mt-3 w-75 mx-auto'>
                  <div className='p-4 bg-light custom-radius'>
                    <div className='row'>
                      <div className='col-md-3'>
                        <div className='border-right'>
                          <h5 className='mb-0 text-black'>$0M</h5>
                        <p className='mb-0'>Reserve funds</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className='border-right'>
                          <h5 className='mb-0 text-black'>$0</h5>
                        <p className='mb-0'>Loans funded</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className='border-right'>
                          <h5 className='mb-0 text-black'>0</h5>
                        <p className='mb-0'>Voters</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className=''>
                          <h5 className='mb-0 text-black'>0 EGR</h5>
                        <p className='mb-0'>Weekly rewards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='py-5'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='font-Georgia'>Which categories interest you?</h2>
              <p>
                Discover a cause just for you and get great recommendations
                when you select your interests.
              </p>
              
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/tractor.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Agriculture</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/retail.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Retail</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/woman.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Women</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/mother.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Single Parents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loans: state.loans,
});

export default connect(mapStateToProps, {
  fetch,
})(Home);

