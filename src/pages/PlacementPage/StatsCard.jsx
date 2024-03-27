import React from "react";

const StatsCard = ({
  icon,
  value,
  fontSize,
  iconWidth,
  textStyle,
  text,
  cardWidth,
}) => {
  return (
    <div
      className="tw-border tw-p-4  tw-rounded-lg tw-mb-1"
      style={{ paddingLeft: "1rem", width: cardWidth ? cardWidth : "" }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={icon}
          alt=""
          style={{ width: iconWidth ? iconWidth : "2vw" }}
        />
        <strong
          style={{
            color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
            fontSize: fontSize ? fontSize : " xx-large",
          }}
        >
          {value}
        </strong>
      </div>
      <p className={`tw-capitalize ${textStyle && textStyle}`}>{text}</p>
    </div>
  );
};

export default StatsCard;
