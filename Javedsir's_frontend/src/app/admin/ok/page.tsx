import Script from "next/script";


export default function Home() {
  return (
    <div>
    
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    content="BXNHLA4eMV8IKAJHTApcIWQZHHNITiMB56ucctPmWkOu8c2M6vh70zIP"
    name="csrf-token"
  />
  <title data-suffix=" · SelfServe">IDfy · SelfServe</title>
  <link rel="icon" type="image/png" href="/images/idfylogo.svg" />
  {/*--======== CSS ======== */}
  <link phx-track-static="" rel="stylesheet" href="/css/reset.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/base.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/main.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/dash-layout.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/boxes.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/cards.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/alert.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/popup.css" />
  <link phx-track-static="" rel="stylesheet" href="/css/form.css" />
 
  <link
    phx-track-static=""
    rel="stylesheet"
    href="/css/dashboard-other-pages.css"
  />
  <link phx-track-static="" rel="stylesheet" href="/css/overide.css" />
  {/*--===== Boxicons CSS ===== */}
  <link
    href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
    rel="stylesheet"
  />
  <nav className="sidebar pattern1 close">
    <header>
      <div className="image-text">
        <a href="/" className="image">
          <img src="/images/idfy-logo-white.svg" alt="Idfy Logo" />
        </a>
      </div>
      <i className="bx bx-chevron-right123 toggle">
        <img src="/images/caret-left-white.svg" alt="" />
      </i>
    </header>
    <div className="menu-bar pattern1">
      <div id="menu" className="menu">
        <ul className="menu-links">
          <li className="nav-link">
            <a
              className="text nav-text active"
              href="/dashboard?industry=Topmost"
            >
              <i className="bx icon">
                <span className="dynamic-title">Home</span>
                <img src="/images/dashboard.svg" alt="icon" />
              </i>
              <span>Home</span>
            </a>
          </li>
          {/* No need Sandbox now we can add in future here
    <li class="nav-link">
<a class="text nav-text" data-phx-link="redirect" data-phx-link-state="push" href="/dashboard">
        <i class='bx icon'>
          <img src="/images/sandbox.svg" alt="icon">
        </i>
        <span>Sandbox</span>
</a>
    </li>
    */}
          <li className="nav-link">
            <a className="text nav-text" href="/usage_insights">
              <i className="bx icon">
                <span className="dynamic-title">Usage Insights</span>
                <img src="/images/insights.svg" alt="icon" />
              </i>
              <span>Usage Insight</span>
            </a>
          </li>
          <li className="nav-link">
            <a className="text nav-text" href="/credit">
              <i className="bx icon">
                <span className="dynamic-title">Credits and Pricing</span>
                <img src="/images/credits.svg" alt="icon" />
              </i>
              <span>Credits and Pricing</span>
            </a>
          </li>
          <li className="nav-link">
            <a
              className="text nav-text"
              href="https://eve-api-docs.idfy.com/#tag/Getting-Started"
              target="_blank"
            >
              <i className="bx icon">
                <span className="dynamic-title">API Documentation</span>
                <img src="/images/documentation.svg" alt="icon" />
              </i>
              <span>API Documentation</span>
            </a>
          </li>
          <li className="nav-link">
            <a className="text nav-text" href="/credential">
              <i className="bx icon">
                <span className="dynamic-title">API Credentials</span>
                <img src="/images/api-credentials.svg" alt="icon" />
              </i>
              <span>API Credentials</span>
            </a>
          </li>
          <li className="nav-link">
            <a className="text nav-text" href="/support">
              <i className="bx icon">
                <span className="dynamic-title">Support</span>
                <img src="/images/support.svg" alt="icon" />
              </i>
              <span>Support</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div class="bottom-content">
  <li class="">
<a class="text nav-text" data-phx-link="redirect" data-phx-link-state="push" href="/sessions/eatoceo%40vahanfin.com" method="delete">
      <i class='bx bx-log-out icon'></i>
      <span>Logout</span>
</a>
  </li>
</div> */}
    </div>
  </nav>
  <section className="main">
    <header className="header shadow">
      <div className="left"></div>
      <div className="right_icons">
        <div
          id="mode-dropdown-menu"
          className="mode-dropdown-menu test"
          tabIndex={1}
        >
          <span id="header-mode-span">Test Mode</span>
          <ul className="dropdown">
            <li data-id="live_mode">Live Mode</li>
            <li data-id="test-mode">Test Mode</li>
          </ul>
        </div>
        <div className="greetings">Hello, Deepika </div>
        <div className="menu-icon" id="showMenu">
          <img src="/images/menu-dots.svg" alt="" />
        </div>
      </div>
    </header>
    <div
      data-phx-main="true"
      data-phx-session="SFMyNTY.g2gDaAJhBXQAAAAIZAACaWRtAAAAFHBoeC1GOUF1b1VjX3R5bGs3d0poZAAMbGl2ZV9zZXNzaW9uaAJkAAdkZWZhdWx0bggATbhkTPbOyhdkAApwYXJlbnRfcGlkZAADbmlsZAAIcm9vdF9waWRkAANuaWxkAAlyb290X3ZpZXdkAB1FbGl4aXIuU2VsZlNlcnZlV2ViLkRhc2hib2FyZGQABnJvdXRlcmQAGkVsaXhpci5TZWxmU2VydmVXZWIuUm91dGVyZAAHc2Vzc2lvbnQAAAAAZAAEdmlld2QAHUVsaXhpci5TZWxmU2VydmVXZWIuRGFzaGJvYXJkbgYAPPX2hI8BYgABUYA.BPNRhLhmoYYoje1QDodvC_dq8zSsoIIuagnwE_h5xzo"
      data-phx-static="SFMyNTY.g2gDaAJhBXQAAAADZAAKYXNzaWduX25ld2pkAAVmbGFzaHQAAAAAZAACaWRtAAAAFHBoeC1GOUF1b1VjX3R5bGs3d0pobgYAPPX2hI8BYgABUYA.WGVTAOY-mCiCRqr_oVwYw_dYbRzrAyaCSDUynAYRU_Y"
      id="phx-F9AuoUc_tylk7wJh"
    >
      <main>
        <div id="idle-session" phx-hook="IdleSession" />
        <p
          className="error"
          role="alert"
          phx-hook="CustomClearFlash"
          id="info-flash"
        />
        <p
          className="error"
          role="alert"
          phx-hook="CustomClearFlash"
          id="error-flash"
        />
        <div className="dash-page-content">
          <div></div>
          <section className="relative">
            <div className="d-flex fwrap justify-space-between">
              <div className="left">
                <h1 className="page-title">Home</h1>
              </div>
              <div className="right credit-info">
                <div className="credit-summary flex-column">
                  <div className="credit-summary-wrapper insuff_credit test">
                    <div className="credit-name">Testing Credits</div>
                    <div className="credit-value value1">
                      <span className="icon">
                        <img src="/images/tick-box.svg" alt="" />
                      </span>
                      <span className="values">
                        <span
                          className="counter value1"
                          id="test_rem_credits_value"
                          data-target={32}
                        >
                          0
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="credit-summary-wrapper insuff_credit live">
                    <div className="credit-name">
                      <span
                        title="Request live credits"
                        className="add_credit live"
                        phx-click="redirect-to-live-credit-page"
                      >
                        +
                      </span>
                      Live Credits
                    </div>
                    <div className="credit-value value2">
                      {" "}
                      <span className="icon">
                        <img src="/images/credits-green.svg" alt="" />
                      </span>
                      <span className="values">
                        <span
                          className="counter value1"
                          id="live_rem_credits_value"
                          data-target={0}
                        >
                          0
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* If error - show error here */}
          <h1 className="section-title">Suggested APIs</h1>
          <section>
            <div className="d-flex fgap2 mt10">
              {/* Search - Start */}
              <div className="search-wrapper">
                <form phx-change="search" className="search-form">
                  <input
                    autoComplete="off"
                    
                    className="searchForm"
                    id="search_field_query"
                    name="search_field[query]"
                    phx-debounce={300}
                    placeholder="Search for API name"
                    type="text"
                  />
                </form>
                <span className="icons icon-search">
                  <img title="Search APIs" src="/images/search.svg" alt="" />
                </span>
              </div>
              {/* Search - End */}
              {/* Filter button */}
              <div className="filterbtn" id="js-filterbtn">
                <span>Filters</span> <img src="/images/filter-blue.svg" alt="" />
              </div>
            </div>
            {/* Below div for filter option is toggled */}
            <div id="js_filterDiv" phx-update="ignore">
              <form phx-change="filter-industry">
                <div className="api_filter_wrapper d-flex">
                  <div className="select_wrapper">
                    <label htmlFor="industry">Industry</label>
                    <select className="select" name="industry">
                      <option >
                        Select an Industry
                      </option>
                      <option>Securities</option>
                      <option>Lending</option>
                      <option>Insurance</option>
                      <option>Crypto</option>
                      <option>Payments</option>
                      <option>Gaming</option>
                      <option>Banking</option>
                      <option>Logistics</option>
                      <option>Ecommerce</option>
                      <option>Background Verification</option>
                      <option>NBFCs &amp; Fintech</option>
                    </select>
                    <span className="select_icon">
                      <img src="/images/caret_down_grey.svg" alt="" />
                    </span>
                  </div>
                  <div className="select_wrapper">
                    <label htmlFor="api_category">API Type</label>
                    <select className="select" name="api_category">
                      <option >
                        Select API category
                      </option>
                      <option>Document Extraction (OCR)</option>
                      <option>Database Verification</option>
                      <option>Compare Solution</option>
                      <option>Document Tampering</option>
                      <option>Risk and Fraud</option>
                      <option>Document Recognition</option>
                      <option>Face Solutions</option>
                      <option>Document Masking</option>
                    </select>
                    <span className="select_icon">
                      <img src="/images/caret_down_grey.svg" alt="" />
                    </span>
                  </div>
                  <div className="select_wrapper">
                    <label htmlFor="onboarding_type">Target</label>
                    <select className="select" name="onboarding_type">
                      <option >
                        Select target
                      </option>
                      <option>Individual</option>
                      <option>Merchant</option>
                    </select>
                    <span className="select_icon">
                      <img src="/images/caret_down_grey.svg" alt="" />
                    </span>
                  </div>
                  <div className="select_wrapper">
                    <label htmlFor="country">Country</label>
                    <select className="select" name="country">
                      <option >
                        Select Country
                      </option>
                      <option>India</option>
                      <option>Philippines</option>
                      <option>Indonesia</option>
                      <option>United States of America</option>
                      <option>Vietnam</option>
                      <option>Malaysia</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia and Herzegovina</option>
                      <option>Botswana</option>
                      <option>Brazil</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Côte d'Ivoire</option>
                      <option>Cabo Verde</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo (Congo-Brazzaville)</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Cyprus</option>
                      <option>Czechia (Czech Republic)</option>
                      <option>Democratic Republic of the Congo</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Eswatini</option>
                      <option>Ethiopia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Greece</option>
                      <option>Grenada</option>
                      <option>Guatemala</option>
                      <option>Guinea</option>
                      <option>Guinea-Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Holy See</option>
                      <option>Honduras</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>North Korea</option>
                      <option>North Macedonia</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Palestine State</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>Saint Kitts and Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Vincent and the Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Sao Tome and Principe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Timor-Leste</option>
                      <option>Togo</option>
                      <option>Tonga</option>
                      <option>Trinidad and Tobago</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Venezuela</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                    <span className="select_icon">
                      <img src="/images/caret_down_grey.svg" alt="" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="relative">
            <div className="selected">
              <div className="selected-items">
                Topmost
                <span
                  className="close"
                  phx-click="remove-filter"
                  phx-value-target_value="Topmost"
                >
                  <img src="/images/cross.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="cards card-sm">
              <a className="blue-link absolute showallapis" href="/dashboard">
                <span className="icon">
                  <img src="/images/sandbox-blue.svg" alt="" />
                </span>
                Show all APIs
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_pan_plus">
</a> */}
              <a className="card" href="/verify_with_source/ind_pan_plus">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/PAN Verification Plus.svg"
                    alt="PAN Verification Plus"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">PAN Verification Plus</span>{" "}
                      &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if an individual or business PAN is valid by
                    crosschecking advanced features like DOB, Father's name,
                    PAN-Aadhaar Seeding Status against government databases.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/validate/document">
