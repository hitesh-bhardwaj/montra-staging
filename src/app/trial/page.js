import PaymentsHomepage from "@/components/Extras/PaymentsHomepage";
import FeaturesText from "@/components/Homepage/FeaturesText";
import PaymentTrial from "@/components/Homepage/PaymentsTrial";


export default function Home() {
  return (
    <>
      <div className="bg-white h-screen mt-[-100vh]" />
      <PaymentTrial/>
      <div className="bg-white h-screen" />
      {/* <PaymentsHomepage /> */}
      <div className="bg-white h-screen" />
    </>
  );
}


