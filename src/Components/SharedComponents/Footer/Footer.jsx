const Footer = () => {
  return (
    <div>
      <div className="bg-base-200">
      <footer className="container mx-auto footer p-10 text-base-content">
        <aside>
          <p className="h-12 w-12">
            <img src="/Tourify.png" alt="" />
          </p>
          <p>
            Tourify - Your Tour Partner
            <br />
            Providing reliable tour plans since 2008
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-40 md:w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      </div>

      <div className="bg-[#111111]">
        <div className="container mx-auto text-center opacity-80 px-6 py-3 text-white md:flex justify-between items-center ">
        <h1>All Rights Reserved @ Tourify © Copyright 2024</h1>
        <ul className="flex pt-4 gap-2 md:pt-0 md:gap-6 text-xs md:text-base">
          <li className="hover:cursor-pointer hover:underline">Disclaimer</li>
          <li className="hover:cursor-pointer hover:underline">
            Privecy policy
          </li>
          <li className="hover:cursor-pointer hover:underline">
            Terms & conditions
          </li>
          <li className="hover:cursor-pointer hover:underline">
            Return refund policy
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
    