</a> */}
              <a className="card" href="/validate/document">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/Document Validation.svg"
                    alt="Document Validation"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">Document Validation</span>{" "}
                      &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Identify in real time which document the user has uploaded,
                    to ensure right first time document collection.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_pan">
</a> */}
              <a className="card" href="/verify_with_source/ind_pan">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/PAN Verification.svg"
                    alt="PAN Verification"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">PAN Verification</span> &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if an individual or business PAN is valid by
                    crosschecking against government databases.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_voter_id">
</a> */}
              <a className="card" href="/verify_with_source/ind_voter_id">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/Voter ID Verification.svg"
                    alt="Voter ID Verification"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">Voter ID Verification</span>{" "}
                      &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if a voter ID is legitimate by crosschecking against
                    government databases.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/extract/ind_pan">
</a> */}
              <a className="card" href="/extract/ind_pan">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/PAN OCR.svg"
                    alt="PAN OCR"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">PAN OCR</span> &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Extract details from a PAN card of any format.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_driving_license">
</a> */}
              <a
                className="card"
                href="/verify_with_source/ind_driving_license"
              >
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/Driving License Verification.svg"
                    alt="Driving License Verification"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">
                        Driving License Verification
                      </span>{" "}
                      &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if a DL number is valid and extract details
                    associated with it, by crosschecking against government
                    databases.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_vpa">
