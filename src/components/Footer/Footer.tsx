'use client';
import { Calendar, Facebook, Instagram } from 'lucide-react';
import React from 'react';
import MaxWidthContent from '../../_component/MaxWidthContent';
import { useLocation } from '../../contexts/LocationContext';

const locations = [
	{
		apiAddr: 'Fernie, BC',
		name: 'Sushiwood - Fernie',
		address: 'A-1221 7th Ave, Fernie, BC, Canada V0B 1M0',
		phone: '(778) 519-5255',
		email: 'sushiwoodinfo@gmail.com',
		mapSrc:
			'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d82898.26600540926!2d-115.14409555260812!3d49.51149844043173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x53656b8c5c873351%3A0x16f724005cb5e06!2s1221%207%20Ave%2C%20Fernie%2C%20BC%20V0B%201M0!3m2!1d49.5115376!2d-115.06171909999999!5e0!3m2!1sen!2sca!4v1741678003246!5m2!1sen!2sca',
	},
	{
		apiAddr: 'Nelson, BC',
		name: 'Sushiwood - Nelson',
		address: '702 Vernon St, Nelson, BC V1L 4G2',
		phone: '(778) 463-1117',
		email: 'sushiwoodnelson@gmail.com',
		mapSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.5084749783296!2d-117.291703!3d49.493791099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537cb76f8a5e01a3%3A0x26fbf94747cfc32c!2sSushi%20Wood%20Nelson!5e0!3m2!1sen!2sca!4v1741678380888!5m2!1sen!2sca',
	},
	{
		apiAddr: 'Castlegar, BC',
		name: 'Sushiwood - Castlegar',
		address: 'Columbia Ave, Castlegar, BC V1N 1A9',
		phone: 'Unavailable',
		email: 'sushiwoodcastlegar@gmail.com',
		mapSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5200.585604426014!2d-117.6661027!3d49.3276751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537cd3664b0c818f%3A0x14b64c279b69e510!2sSushi%20Wood%20Castlegar!5e0!3m2!1sen!2sca!4v1741678416648!5m2!1sen!2sca',
	},
];

const Footer = () => {
	const { selectedLocation } = useLocation();
	const currentLocation = locations.find((loc) => loc.apiAddr === selectedLocation) || locations[0];
	//split the address into parts
	const addressParts = currentLocation.address.split(', ');
	return (
		<footer>
			{/* Contact us */}
			<section id='contact'>
				<MaxWidthContent className='flex flex-col items-center justify-center gap-10 py-16 px-9'>
					<div className='relative w-full text-center'>
						<span className='h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white' />
						<h2 className='text-3xl z-10 font-brandon-text uppercase tracking-wide w-52 md:w-fit md:bg-black md:px-8 mx-auto '>Contact us</h2>
					</div>

					<div className='flex gap-10 md:gap-18 w-full flex-wrap mt-12'>
						{/* <div className="md:hidden w-full">
              <Calendar />
            </div> */}

						<div className='flex-grow justify-center overflow-hidden flex-shrink min-h-80 min-w-72'>
							<iframe
								title='Google Maps location'
								src={currentLocation.mapSrc}
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</div>

						<div className='flex flex-none flex-col gap-6'>
							<div>
								<h3 className='border-b text-lg mb-1 font-normal '>Our Address</h3>
								<address>
									{addressParts[0]}, <br />
									{addressParts[1]}, {addressParts[2]} {addressParts[3]} <br />
								</address>
							</div>

							<div className='flex flex-col gap-1'>
								<h3 className='border-b text-lg mb-1 font-normal '>Contact Info</h3>
								<a href={`tel:${currentLocation.phone.replace(/\D/g, '')}`} aria-label={`Call Us at ${currentLocation.phone}`}>
									{currentLocation.phone}
								</a>
								<a href={`mailto:${currentLocation.email}`} aria-label={`Email Us at ${currentLocation.email}`}>
									{currentLocation.email}
								</a>
							</div>

							<div>
								<h3 className='border-b text-lg mb-1 font-normal '>Open Hours</h3>
								<p>Mon - Thurs: 11:30am - 9:30pm</p>
								<p>Fri: 11:30am - 10:00pm</p>
								<p>Sat: 11:00am - 10:00pm</p>
								<p>Sun: 11:00am - 10:00pm</p>
							</div>

							<div className="flex gap-4">
								<a
									href="https://www.facebook.com/media/set/?set=a.750329719694381"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Facebook className="h-8 w-8 cursor-pointer" />
								</a>
								<a
									href="https://www.instagram.com/ferniesushiwood/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Instagram className="h-8 w-8 cursor-pointer" />
								</a>
							</div>
						</div>
					</div>
				</MaxWidthContent>
			</section>

			{/* Footer */}
			<section className='text-center text-stone-400 text-xs uppercase font-montserra leading-none'>
				<p> &copy; 2025 SushiWood. All Rights Reserved.</p> <br />
				<p>
					developed by{' '}
					<a href='https://www.webteck.ca' className='underline text-yellow-600'>
						{' '}
						Vancouver Webteck
					</a>{' '}
				</p>
			</section>
		</footer>
	);
};

export default Footer;
