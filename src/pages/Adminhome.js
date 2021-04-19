import React from "react";
import './css/backup/app1.css';
export default function Adminhome() {
    return (
        <div className="wrapper1">
		<nav id="sidebar1" className="sidebar1">
			<div className="sidebar1-content1 js1-simplebar1">
				<a className="sidebar1-brand1" href="./adminhome">
          <span className="align-middle1">BusMate Admin Panel</span>
        </a>

				<ul className="sidebar1-nav1">
					<li className="sidebar1-header">
						Pages
					</li>

					<li className="sidebar1-item1 active1">
						<a className="sidebar1-link" href="index.html">
              <i className="align-middle1" data-feather="sliders"></i> <span className="align-middle1">Dashboard</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="pages-profile.html">
              <i className="align-middle1" data-feather="user"></i> <span className="align-middle1">Profile</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="pages-settings.html">
              <i className="align-middle1" data-feather="settings"></i> <span className="align-middle1">Settings</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="pages-invoice.html">
              <i className="align-middle1" data-feather="credit-card"></i> <span className="align-middle1">Invoice</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="pages-blank.html">
              <i className="align-middle1" data-feather="book"></i> <span className="align-middle1">Blank</span>
            </a>
					</li>

					<li className="sidebar1-header">
						Tools & Components
					</li>
					<li className="sidebar1-item1">
						<a data-target="#ui" data-toggle="collapse" className="sidebar1-link collapsed">
              <i className="align-middle1" data-feather="briefcase"></i> <span className="align-middle1">UI Elements</span>
            </a>
						<ul id="ui" className="sidebar1-dropdown list-unstyled collapse " data-parent="#sidebar1">
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-alerts.html">Alerts</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-buttons.html">Buttons</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-cards.html">Cards</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-general.html">General</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-grid.html">Grid</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-modals.html">Modals</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="ui-typography.html">Typography</a></li>
						</ul>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="icons-feather.html">
              <i className="align-middle1" data-feather="coffee"></i> <span className="align-middle1">Icons</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a data-target="#forms" data-toggle="collapse" className="sidebar1-link collapsed">
              <i className="align-middle1" data-feather="check-circle"></i> <span className="align-middle1">Forms</span>
            </a>
						<ul id="forms" className="sidebar1-dropdown list-unstyled collapse " data-parent="#sidebar1">
							<li className="sidebar1-item1"><a className="sidebar1-link" href="forms-layouts.html">Form Layouts</a></li>
							<li className="sidebar1-item1"><a className="sidebar1-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
						</ul>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="tables-bootstrap.html">
              <i className="align-middle1" data-feather="list"></i> <span className="align-middle1">Tables</span>
            </a>
					</li>

					<li className="sidebar1-header">
						Plugins & Addons
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="charts-chartjs.html">
              <i className="align-middle1" data-feather="bar-chart-2"></i> <span className="align-middle1">Charts</span>
            </a>
					</li>

					<li className="sidebar1-item1">
						<a className="sidebar1-link" href="maps-google.html">
              <i className="align-middle1" data-feather="map"></i> <span className="align-middle1">Maps</span>
            </a>
					</li>
				</ul>
			</div>
		</nav>
        </div>
    );
  }