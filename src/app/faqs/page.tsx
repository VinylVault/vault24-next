import Link from 'next/link';

export default function OnAir() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-12 bg-vault-background">
        <h3 className="text-8xl font-bold font-title text-center text-vault-title">
          Frequently Asked Questions
        </h3>
        <h3 className="text-4xl font-bold font-title text-vault-genre">
          Question List:
        </h3>
        <div className="grid gap-4 w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mr-4">
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Question 1:</strong>{' '}
            <Link href="/faqs#q1_most_recent">
              What Are The Most Recent Additions?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Question 2:</strong>{' '}
            <Link href="/faqs#q2_statistics">
              What Are The Statistics For The Vinyl Vault?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <strong>Question 3:</strong>{' '}
            <Link href="/faqs#q3_how_long">
              How Long Has The Vinyl Vault Been On Air?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q4_best_find">
              <strong>Question 4:</strong> Best Crate Digging Find?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q5_buy_collections">
              <strong>Question 5:</strong> Do You Buy Collections?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q6_favourite_record_shop">
              <strong>Question 6:</strong> Favourite Record Shop?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q7_discogs_sellers">
              <strong>Question 7:</strong> Recommended Discogs Sellers?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q8_least_favourite_record_shop">
              <strong>Question 8:</strong> Least Favourite Record Shop?
            </Link>
          </p>
          <p className="text-vault-text mx-2 mb-1 text-lg">
            <Link href="/faqs#q9_favourite_record_in_vinyl_vault">
              <strong>Question 9:</strong> Favourite Record In The Vinyl Vault?
            </Link>
          </p>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 m-4" id="q1_most_recent">
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 1: What Are The Most Recent Additions?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong>
          </p>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 m-4" id="q2_statistics">
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 2: What Are The Statistics For The Vinyl Vault?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> The best way to answer this question is to
            give you the live numbers from the database.
          </p>
          <ol>
            <li>
              <p className="text-vault-text mx-8 mb-1 text-lg">
                <strong>Number of Albums:</strong> 1,000
              </p>
            </li>
            <li>
              <p className="text-vault-text mx-8 mb-1 text-lg">
                <strong>Number of Singles:</strong> 1,000
              </p>
            </li>
            <li>
              <p className="text-vault-text mx-8 mb-1 text-lg">
                <strong>Number of Tracks:</strong> 1,000
              </p>
            </li>
            <li>
              <p className="text-vault-text mx-8 mb-1 text-lg">
                <strong>Number of Artists:</strong> 1,000
              </p>
            </li>
            <li>
              <p className="text-vault-text mx-8 mb-1 text-lg">
                <strong>
                  Number of Items On Dex&apos;s Wishlist / Wantlist:
                </strong>{' '}
                1,000
              </p>
            </li>
          </ol>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 m-4" id="q3_how_long">
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 3: How Long Has The Vinyl Vault Been On Air?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> Officially{' '}
            <strong>The Vinyl Vault Show</strong> started in June 2015, for
            BearTown Radio in Congleton, East Cheshire. However, before then, I
            was presenting a daily morning show on 6Towns Radio in
            Stoke-On-Trent and the Vinyl Vault was a regular feature back in
            2014.
          </p>
        </div>
        <div className="grid gap-4 w-full grid-cols-1 m-4" id="q4_best_find">
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 4: Best Crate Digging Find?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> I&apos;m going to start the answer to this
            with a question... What does <strong>Best</strong> mean? It is very
            subjective.
            <br />
            Is best defined as: Quality? Rarity? Valuable? Something I&apos;ve
            wanted for a long time?
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            I have had records from Crate Digging that fit into all these
            categories. To me though, my best finds have always been something
            that is <strong>unexpected</strong> that has maybe just caught my
            eye, usually something that I wasn&apos;t even looking for.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            When I go crate diving, I&apos;m usually in a charity (Goodwill)
            shop, or in the 3 / 5 / 10 records for £ / $ / &euro; xx.xx bins at
            an independent record store. I don&apos;t usually look for anything
            in particular, but I always have and idea of whats on my wishlist of
            course.
          </p>
        </div>
        <div
          className="grid gap-4 w-full grid-cols-1 m-4"
          id="q5_buy_collections"
        >
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 5: Do You Buy Collections?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> Yes ... Sometimes. Please contact us using
            the{' '}
            <Link href="/contact" className="text-vault-link">
              Contact Us page
            </Link>{' '}
            on the website.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            If you are contacting us about a collection, please include an email
            address, or telephone number so we can contact you. It will be
            helpful if you have a list of the records in the collection, or a
            link to a Discogs page where the collection is listed.
          </p>
        </div>
        <div
          className="grid gap-4 w-full grid-cols-1 m-4"
          id="q6_favourite_record_shop"
        >
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 6: Favourite Record Shop?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> It is almost impossible for me to name just
            one Record Shop that I enjoy shopping in. So here&apos;s a few that
            I can recommend to you based on my experience shopping in them.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            The only fair way to list these stores is alphabetically.
          </p>
        </div>
        <div
          className="grid gap-4 w-full grid-cols-1 m-4"
          id="q7_discogs_sellers"
        >
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 7: Recommended Discogs Sellers?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> How can I answer this question? I have not
            shopped with every seller on Discogs, so I won&apos;t recommend any
            specific sellers. However I will give some advice on choosing a
            seller to trade with.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>1.</strong> Do NOT believe the photographs of releases on
            Discogs for the item you are buying. Always ask for photographs of
            the actual item. The Discogs marketplace uses the same images as the
            library so if you want a specific cover, or signed or unsigned copy,
            ask the vendor for a photograph, a good vendor will not mind finding
            the record, and sending you a photograph or two.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>2.</strong> Before you order, ensure that the vendor has the
            item in stock, especially if the item is unusual, or brand new and
            sealed. I made the mistake of not asking before buying once, as
            there was one new item and a few second hand items in my cart, only
            for the seller to cancel the whole order as the new record
            wasn&apos;t available from his wholesale provider. That said,
            &quot;dropship&quot; vendors are the minority on Discogs so you
            probably won&apos;t have this issue.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>3.</strong> Look at sellers ratings and reviews, both as a
            buyer (if there are any) and of course as a seller. A good seller,
            will have many public reviews, and 4 or 5 stars as a rating. Check
            for bad reviews, and make sure you read any challenges to them, if
            the challenge reason feels genuine to you, go with your gut.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>4.</strong> Read the item description carefully. Pay close
            attention to the condition listed, conditions are subjective,
            although there are guidelines for how to grade. Unless the item is
            marked as <strong>MINT</strong> or <strong>New, Sealed</strong> I
            always expect the quality to be between the lower end of the stated
            condition to the upper end of the previous condition. Eg: If a
            release is marked as VG+ I expect it to come closer to VG than Mint.
          </p>
        </div>
        <div
          className="grid gap-4 w-full grid-cols-1 m-4"
          id="q8_least_favourite_record_shop"
        >
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 8: Least Favourite Record Shop?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> I have been asked many times if there are
            any record shops I wouldn&apos;t shop in again, and there are a few.
            However I will keep that list to myself, as I believe that you
            should make your own judgment about any store you shop in. What I
            like about a store you may not, and if I think records are
            over-priced in one store you may think the pricing is good.
          </p>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            The only vendor I will only shop in if I can not get a release
            anywhere else from is Amazon. I would much prefer to support a local
            independent record store than a discount, bulk buying behemoth.
          </p>
        </div>
        <div
          className="grid gap-4 w-full grid-cols-1 m-4"
          id="q9_favourite_record_in_vinyl_vault"
        >
          <h4 className="text-4xl font-bold font-title text-vault-genre">
            Question 9: Favourite Record In The Vinyl Vault?
          </h4>
          <p className="text-vault-text mx-8 mb-1 text-lg">
            <strong>Answer:</strong> I am a very moody listener when I&apos;m
            not presenting the radio show, by that I mean dependant on my mood,
            my favourites change. However, if you read my{' '}
            <Link className="text-vault-link" href="/about">
              Post|Apocalype Playlist
            </Link>{' '}
            in the Blog, you will see a few of my regular listens.
          </p>
        </div>
      </div>
    </>
  );
}
