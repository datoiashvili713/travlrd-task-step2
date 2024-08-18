"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { EmailTemplate } from "../_components/EmailTemplate";

const supabase_api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Y3N6bnhiandicmx5dHdrdXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NDg0MDksImV4cCI6MjAzODUyNDQwOX0.TvAG8TQd1gYp2FOBxj_REFGfHAK68YjizItpTPKsTOU";
const supabase_url = "https://qzcsznxbjwbrlytwkuwg.supabase.co";

const supabase = createClient(supabase_url, supabase_api);

const resend = new Resend("re_FHhCvuzM_DfDvW5GXbrEuhfKBC6zt3H1A");

export const handleCalculation = async (FormData: FormData) => {
  const chosenIndustry = FormData.get("industry");
  const chosenRate = Number(FormData.get("rate"));
  let calculatedRate = 0;

  if (chosenIndustry === "Information Technology") {
    calculatedRate = 1.5 * chosenRate;
  } else if (chosenIndustry === "Clothing & Fashion") {
    calculatedRate = 2.25 * chosenRate;
  } else if (chosenIndustry === "Sports") {
    calculatedRate = 1.33 * chosenRate;
  }

  const newRow = {
    name: FormData.get("name") as string,
    email: FormData.get("email") as string,
    phone: Number(FormData.get("phone")),
    website: FormData.get("website") as string,
    industry: FormData.get("industry") as string,
    visitors: Number(FormData.get("visitors")),
    rate: Number(FormData.get("rate")),
    calculatedrate: Number(calculatedRate),
  };

  const { error } = await supabase.from("travlrd-user").insert(newRow);

  if (!error) {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "iashkaa123@gmail.com",
      subject: "Hello",
      react: EmailTemplate(newRow),
    });
  }
};