</a> */}
              <a className="card" href="/verify_with_source/ind_vpa">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/UPI-VPA Verification.svg"
                    alt="UPI-VPA Verification"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">UPI-VPA Verification</span>{" "}
                      &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if a UPI ID is legitimate, as well as the name
                    associated with the VPA/UPI ID
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/verify_with_source/ind_pan_essentials">
</a> */}
              <a className="card" href="/verify_with_source/ind_pan_essentials">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/Pan Essentials.svg"
                    alt="Pan Essentials"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">Pan Essentials</span> &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Verify if an individual or business PAN is valid by
                    crosschecking advanced features against government databases
                    in two different modes viz. Aadhaar mode &amp; DOB Mode.
                  </div>
                </div>
              </a>
              {/* we can change to link to live_redirect */}
              {/* <a class="card" data-phx-link="redirect" data-phx-link-state="push" href="/extract/ind_aadhaar">
</a> */}
              <a className="card" href="/extract/ind_aadhaar">
                <div className="card-left">
                  <img
                    className="api-img"
                    src="/images/api_svg/Aadhaar OCR.svg"
                    alt="Aadhaar OCR"
                  />
                </div>
                <div className="card-right">
                  <div className="d-flex justify-space-between">
                    <h3>
                      <span className="api-name">Aadhaar OCR</span> &nbsp;
                    </h3>
                    <span className="api-arrow">
                      <img src="/images/chevron-right.svg" alt="" />
                    </span>
                  </div>
                  <div className="api-text">
                    Extract details from an Aadhaar card of any format.
                  </div>
                </div>
              </a>
            </div>
          </section>
          <section>
            <div className="bottom-row">
              <div className="left">
                <h3 className="bottom-title">Get integrated quick</h3>
                <div className="box">
                  <div className="box-left">
                    <img src="/images/doc.svg" alt="" />
                  </div>
                  <div className="box-right">
                    <h5>View our API Documentation</h5>
                    <span>
                      <a
                        href="https://eve-api-docs.idfy.com/#tag/Getting-Started"
                        target="_blank"
                      >
                        Go to Integration Docs
                      </a>
                      <span className="icon">
                        <img src="/images/right-arrow-blue-circle.svg" alt="" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <h3 className="bottom-title">Add Credits</h3>
                <div className="box">
                  <div className="box-left">
                    <img src="/images/card.svg" alt="" />
                  </div>
                  <div className="box-right">
                    <h5>Generate API credentials</h5>
                    <a href="/credit">
                      <span>
                        Go to Credits
                        <span className="icon">
                          <img
                            src="/images/right-arrow-blue-circle.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Do not delete this */}
          <div className="v-spacer" />
          {/* Do not delete this */}
        </div>
        <div id="js-right-menu">
          <h3 className="greetings">Deepika</h3>
          <div title="Close Sidemenu" className="close-icon" id="hideMenu">
            <img src="/images/close.svg" alt="" />
          </div>
          <div className="menu-content">
            <a
              className="top_logout_btn"
              data-csrf="BXNHLA4eMV8IKAJHTApcIWQZHHNITiMB56ucctPmWkOu8c2M6vh70zIP"
              data-method="delete"
              data-to="/sessions/dbc66dcc-1b38-4fe4-b805-4548b5ed93a5"
              href="/sessions/dbc66dcc-1b38-4fe4-b805-4548b5ed93a5"
              rel="nofollow"
            >
              Logout
            </a>
            <div className="bottom-info">
              <p>For support, email apicentral.support@idfy.com</p>
              <p className="mt20">Powered by IDfy</p>
              <p>Version 2.1</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
  {/* Test credit request template */}
  {/* <div class="popup_wrapper" id="add-test-credit">
    <div class="popup req_sent_popup">
<div class="background">
  <div id="js_close_popup_req_sent" class="ftue_close"
    onclick="closeTestCreditPopup()">
    <img src="/images/cross-circle.svg" alt="">
  </div>
  <div class="popup_content">
    <h1 class="mb20"> Request sent!</h1>
    <p class="mt30">
      A request for testing credits has been sent to our support team. It could take upto 24 hours for a response.
      Hang in there!
    </p>
    <div class="bottom_button">
      <button class="btn btn-primary px40" onclick="closeTestCreditPopup()">Okay</button>
    </div>
  </div>
</div>
    </div>
  </div> */}
  {/*End of Test credit request template */}
  {/* Go live with IDfy popup */}
  {/* <div class="popup_wrapper" id="previous_popup_add_test_credit">
    <div class="popup go_live_popup">
<div class="background">
  <div id="js_close_popup_go_live" class="ftue_close"
    onclick="closePreviousPopup()">
    <img src="/images/cross-circle.svg" alt="">
  </div>
<div class="popup_content">
  <h1 class="mb20"> Go live with IDfy!</h1>
  <p class="mt30">
    Why just test? Start using our powerful APIs today by adding live credits to your account.
    To know more switch to live mode and visit credits page.
  </p>

  <div class="bottom_button">
    <a class="blue_link" phx-click="add-test-credit">Continue to request Test Credits</a>
    <button class="btn btn-primary px40" phx-click="redirect-to-live-credit-page">Add Live Credits</button>
  </div>

</div>
</div>
    </div>
  </div> */}
  {/* End Go live with IDfy */}
  {/* Go live with IDfy popup for prodApiKey if no payment is done by user */}
  <div className="popup_wrapper" id="js_popup_go_live_wrapper">
    <div className="popup go_live_popup">
      <div className="background">
        <div className="ftue_close" id="hidePopupGoLive">
          <img src="/images/cross-circle.svg" alt="" />
        </div>
        <div className="popup_content">
          <h1 className="mb20 big-title"> Go live with IDfy!</h1>
          <p className="mt30">
            You need Live Credits to generate production API key and start using
            our powerful APIs.
          </p>
          <p className="mt30">To know more visit credits page.</p>
          <div className="bottom_button">
            <button
              className="btn btn-primary px40"
              phx-click="redirect-to-live-credit-page"
            >
              Add Live Credits
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Go live with IDfy popup for prodApiKey if no payment is done by user */}
</>

    </div>
  );
}
