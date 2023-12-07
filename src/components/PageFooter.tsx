import { useState } from 'react';
// import { Link } from "react-router-dom"

export function PageFooter() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="w-full bg-vault-menubar pt-2 pb-2 px-2 border-t-2 border-vault-border">
      <p className="text-vault-text text-2xl w-full text-center font-title">
        © 2014 - {new Date().getFullYear()} Dex Vinyl &amp; The Vinyl Vault Show. All Rights
        Reserved</p>
      <p className="text-vault-text text-xl w-full text-center font-title">
        All Trademarks and Copyright Images in Record Label Art, Artist Art and
        Release Art are ©, ™ / ® respective owners. These images are used for
        purposes defined under &quot;Fair Use&quot; regulations.
      </p>
    </div>
  );
}
