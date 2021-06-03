import React from 'react';
// import SideBar from './Sidebar';
// import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = 'content-wrapper', title = 'Dashboard',  }) => {
	return (
		<div align="center">
			{/* <Header />
			<SideBar /> */}
			<div className={className} align="center">
				<section className="content-header">
					<div className="row" align="center">
						<div className="col-md-12" align="center">
							<div className="box" align="center">
								<div className="box-header with-border" align="center">
									{/* <h3 className="box-title" align="center">{title}</h3> */}
								</div>
								<div className="box-body" style={{marginBottom: '8rem'}} align="center">{children}</div>
								<Footer />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Layout;
