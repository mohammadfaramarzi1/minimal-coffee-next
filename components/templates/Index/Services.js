import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ services }) {
  console.log(services);
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}

          {/* <ServiceItem
            title="Fastest Door Delivery"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/img/service-1.jpg"
            icon="faTruck"
          />
          <ServiceItem
            title="Fresh Coffee Beans"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/img/service-2.jpg"
            icon="faCoffee"
          />
          <ServiceItem
            title="Online Table Booking"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/img/service-3.jpg"
            icon="faAward"
          />
          <ServiceItem
            title="Best Quality Coffee"
            desc="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
            et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
            takima erat tempor"
            img="/img/service-4.jpg"
            icon="faTable"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
