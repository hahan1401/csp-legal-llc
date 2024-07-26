import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  description:
    "CSP Legal LLC (CSP) is a regional law firm with offices in Singapore, Hanoi and Ho Chi Minh City. We advise clients across the region, over a wide range of commercial matters. In particular our lawyers have been actively involved in advising on direct investments in Vietnam since 1994. CSP has international professional skills and knowledge to assist our clients in their investments overseas particularly in Vietnam where we have an outstanding team of lawyers who are able to provide solutions to our client's business and investment.",
  authors: {
    name: "MatrixAsia",
  },
};

const page = () => {
  return (
    <main>
      <PageTitle title="Our Firm" />
      <div className="md-l:flex md-l:gap-9">
        <div className="mb-[10px] md-l:mb-0">
          <p>
            CSP Legal LLC (“CSP”) is a regional law firm with offices in
            Singapore, Hanoi and Ho Chi Minh City. We advise clients across the
            region, over a wide range of commercial matters, cross-border
            transactions and arbitration matters. In particular our lawyers have
            been actively involved in advising on direct investments in Vietnam
            since 1994. CSP has international professional skills and knowledge
            to assist our clients in their investments overseas particularly in
            Vietnam where we have an outstanding team of lawyers who are able to
            provide solutions to our client’s business and investment.
          </p>
          <br />
          <p>
            CSP’s team has worked together for many years and our close teamwork
            has enabled us to provide our clients with effective legal support
            in Vietnam, Singapore and other countries in the region. We ensure
            that our clients’ interests are placed foremost and provide our
            clients with clear and practical advice to enable our clients to
            achieve their objectives in the modern commercial world.
          </p>
        </div>

        <div>
          <div className="md-l:w-[315px]">
            <div className="relative pt-[62.85%]">
              <Image
                alt="ourfirm image"
                // width={315}
                // height={198}
                fill
                src={"/images/ourfirm/ourfirm_1.png"}
              />
            </div>
          </div>
          <div className="md-l:w-[315px] mt-1">
            <div className="relative pt-[62.85%]">
              <Image
                alt="ourfirm image"
                fill
                src={"/images/ourfirm/ourfirm_2.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
