import { Calendar, Facebook, Instagram } from "lucide-react";
import React from "react";
import MaxWidthContent from "./MaxWidthContent";

const Footer = () => {
  return (
    <footer>
      {/* Contact us */}
      <section id="contact">
        <MaxWidthContent className="flex flex-col items-center justify-center gap-10 py-16 px-14">
          <div className="relative w-full text-center">
            <span className="h-0 absolute -z-10 left-0 top-1/2 w-full md:h-0.5 bg-white" />
            <h2 className="text-3xl z-10 font-brandon-text uppercase tracking-wide w-52 md:w-fit md:bg-black md:px-8 mx-auto ">
              Contact us
            </h2>
          </div>

          <div className="flex gap-10 md:gap-18 w-full flex-wrap mt-12">
            <div className="md:hidden w-full">
              <Calendar />
            </div>

            <div className=" flex-grow rounded-2xl overflow-hidden flex-shrink min-h-80 min-w-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.818642660048!2d-123.13691352384802!3d49.260883272298116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c0b8748b43%3A0xd98e978ef37556d!2s1305%20W%2012th%20Ave%2C%20Vancouver%2C%20BC%20V6H%201M2!5e0!3m2!1sen!2sca!4v1718643803441!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex flex-none flex-col gap-6">
              <div>
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Our Address
                </h3>
                <address>
                  1305 W 12th Ave,
                  <br />
                  Vancouver, BC V6H 1M2
                </address>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Contact Info
                </h3>
                <a
                  href="tel:+16043188494"
                  aria-label="Call Us at +1 (604) 318-8494"
                >
                  (604)-318-8494
                </a>
                <a
                  href="mailto:sushidelicious@gmail.com"
                  aria-label="Email Us at sushidelicious@gmail.com"
                >
                  sushidelicious@gmail.com
                </a>
              </div>

              <div>
                <h3 className="border-b text-lg mb-1 font-normal ">
                  Open Hours
                </h3>
                <p>Mon - Fri: 9am - 10pm</p>
                <p>Sat - Sun: 11am - 10pm</p>
              </div>

              <div className="flex gap-4">
                <Facebook className="h-8 w-8" />
                <Instagram className="h-8 w-8" />
              </div>
            </div>
          </div>
        </MaxWidthContent>
      </section>

      {/* Footer */}
      <section className="text-center text-stone-400 text-xs uppercase font-montserra">
        <p> &copy; 2024 Sushi Restaurant. All Right Reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
