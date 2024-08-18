import * as React from "react";

export const EmailTemplate = ({
  name,
  email,
  phone,
  website,
  industry,
  visitors,
  rate,
  calculatedrate,
}: {
  name: string;
  email: string;
  phone: number;
  website: string;
  industry: string;
  visitors: number;
  rate: number;
  calculatedrate: number;
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Website: {website}</p>
    <p>Industry: {industry}</p>
    <p>Visitors: {visitors}</p>
    <p>Rate: {rate}</p>
    <p>Calculated Rate: {calculatedrate}</p>
  </div>
);
