
import './CSS/Designpage.css'
import {useState, useEffect} from 'react'
import Rawdata from '../Components/Assets/Rawdata.png'
import CleanData from '../Components/Assets/cleandata.png'
import Employee from '../Components/Assets/Employeedataset.png'
import Company  from '../Components/Assets/companydataset.png'
import Job from '../Components/Assets/jobposting.png'

import Rawdatasets from '../Components/Assets/rawdatasets.png'
import CleanDatasets from '../Components/Assets/cleandatasets.png'
import Databaseapi from '../Components/Assets/api.png'
const Designpage =()=>{

    const [selectedOption, setSelectedOption] = useState('Dictionary');

    const [jsondata, setJsonData] = useState('');

    useEffect(() => {
        
       const dummyData= {
            "full_name": "John Doe",
            "first_name": "John",
            "last_name": "Doe",
            "headline": "Top Realtor Transforms Dreams into Addresses: Your Trusted Partner for Seamless Real Estate Journeys!",
            "profile_url": "https://www.professional-network.com/john-doe",
            "location": "Greater Sacramento",
            "industry": "Real Estate",
            "summary": "With a decade of dedicated experience in the real estate industry, I have successfully guided clients through countless transactions, always striving for excellence. My extensive knowledge, combined with a passion for finding the perfect homes, ensures personalized and seamless real estate experiences for every client.",
            "updated_at": "2023-03-21T07:31:50.992915Z",
            "checked_at": "2023-03-21T07:31:50.992915Z",
            "services": "Customer Service, Commercial Real Estate, Real Estate, Real Estate Marketing, Relocation, Property Management, Strategic Planning, Project Management, Advertising, and Public Speaking",
            "deleted": 0,
            "country": "United States",
            "recommendations_count": 3,
            "connections_count": 500,
            "follower_count": 10144,
            "experience_count": 5,
            "shorthand_name": "john-doe",
            "canonical_shorthand_name": "john-doe",
            "shorthand_names": [
                {
                    "shorthand_name": "john-doe",
                    "member_hash_id": "d49b6e0498966129be53eb8301214572",
                    "shorthand_names_hash_id": "1f5e97ec735b4e752495d44d0658e74b"
                }
            ]
        };
        setJsonData(dummyData);
    }, []);


    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="Designpage">
            <div className="sqaures">
                <div className='components'>
                    <h1>Employee data</h1>
                    <p>
                        Use 703M+ continuously updated employee profiles for talent sourcing & intelligence or lead enrichment.
                    </p>
                    <ul>
                        <li>General employee information</li>
                        <li>Skills</li>
                        <li>Recommendations</li>
                        <li>Job experience</li>
                        <li>Education</li>
                    </ul>
                </div>
                <div className='components' >   
                    <h1>Company data</h1>
                    <p>Discover new companies to invest in from our database of 70M+ companies, fully refreshed every month.</p>
                    <ul>
                        <li>General company information</li>                       
                        <li>Industry and type</li>
                        <li>Headcount data</li>
                        <li>Location</li>
                        <li>Size</li>

                    </ul>

                </div>
                <div className = "components"  >
                    <h1>Job posting data</h1>
                        <p>Use extensive job data (243M+ records) for competitive intelligence or talent analytics. New records added every day.</p>
                        <ul>
                            <li>General job description</li>
                            <li>Employment type</li>
                            <li>Job position title</li>
                            <li>Required skills</li>
                            <li>Location</li>
                        </ul>

                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
              

            <div className='professional'>
                <div className = "professional-left">
                    <div className="tab-container">
                        <button
                            className={`tab ${selectedOption === 'Dictionary' ? 'active' : ''}`}
                            onClick={() => handleClick('Dictionary')}
                            aria-pressed={selectedOption === 'Dictionary'}
                        >
                            <span>Dictionary</span>
                        </button>
                        <button
                            className={`tab ${selectedOption === 'JSON' ? 'active' : ''}`}
                            onClick={() => handleClick('JSON')}
                            aria-pressed={selectedOption === 'JSON'}
                        >
                            <span>JSON</span>
                        </button>
                    </div>
                     
                    
                    <div className="rcresponse-table-container">
                    
                           
                           
                            {

                                selectedOption === 'Dictionary' ?  (
                                    <div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p ><strong>Data points</strong></p></div>
                                            <div className="rcctable-right"><p><strong>Example values</strong></p></div>
                                        </div>
                                        
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Name</p></div>
                                            <div className="rcctable-right"><p>Lucas van Antonio</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Title	</p></div>
                                            <div className="rcctable-right"><p>Attorney</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>URL</p></div>
                                            <div className="rcctable-right"><p>https://www.website.com/in/%^c32%97lucas-van-antonio-1545ab53269b</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Location</p></div>
                                            <div className="rcctable-right"><p>Newark, New York, United States</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Industry</p></div>
                                            <div className="rcctable-right"><p>Law Practice</p></div>
                                        </div>
                                        <div className="rcctable">
                                            <div className="rcctable-left"><p>Connections</p></div>
                                            <div className="rcctable-right"><p>4 connections</p></div>
                                        </div>

                                        

                                        
                                    </div>)
                                    :(  
                                        <pre className="json-data" style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(jsondata, null, 2)}</pre>

                                    )
                            }    
                    </div>         
                      





                </div>
                <div className = "professional-right"  >
                    <h1>What is professional network data?</h1>
                    <p>This is the ultimate B2B web data source that benefits businesses in various industries. We offer over 1 billion data records from this source, the majority of which are refreshed on a regular basis. Our professional network data is split into three B2B datasets: employee data, company data, and job posting data. You can get fresh data from us at scale daily, monthly, and quarterly or retrieve relevant data records yourself using our APIs.</p>
                    <button> See Documentation</button>
                </div>

            </div>
            <br/>
            <br/>
            <div  className = "Reduce" >
                <div>
                    <h1>Reduce time to value with clean B2B data</h1>
                </div>
                
                <div>
                    <h3>Professional network datasets are available in two types: raw and clean.</h3>
                </div>
                <div>   
                    <button> Learn More </button>
                </div>

            </div>

            <br/>
            <br/>
            <div className="data">
                <div className="data-left">
                    <img src={Rawdata} alt= "" />
                    <h1>Raw Data</h1>
                    <p>
                    Popular among companies with strong data engineering capabilities that need
                    data that is closer to the source.
                    </p>
                    <ul className="data-list">
                    <li>
                        <span className="data-icon">&#10004;</span> 770M+ records available
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> No profile filtering
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> Basic pre-processing only
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> Data is not enriched
                    </li>
                    </ul>
                </div>
                <div className="data-right">
                <img src={CleanData} alt= "" />
                    <h1>Clean Data</h1>
                    <p>
                    Best suited for companies that prefer ready-to-use, pre-processed datasets
                    that require less data engineering.
                    </p>
                    <ul className="data-list">
                    <li>
                        <span className="data-icon">&#10004;</span> 735M+ records available
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> Contains high-value profiles only
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> Cleaned, filtered, and standardized
                    </li>
                    <li>
                        <span className="data-icon">&#10004;</span> 20+ additional fields
                    </li>
                    </ul>
                    </div>
            </div>
            <div  className = "dataset">
                 <div className = "Employee"  >
                     <div className = "Employee-left">
                        <h1>Employee dataset</h1>
                         <p><strong>Employee data</strong> is best for <strong>HR tech companies</strong> because it<br/> enables data-driven recruiting.</p>
                         <p>Data points such as name, location, industry, position title, skills,<br/> employment length, and more allow building recruitment<br/> platforms that are free of hiring bias.</p>
                         <p>Easily find only the best-fit talent based on qualifications instead<br/> of gut feelings.</p>
                         <button>Book a free consultation </button>
                     </div>
                     <div className= "Employee-right">
                        <img src={Employee} alt='' />
                     </div>
                 </div>  
                 <div className= "Company"> 
                    <div className='Company-left'>
                        <img  src={Company}  alt=''/>
                    </div>  
                    <div className='Company-right'>
                            <h1>Company dataset</h1>
                            <p>Also known as firmographic data, it's best for <strong>investors </strong>.</p>
                            <p>Data points such as company name, location, headcount,<br/> industry, size, and more allow investors to <strong>discover</strong> and <strong>evaluate</strong><br/> companies they are interested in.</p>
                            <p>Also, you can find companies that fit a predefined size or <br/>headcount criteria.</p>
                            <button>Book a free consultation</button>
                    </div>

                 </div>
                 <div className='Jobposting'>
                    <div className='Jobposting-left'>
                            <h1>Job posting dataset</h1>
                            <p><strong>Job posting data</strong> works very well for <strong>both HR and investors</strong>.</p>
                            <p>It allows for a more imaginative approach. Data points such as job <br/>title, location, industry, seniority level, employment type, skills <br/>required, salary, remote option, and more <br/>allow seeing a more complete picture of the company’s goals.</p>
                            <p>
                                Furthermore, job postings are a great source of technographic<br/> information.
                            </p>
                            <button>Book a free consultation</button>
                    </div> 
                    <div className='Jobposting-right'>
                            <img src={Job} alt='' />
                    </div> 
                 </div>         
            </div>
            <div className='last'>
                <h1>Choose how you want to get data</h1>
            
                <div className='lastdata'>  
                    
                    <div className='lastdatacomp'>
                        <img src={Rawdatasets} alt=''/>
                        <h2>Raw Datasets</h2>
                        <p>You can choose between several options: direct download via link, Google Cloud Storage, and AWS S3.  </p>
                        <button>Contact Sales</button>
                    </div>
                    <div className='lastdatacomp'>
                            <img src={CleanDatasets} alt=''/>
                            <h2>Clean datasets</h2>
                            <p>Save data engineering resources by opting for a refined and enriched version of the dataset you're interested in.</p>
                            <button>Contact Sales</button>
                    </div>
                    <div className='lastdatacomp'>
                                <img src={Databaseapi} alt='' />
                                <h2>Database API</h2>
                                <p>Find relevant data records with access to our professional network data datasets and download them in structured JSON</p>
                                <button>Contact Sales</button>
                    </div>

                </div>
            </div>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default Designpage