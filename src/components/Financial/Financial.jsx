import "./Financial.css";

import { iconsImgs } from "../../utils/images";

const Finalcial = () => {
  return (
    <div className="subgrid-two-item grid-common gid-c8">
      <div className="gric-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c8-conntent">
        <p className="text text-silver-v1">
          Ipsum dolor site maet consectetur, adispiscing elit. istem vitae ...
        </p>
      </div>
    </div>
  );
};

export default Finalcial;
