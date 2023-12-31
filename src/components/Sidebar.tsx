/** @format */

import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  Coffee,
  Cookie,
  Disc,
  Disc2,
  Disc3,
  Library,
  Facebook,
  Hammer,
  Headphones,
  Home,
  MessagesSquare,
  Mic,
  Mic2,
  Plus,
  PenLine,
  Scale,
  ShieldQuestion,
  Twitch,
  Twitter,
  UserCheck,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { Children, ElementType, ReactNode, useState } from 'react';
import { Button, buttonStyles } from './Button';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from '@geist-ui/core';
import { useSidebarContext } from '@/contexts/SidebarContext';
import { PageHeaderFirstSection } from './PageHeader';

// TODO ON AIR / SCHEDULE TO BE `IF` STATEMENTED - IF ON AIR NO SCHEDULE VICEVERSA
// TODO FIND FINAL ( FULL COLOUR ) IMAGES
// TODO GET TOOLTIP WORKING
// TODO ? MOVE MENU ITEMS TO DATABASE

export function Sidebar() {
  const { isLargeOpen, isSmallOpen, closeSidebar } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 w-20 overflow-y-auto scrollbar-hidden pb-4 flex-col flex ml-1 pl-4 center ${
          isLargeOpen ? 'lg:hidden' : 'lg:flex'
        }`}
      >
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <p className="pt-2 border-t-2 border-vault-border" />
        <SmallSidebarItem Icon={Disc2} title="The Vault" url="/the_vault" />
        <SmallSidebarItem
          Icon={Headphones}
          title="Archive"
          url="/show_archive"
        />
        <SmallSidebarItem Icon={Calendar} title="Schedule" url="/schedule" />
        <SmallSidebarItem Icon={PenLine} title="Blog" url="/blog" />
        <SmallSidebarItem Icon={ShieldQuestion} title="FAQs" url="/faqs" />
        <p className="pt-2 border-t-2 border-vault-border" />
        <SmallSidebarItem
          Icon={MessagesSquare}
          title="Contact"
          url="/contact"
        />
      </aside>
      {isSmallOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 x-[999] opacity-10 bg-vault-background"
        >
          Close
        </div>
      )}
      <aside
        className={`lg:sticky top-0 w-72 absolute overflow-y-auto m-4 scrollbar-hidden pb-5 flex-col gap-2  ${
          isLargeOpen ? 'lg:flex' : 'lg:hidden'
        } ${
          isSmallOpen
            ? 'flex z-[999] bg-vault-background max-h-screen'
            : 'hidden'
        }`}
      >
        <div className="lg:hidden py-2 pl-2 sticky top-0 bg-vault-menubar">
          <PageHeaderFirstSection hidden={false} />
        </div>
        <LargeSidebarItem Icon={Home} title="Home" url="/" />
        <p className="border-t-2 border-vault-border" />
        <LargeSidebarSection title="The Vinyl Vault" visibleCount={10}>
          <LargeSidebarItem Icon={Disc2} title="The Vault" url="/the_vault" />
          <LargeSidebarItem
            Icon={Plus}
            title="Recent Additions"
            url="/the_vault"
          />
          <LargeSidebarItem
            Icon={Library}
            title="Full Collection"
            url="/the_vault/releases"
          />
          <LargeSidebarItem
            Icon={Mic2}
            title="Artist List"
            url="/the_vault/artists"
          />
          <LargeSidebarItem
            Icon={Headphones}
            title="Archive"
            url="/show_archive"
          />
          <LargeSidebarItem Icon={Calendar} title="Schedule" url="/schedule" />
          <LargeSidebarItem Icon={PenLine} title="Blog" url="/blog" />
          <LargeSidebarItem Icon={ShieldQuestion} title="FAQs" url="/faqs" />
        </LargeSidebarSection>
        <p className="border-t-2 border-vault-border" />
        <LargeSidebarSection title="Contact The Vinyl Vault">
          <LargeSidebarItem
            Icon={MessagesSquare}
            title="Contact"
            url="/contact"
          />
          <LargeSidebarItem
            Icon={Twitter}
            title="Twitter"
            url="/social/twitter"
          />
          <LargeSidebarItem
            Icon={Facebook}
            title="Facebook"
            url="/social/facebook"
          />
          <LargeSidebarItem Icon={Twitch} title="Twitch" url="/social/twitch" />
          <LargeSidebarItem
            Icon={Youtube}
            title="YouTube"
            url="/social/youtube"
          />
          <LargeSidebarItem
            Icon={Disc3}
            title="Discogs"
            url="https://www.discogs.com/user/DexVinyl"
          />
        </LargeSidebarSection>
        <p className="border-t-2 border-vault-border" />
        <LargeSidebarSection title="Treat The Vinyl Vault">
          <LargeSidebarItem
            Icon={Coffee}
            title="Buy A Coffee"
            url="/buy_a_coffee"
          />
        </LargeSidebarSection>
        <p className="border-t-2 border-vault-border" />
        <LargeSidebarSection title="Legal">
          <LargeSidebarItem
            Icon={Cookie}
            title="Privacy Policy"
            url="/legal/privacy_policy"
          />
          <LargeSidebarItem
            Icon={Hammer}
            title="GDPR Policy"
            url="/legal/gdpr_policy"
          />
          <LargeSidebarItem
            Icon={Scale}
            title="Terms of Service"
            url="/legal/terms_of_service"
          />
          <LargeSidebarItem
            Icon={UserCheck}
            title="Show Subsctiption Terms"
            url="/legal/show_subscription_terms"
          />
        </LargeSidebarSection>
        <p className="border-t-2 border-vault-border" />
      </aside>
    </>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleCount?: number;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ size: 'icon' }),
        'h-12 w-12 m-auto center my-1 flex flex-col items-center gap-1',
      )}
    >
      {/* <Tooltip text={title} placement="right" type="dark"> */}
      <Icon />
      {/* </Tooltip> */}
    </Link>
  );
}

function LargeSidebarItem({
  isActive = false,
  Icon,
  title,
  url,
}: LargeSidebarItemProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        buttonStyles({ size: 'icon' }),
        `text-vault-link w-full justify-start flex rounded-lg gap-4 p-3 ${
          isActive ? 'font-bold bg-vault-link text-vault-background' : undefined
        }`,
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </Link>
  );
}

function LargeSidebarSection({
  children,
  title,
  visibleCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  // https://youtu.be/ymGB1lqP1CM?t=5146
  return (
    <div>
      {title && (
        <div className="text-lg mt-4 ml-2 text-vault-title font-title">
          {title}
        </div>
      )}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          className="w-full h-6 flex items-center rounded-lg gap-3 p-3 px-2"
        >
          <ButtonIcon className="w-6 h-6" />
          <div className="justify-center text-sm">
            {isExpanded ? 'Show Less' : 'Show More'}
          </div>
        </Button>
      )}
    </div>
  );
}
