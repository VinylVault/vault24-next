'use client';
import Link from 'next/link';
export default function LegalShowSubscriptionTerms() {
  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h2 className="text-8xl font-bold text-center font-title text-vault-genre">
        Show Subscription Terms Of Service
      </h2>
      <h3 className="text-4xl font-bold text-center font-title text-vault-title">
        Rules Of The Road
      </h3>

      <h3 className="text-vault-text font-bold text-2xl py-4">Who We Are:</h3>
      <p className="text-vault-text text-xl px-4 py-2">
        Our website address is:{' '}
        <strong>https://www.thevinylvaultshow.co.uk</strong>
      </p>

      <h3 className="text-vault-text font-bold text-2xl py-4">Who You Are: </h3>
      <p className="text-vault-text text-xl px-4 py-2">
        To sign up for our subscription service, you must be a correctly
        licensed radio station for your jurisdiction, and must be able to prove
        that you are a licensed radio station upon request.
      </p>

      <h3 className="text-vault-text font-bold text-2xl py-4">
        Your Commitments:
      </h3>
      <p className="text-vault-text text-xl px-4 py-2">
        By signing up for our subscription service, you agree to making the
        agreed subscription payment to The Vinyl Vault Show via PayPal on the
        agreed date each month, for a period of 12 months, should you cancel
        the service before the end of the minimum period, at our discretion, we
        may charge you a cancellation fee of no more than the remaining monthly
        fees.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        You agree to provide true, accurate and complete information regarding
        listener figures for both the station as a whole and specifically for
        THE VINYL VAULT SHOW every quarter year.
        <br />
        -OR -<br />
        You agree to provide access to your listener statistics portal, so we
        can monitor the listener figures for the station as a whole, and for THE
        VINYL VAULT SHOW ourselves.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        You agree to play THE VINYL VAULT SHOW pre-recorded show as provided, in
        full without edits (except for a minor trimming at the end to suit your
        radio clock) at, and only at the agreed time and day every week.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        You agree to promote THE VINYL VAULT SHOW on all social media platforms
        used by your platform, excluding TikTok, using images that are approved,
        or provided by ourselves.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        You agree to play out the show trailer we will provide, created
        specifically for your station, in your standard show promotion rotation.
        Should your station not have a standard show promotion rotation, our
        show trailer should be played in your standard advertising rotation at
        no cost to THE VINYL VAULT SHOW.
      </p>
      <h3 className="text-vault-text font-bold text-2xl py-4">
        Our Commitments:
      </h3>
      <p className="text-vault-text text-xl px-4 py-2">
        We will upload THE VINYL VAULT SHOW and provide download links via the
        USER PORTAL on our website no later than 00:01 (UK Time) Monday each
        week. This is our primary distribution channel. If you sign up for THE
        VINYL VAULT SHOW via a syndication aggregator, the files will be added
        to authorised aggregators shortly after this time. We do not accept
        responsibility for the availability of files provided to aggregators
        once we have uploaded them.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        We will provide a playlist in the SHOW ARCHIVE section of our website
        for each show.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        We will promote each show on our social media, by reposting a maximum of
        2 posts per week, one being reposted within 24 hours of the broadcast
        time of the show.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        Should THE VINYL VAULT SHOW need to be delivered late for any reason, we
        will advise all subscribers by email and also as a post in the USER
        PORTAL on our website.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        When we schedule a week off, where there will be no new show, we will
        advise a minimum of 2 calendar weeks prior. We will provide a show from
        our archive for these weeks.
      </p>
      <h3 className="text-vault-text font-bold text-2xl py-4">
        Standard Show Schedule:
      </h3>
      <p className="text-vault-text text-xl px-4 py-2">
        There will be a maximum of 3 weeks per calendar year when there will be
        no new VINYL VAULT SHOW.
      </p>
      <p className="text-vault-text text-xl px-4 py-2">
        There will be a standard and a special VINYL VAULT SHOW provided for the
        Christmas / New Year period. There will be no new show during this
        period. The special show will be a retrospective look back over the year
        in THE VINYL VAULT.
      </p>
      <h3 className="text-vault-text font-bold text-2xl py-4">Force Majeure</h3>
      <p className="text-vault-text text-xl px-4 py-2">
        We will not be held responsible for any force majeure circumstances,
        including but not limited to:
      </p>
      <ol>
        <li>
          <p className="text-vault-text text-xl px-16 py-2">
            Sickness of Host/s and/or Guests
          </p>
          <p className="text-vault-text text-xl px-16 py-2">
            Availability of Guest/s
          </p>
          <p className="text-vault-text text-xl px-16 py-2">
            Power Failure, Internet Failure
          </p>
          <p className="text-vault-text text-xl px-16 py-2">
            Loss or Failure of Equipment, as long as THE VINYL VAULT SHOW has
            made every reasonable effort to ensure that equipment is kept in
            working order
          </p>
        </li>
        <li>
          <p className="text-vault-text text-xl px-16 py-2">
            <strong>
              There will be no reduction in fees for any week where a show has
              to be altered from advertised, or the show has to be cancelled due
              to force majeure.
            </strong>
          </p>
        </li>
      </ol>

      <p className="text-vault-text text-lg font-bold pt-6">
        Internal Document Reference : TVVS / LEGAL / SHOW SUBSCRIPTION TERMS
      </p>
      <p className="text-vault-text text-lg font-bold">
        Date Of Last Update : 01 January 2024
      </p>
      <p className="text-vault-text text-lg font-bold">
        TVVS reserves the right to amend this policy at any time.
      </p>
    </div>
  );
}
