import React from "react";
import privacyPolicyData from "../data/info/privacyPolicy.json";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white p-8 flex flex-col">
      <div className="T&C_section mt-8 pt-4 ">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p>
          Welcome to Progyan Educations! These terms and conditions outline the
          rules and regulations for the use of Progyan Educations's Website,
          located at{" "}
          <a href="https://www.progyaneducations.in.">
            https://www.progyaneducations.in.
          </a>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Progyan Educations if you do not
          agree to take all of the terms and conditions stated on this page.
        </p>
      </div>

      {/* Cookies Section */}
      <div className="cookie_sec">
        <h2 className="text-2xl font-bold mt-8 mb-2">Cookies:</h2>
        <p>{privacyPolicyData.cookies}</p>
      </div>

      {/* License Section */}
      <div className="License_sec">
        <h2 className="text-2xl font-bold mt-8 mb-2">License:</h2>
        <p>{privacyPolicyData.license}</p>
      </div>

      {/* Parts of this website offer users an opportunity to post and exchange opinions */}
      <div className="user_gen_sec">
        <h2 className="text-2xl font-bold mt-8 mb-2">
          User-Generated Content:
        </h2>
        <p>{privacyPolicyData.userGeneratedContent}</p>
      </div>

      {/* Hyperlinking Section */}
      <div className="hyperlink_sec">
        <h2 className="text-2xl font-bold mt-8 mb-2">
          Hyperlinking to our Content:
        </h2>
        <p>{privacyPolicyData.hyperlinking}</p>
      </div>

      {/* Content Liability Section */}
      <h2 className="text-2xl font-bold mt-8 mb-2">Content Liability:</h2>
      <p>{privacyPolicyData.contentLiability}</p>

      {/* Reservation of Rights Section */}
      <h2 className="text-2xl font-bold mt-8 mb-2">Reservation of Rights:</h2>
      <p>{privacyPolicyData.reservationOfRights}</p>

      {/* Removal of Links Section */}
      <h2 className="text-2xl font-bold mt-8 mb-2">
        Removal of links from our website:
      </h2>
      <p>{privacyPolicyData.removalOfLinks}</p>

      {/* Disclaimer Section */}
      <h2 className="text-2xl font-bold mt-8 mb-2">Disclaimer:</h2>
      <p>{privacyPolicyData.disclaimer}</p>
    </div>
  );
};

export default PrivacyPolicy;
