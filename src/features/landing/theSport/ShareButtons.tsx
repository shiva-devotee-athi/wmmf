"use client";

import { siteConfig } from "@/data/site";

type Props = {
  slug: string;
  title: string;
};

export default function ShareButtons({ slug, title }: Props) {
  const url = `${siteConfig.url}/news/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 666.667 666.667"
          className="h-4 w-4"
        >
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M0 700h700V0H0Z" />
            </clipPath>
          </defs>
          <g
            clipPath="url(#a)"
            transform="matrix(1.33333 0 0 -1.33333 -133.333 800)"
          >
            <path
              d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
              style={{
                fill: "#0866ff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none",
              }}
              transform="translate(600 350)"
            />
            <path
              d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z"
              style={{
                fill: "#fff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none",
              }}
              transform="translate(447.918 273.604)"
            />
          </g>
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Share on LinkedIn",
      icon: (
        <svg
          width="256"
          height="256"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 256"
          className="h-4 w-4"
        >
          <path
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
            fill="#0A66C2"
          />
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on X",
      icon: (
        <svg fill="#000000" role="img" viewBox="0 0 24 24" className="h-4 w-4">
          <title>X</title>
          <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share by email",
      icon: (
        <svg viewBox="0 49.4 512 399.42" className="h-4 w-4">
          <g fill="none" fillRule="evenodd">
            <g fillRule="nonzero">
              <path
                fill="#4285f4"
                d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
              />
              <path
                fill="#34a853"
                d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
              />
              <path
                fill="#fbbc04"
                d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
              />
            </g>
            <path
              fill="#ea4335"
              d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
            />
            <path
              fill="#c5221f"
              fillRule="nonzero"
              d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
            />
          </g>
        </svg>
      ),
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-secondary-600 transition-colors duration-150 hover:border-primary-600 hover:bg-primary-50 hover:text-primary-600"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
