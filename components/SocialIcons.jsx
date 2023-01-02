import React from "react";
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";

const SocialIcons = ({ styles }) => {
  return (
    <div>
      <ul className={`${styles.socials} flex flex-col gap-8`}>
        <li>
          <a href="">
            <GrTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="">
            <GrFacebookOption />
          </a>
        </li>
        <li>
          <a href="">
            <GrLinkedinOption />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
