import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({ title, desc, img, icon }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div className="col-sm-7">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                background: "#da9f5b",
                borderRadius: "100%",
                height: "35px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={Icons[icon]} style={{ fontSize: "1rem" }} />
            </div>
            <p className="ml-3">{title}</p>
          </div>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
