import graphicUrl from '../../../../assets/images/woman-with-coffee-and-website.png';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon
} from '@wordpress/components';
import Heading from '../../components/heading';

const WebHostingSection = () => {
	return (
		<section className="wppw-section wppw-section-home-hosting">
			<img src={graphicUrl} className='section-graphic' alt={__('Hosting illustration', 'wp-plugin-web')} />
			<Card size="large" className="wppw-section-card">
				<CardHeader>
					<Heading level="3">
						{__('Web Hosting', 'wp-plugin-web')}
					</Heading>
				</CardHeader>
				<CardBody>
					<p>
						{__(
							'Manage hosting in your Web.com portal account',
							'wp-plugin-web'
						)}
					</p>
				</CardBody>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Dashicon icon="desktop" />{' '}
							{__('Manage Hosting', 'wp-plugin-web')}
						</Heading>
						<p>
							{__(
								'Manage your site from the control panel. You can also create backups and improve performance.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button
						variant="primary"
						href={
							`https://www.web.com/my-account/home?`+
							`&utm_campaign=`+
							`&utm_content=home_hosting_sites_link`+
							`&utm_term=manage_sites`+
							`&utm_medium=brand_plugin`+
							`&utm_source=wp-admin/admin.php?page=web#/home`
						}
						target="_blank"
						icon="desktop"
					>
						{__('Manage Sites', 'wp-plugin-web')}
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Dashicon icon="email" />{' '}
							{__('Email', 'wp-plugin-web')}
						</Heading>
						<p>
							{__(
								'Create email accounts, compose, send, and receive your email from the control panel.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button
						variant="primary"
						href={
							`https://www.web.com/manage-it/email-overview.jsp?`+
							`&utm_campaign=`+
							`&utm_content=home_hosting_email_link`+
							`&utm_term=manage_email`+
							`&utm_medium=brand_plugin`+
							`&utm_source=wp-admin/admin.php?page=web#/home`
						}
						target="_blank"
						icon="email"
					>
						{__('Manage Email', 'wp-plugin-web')}
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Dashicon icon="admin-site" />{' '}
							{__('Domains', 'wp-plugin-web')}
						</Heading>
						<p>
							{__(
								'Find a new domain and assign it to your site or start a new site with a fresh domain.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button
						variant="secondary"
						href={
							`https://www.web.com/domains?`+
							`&utm_campaign=`+
							`&utm_content=home_hosting_domain_link`+
							`&utm_term=find_domain`+
							`&utm_medium=brand_plugin`+
							`&utm_source=wp-admin/admin.php?page=web#/home`
						}
						target="_blank"
						icon="admin-site"
					>
						{__('Find a Domain', 'wp-plugin-web')}
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Dashicon icon="sos" />{' '}
							{__('Help', 'wp-plugin-web')}
						</Heading>
						<p>{__('24/7/365 support. We work when you work.', 'wp-plugin-web')}</p>
					</div>
					<Button
						variant="secondary"
						href="#/help"
						icon="sos"
						className="callout-link-help"
					>
						{__('Get Help', 'wp-plugin-web')}
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default WebHostingSection;
